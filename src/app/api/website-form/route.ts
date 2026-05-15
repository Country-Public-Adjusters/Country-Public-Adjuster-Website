import { z } from 'zod'
import { buildHomepageFormSummary } from '@/lib/homepage-form'
import { sendToGHL } from '@/lib/ghl'

export const runtime = 'nodejs'

const bodySchema = z.object({
  claimType: z.string().min(1),
  propertyType: z.string().min(1),
  phone: z.string().min(10),
  email: z.string().email(),
  dateOfDamage: z.string().min(1),
  zipCode: z.string().min(3),
  affectsLife: z.enum(['yes', 'no', '']).optional(),
  formLocation: z.enum(['hero', 'footer']),
})

export async function POST(req: Request) {
  try {
    const parsed = bodySchema.safeParse(await req.json())

    if (!parsed.success) {
      return Response.json(
        { ok: false, error: 'Invalid form data' },
        { status: 400 },
      )
    }

    const { formLocation, affectsLife, ...fields } = parsed.data
    const formData = {
      ...fields,
      affectsLife: affectsLife ?? ('' as const),
    }
    const userAgent = req.headers.get('user-agent') ?? undefined
    const pageUrl = req.headers.get('referer') ?? undefined

    const result = await sendToGHL({
      source: 'website_form',
      phone: formData.phone.trim(),
      email: formData.email.trim().toLowerCase(),
      property_type: formData.propertyType,
      damage_type: formData.claimType,
      property_location: formData.zipCode.trim(),
      is_urgent: formData.affectsLife === 'yes',
      ai_summary: buildHomepageFormSummary(formData, formLocation),
      form_location: formLocation,
      page_url: pageUrl,
      user_agent: userAgent,
      submitted_at: new Date().toISOString(),
    })

    if (result.skipped) {
      return Response.json(
        { ok: false, error: 'Lead routing is not configured' },
        { status: 503 },
      )
    }

    if (!result.ok) {
      return Response.json(
        { ok: false, error: 'Failed to send lead' },
        { status: 502 },
      )
    }

    return Response.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('website-form API error:', message)
    return Response.json({ ok: false, error: message }, { status: 500 })
  }
}
