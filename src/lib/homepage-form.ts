export interface HomepageFormData {
  claimType: string
  propertyType: string
  phone: string
  email: string
  dateOfDamage: string
  zipCode: string
  affectsLife: 'yes' | 'no' | ''
}

export type HomepageFormLocation = 'hero' | 'footer'

export function buildHomepageFormSummary(
  data: HomepageFormData,
  location: HomepageFormLocation,
): string {
  const lines = [
    `Lead from homepage claim value form (${location}).`,
    `Claim type: ${data.claimType || 'not specified'}.`,
    `Property type: ${data.propertyType || 'not specified'}.`,
    `ZIP: ${data.zipCode || 'not specified'}.`,
    `Date of damage: ${data.dateOfDamage || 'not specified'}.`,
    `Affects daily living/business: ${data.affectsLife || 'not specified'}.`,
  ]
  return lines.join(' ')
}

export async function submitHomepageForm(
  data: HomepageFormData,
  formLocation: HomepageFormLocation,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/website-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, formLocation }),
    })

    const json = await res.json().catch(() => ({}))

    if (!res.ok || !json.ok) {
      return { ok: false, error: json.error || 'Submission failed. Please call 1-888-397-5420.' }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please call 1-888-397-5420.' }
  }
}
