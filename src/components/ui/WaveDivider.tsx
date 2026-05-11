interface WaveDividerProps {
  fromColor: string
  toColor: string
  flip?: boolean
}

/**
 * SVG wave divider. Both variants draw fromColor from the TOP of the SVG.
 * flip=false → boundary DIPS DOWN at centre (convex downward)
 * flip=true  → boundary CURVES UP at centre (concave upward)
 * Both edges sit at the same y, so no flat horizontal lines at the sides.
 */
export default function WaveDivider({ fromColor, toColor, flip = false }: WaveDividerProps) {
  return (
    <div style={{ background: toColor, lineHeight: 0, display: 'block' }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 100 }}
        aria-hidden="true"
      >
        {flip ? (
          /* fromColor at top — boundary curves UP at centre, wider at sides */
          <path d="M0,0 L1440,0 L1440,70 Q720,-40 0,70 Z" fill={fromColor} />
        ) : (
          /* fromColor at top — boundary dips DOWN at centre */
          <path d="M0,0 L1440,0 L1440,30 Q720,100 0,30 Z" fill={fromColor} />
        )}
      </svg>
    </div>
  )
}
