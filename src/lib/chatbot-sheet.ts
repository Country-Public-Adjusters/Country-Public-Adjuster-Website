// Fetches the chatbot system prompt from Google Sheets.
// Cached for 5 minutes so changes go live quickly without hammering the API.

const SHEET_ID = '1KyME9Xe-k7k716comX-zZDvCl4tjqsIItj-5XsXH4AM'
const API_KEY  = process.env.GOOGLE_SHEETS_API_KEY

let cachedPrompt: string | null = null
let cacheExpiry = 0
const TTL = 5 * 60 * 1000 // 5 minutes

async function fetchTab(tabName: string): Promise<string[][]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(tabName)}!A:G?key=${API_KEY}`
  const res  = await fetch(url, { next: { revalidate: 300 } })
  if (!res.ok) throw new Error(`Sheet fetch failed for tab "${tabName}": ${res.status}`)
  const json = await res.json()
  return (json.values ?? []) as string[][]
}

function val(rows: string[][], field: string): string {
  const row = rows.find(r => r[0]?.trim() === field)
  return row?.[1]?.trim() ?? ''
}

function buildPrompt(
  identity:    string[][],
  intake:      string[][],
  flows:       string[][],
  faqs:        string[][],
  kb:          string[][],
  rules:       string[][],
  objections:  string[][],
): string {

  // ── Identity ─────────────────────────────────────────────
  const botName       = val(identity, 'Bot Name')
  const opening       = val(identity, 'Opening Message')
  const identityStmt  = val(identity, 'Identity (if asked if AI)')
  const tone          = val(identity, 'Tone')
  const format        = val(identity, 'Response Format')
  const phone         = val(identity, 'Phone')
  const email         = val(identity, 'Email')
  const areas         = val(identity, 'Primary Service Areas')
  const successRate   = val(identity, 'Success Rate')
  const experience    = val(identity, 'Years Experience')

  // ── Conversation Flows ────────────────────────────────────
  const flowRows = flows.slice(1).filter(r => r[0] && r[1])
  const flowText = flowRows.map(r => {
    const [num, name, triggers, respA, respB, respC] = r
    let text = `SCENARIO ${num}: ${name}\nTriggers: ${triggers}\nResponse A: ${respA}`
    if (respB) text += `\nResponse B (if visitor follows up with concern): ${respB}`
    if (respC) text += `\nResponse C (if visitor acknowledges): ${respC}`
    return text
  }).join('\n\n')

  // ── FAQ ───────────────────────────────────────────────────
  const faqRows = faqs.slice(1).filter(r => r[1] && r[2])
  const faqText = faqRows.map(r => `Q: ${r[1]}\nA: ${r[2]}`).join('\n\n')

  // ── Knowledge Base ────────────────────────────────────────
  const kbText = kb.slice(1)
    .filter(r => r[0] && r[1])
    .map(r => `${r[0]}: ${r[1]}`)
    .join('\n')

  // ── Behavior Rules ────────────────────────────────────────
  const rulesText = rules.slice(1)
    .filter(r => r[0] && r[1])
    .map(r => `${r[0]}: ${r[1]}`)
    .join('\n')

  // ── Intake Steps ─────────────────────────────────────────
  const intakeText = intake.slice(1)
    .filter(r => r[0] && r[1])
    .map(r => `${r[0]}: ${r[1]}${r[2] ? `\nExample: ${r[2]}` : ''}`)
    .join('\n\n')

  // ── Objections ────────────────────────────────────────────
  const objText = objections.slice(1)
    .filter(r => r[0] && r[1])
    .map(r => `"${r[0]}" → ${r[1]}${r[2] ? ` (${r[2]})` : ''}`)
    .join('\n')

  return `
═══════════════════════════════════════════════════════
SECTION 1 — WHO YOU ARE AND HOW TO BEHAVE
═══════════════════════════════════════════════════════

Your name is ${botName}. You are the AI intake assistant for the founders of Country Public Adjusters.

You represent Country Public Adjusters, which works for the property owner — not the insurance company.

Opening message to display: ${opening}

If asked whether you are AI or a real person, say: "${identityStmt}"

Include the disclaimer naturally when a visitor asks about specific coverage, policy interpretation, or legal matters.

TONE: ${tone}

RESPONSE FORMAT: ${format}

NON-NEGOTIABLE RULES
- Never guarantee coverage, outcomes, timelines, or settlement amounts.
- Never say a claim is definitely covered.
- Never promise an increased payout.
- Never give legal advice or interpret policy language definitively.
- Never invent policy details, availability, appointments, or service coverage.
- Never argue with the visitor. Never shame the insurance company.
- If something is unclear, say so simply and move to the safest next step.

SAFETY: If the visitor mentions active fire, gas leak, collapse risk, electrical danger, flooding with live power, or injury — tell them to call 911 immediately.

═══════════════════════════════════════════════════════
SECTION 2 — BEHAVIOR RULES
═══════════════════════════════════════════════════════

${rulesText}

═══════════════════════════════════════════════════════
SECTION 3 — CONVERSATION FLOW (INTAKE STEPS)
═══════════════════════════════════════════════════════

${intakeText}

═══════════════════════════════════════════════════════
SECTION 4 — EXACT CONVERSATION FLOWS FOR COMMON OBJECTIONS
═══════════════════════════════════════════════════════

When a visitor raises one of the questions or concerns below, use the matching response exactly as written. Do not paraphrase. After the final line in any flow, pause and allow the visitor to continue. Do not automatically move into intake after a flow ends.

${flowText}

═══════════════════════════════════════════════════════
SECTION 5 — FAQ ANSWERS (ALL ${faqRows.length})
═══════════════════════════════════════════════════════

${faqText}

═══════════════════════════════════════════════════════
SECTION 6 — OBJECTION HANDLING
═══════════════════════════════════════════════════════

${objText}

═══════════════════════════════════════════════════════
SECTION 7 — KNOWLEDGE BASE
═══════════════════════════════════════════════════════

${kbText}

CONTACT INFORMATION
- Phone: ${phone}
- Email: ${email}
- Service Areas: ${areas}
- Success Rate: ${successRate}
- Experience: ${experience}

SUCCESS = the visitor feels heard, the situation is understood, urgency is correctly identified, name, phone, and email are captured early, full intake details are collected naturally, and the visitor clearly understands a human from the team will follow up as soon as they are available.
`.trim()
}

export async function getSystemPrompt(fallback: string): Promise<string> {
  // Return cached version if still fresh
  if (cachedPrompt && Date.now() < cacheExpiry) return cachedPrompt

  // No API key configured — use fallback
  if (!API_KEY) {
    console.warn('GOOGLE_SHEETS_API_KEY not set — using hard-coded prompt')
    return fallback
  }

  try {
    const [identity, intake, flows, faqs, kb, rules, objections] = await Promise.all([
      fetchTab('Identity & Settings'),
      fetchTab('Intake Flow'),
      fetchTab('Conversation Flows'),
      fetchTab('FAQ Answers (All 52)'),
      fetchTab('Knowledge Base'),
      fetchTab('Behavior Rules'),
      fetchTab('Objection Responses'),
    ])

    const prompt = buildPrompt(identity, intake, flows, faqs, kb, rules, objections)
    cachedPrompt = prompt
    cacheExpiry  = Date.now() + TTL
    console.log('System prompt refreshed from Google Sheets')
    return prompt
  } catch (err) {
    console.error('Failed to fetch from Google Sheets, using fallback:', err)
    return fallback
  }
}
