import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* Monogram emblem */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        {/* Shield / crest shape */}
        <path
          d="M20 2L4 9v10c0 9.5 6.8 18.4 16 20.9C29.2 37.4 36 28.5 36 19V9L20 2z"
          fill="#F59E0B"
          fillOpacity="0.12"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* CPA monogram inside shield */}
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="11"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          fill="#F59E0B"
          letterSpacing="0.5"
        >
          CPA
        </text>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className="text-[13px] font-black tracking-[0.22em] text-slate-900 leading-none uppercase"
        >
          Country
        </span>
        <span
          className="text-[9px] font-semibold tracking-[0.18em] text-slate-500 leading-none uppercase mt-[3px]"
        >
          Public Adjusters
        </span>
      </div>
    </div>
  )
}
