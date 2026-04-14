import { cn } from '@/lib/utils'

type CurvePosition = 'top' | 'bottom'
type CurveVariant = 'wave' | 'swoosh' | 'arch' | 'tilt'

interface SectionCurveProps {
  position: CurvePosition
  fromColor: string   // Tailwind bg class or hex
  toColor: string
  variant?: CurveVariant
  className?: string
  flip?: boolean
}

const CURVES: Record<CurveVariant, string> = {
  wave:   'M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,80C960,85,1056,75,1152,64L1200,56L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  swoosh: 'M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z',
  arch:   'M0,224L1440,0L1440,320L0,320Z',
  tilt:   'M0,192L1440,64L1440,320L0,320Z',
}

/**
 * SVG curve connector between two sections.
 * Place inside the UPPER section at bottom, or LOWER section at top.
 */
export default function SectionCurve({
  position,
  fromColor,
  toColor,
  variant = 'swoosh',
  className,
  flip = false,
}: SectionCurveProps) {
  const path = CURVES[variant]

  return (
    <div
      className={cn(
        'absolute left-0 right-0 overflow-hidden leading-none pointer-events-none z-10',
        position === 'top' ? 'top-0' : 'bottom-0',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={cn(
          'block w-full',
          position === 'top' ? 'rotate-180' : '',
          flip ? 'scale-x-[-1]' : ''
        )}
        style={{ height: '60px' }}
      >
        {/* The fill color = the section BELOW (what we're transitioning to) */}
        <path d={path} fill={toColor} />
      </svg>
    </div>
  )
}

/**
 * Simple glow line separator — used between sections as a subtle connector.
 */
export function GlowDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn('w-full h-px', className)}
      style={{
        background:
          'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.3) 50%, transparent 100%)',
      }}
      aria-hidden="true"
    />
  )
}
