// ─── LOCAL SEO PAGE DATA ─────────────────────────────────────────────────────

export interface LocalPageData {
  city: string
  state: string
  region: 'nashville' | 'south-florida'
  parentSlug: string
  slug: string
  intro: string
  localContext: string
  nearbyAreas: string[]
}

export const NASHVILLE_CITIES: Record<string, LocalPageData> = {
  brentwood: {
    city: 'Brentwood',
    state: 'Tennessee',
    region: 'nashville',
    parentSlug: 'nashville',
    slug: 'brentwood',
    intro: 'Brentwood homeowners and commercial property owners face significant storm and hail exposure each spring season.',
    localContext: 'Brentwood sits in Williamson County, one of the most active hail corridors in Middle Tennessee. High-value residential properties in Brentwood require expert documentation to ensure full replacement-cost recovery.',
    nearbyAreas: ['Nashville', 'Franklin', 'Nolensville', 'Antioch'],
  },
  franklin: {
    city: 'Franklin',
    state: 'Tennessee',
    region: 'nashville',
    parentSlug: 'nashville',
    slug: 'franklin',
    intro: 'Franklin, TN property owners have navigated multiple major storm events affecting this rapidly-growing Williamson County city.',
    localContext: 'Franklin\'s mix of historic downtown properties and new construction subdivisions presents unique claims complexity. Older structures have different insurance requirements than newer builds, and we know how to document both.',
    nearbyAreas: ['Brentwood', 'Spring Hill', 'Nolensville', 'Fairview'],
  },
  murfreesboro: {
    city: 'Murfreesboro',
    state: 'Tennessee',
    region: 'nashville',
    parentSlug: 'nashville',
    slug: 'murfreesboro',
    intro: 'Murfreesboro is one of the fastest-growing cities in Tennessee and sits in a high-storm-activity zone in Rutherford County.',
    localContext: 'Rutherford County experiences regular severe thunderstorm and hail activity. Country Public Adjusters serve Murfreesboro homeowners and commercial property owners handling storm, hail, wind, and water damage claims.',
    nearbyAreas: ['Smyrna', 'La Vergne', 'Nashville', 'Lebanon'],
  },
  hendersonville: {
    city: 'Hendersonville',
    state: 'Tennessee',
    region: 'nashville',
    parentSlug: 'nashville',
    slug: 'hendersonville',
    intro: 'Hendersonville in Sumner County experiences frequent spring hail and wind events that affect residential and commercial properties.',
    localContext: 'Situated on Old Hickory Lake, Hendersonville properties face storm damage from systems that track northeast from Nashville. We serve Hendersonville and all of Sumner County.',
    nearbyAreas: ['Gallatin', 'Portland', 'White House', 'Nashville'],
  },
}

export const FLORIDA_CITIES: Record<string, LocalPageData> = {
  'miami-dade': {
    city: 'Miami-Dade County',
    state: 'Florida',
    region: 'south-florida',
    parentSlug: 'south-florida',
    slug: 'miami-dade',
    intro: 'Miami-Dade County is at the epicenter of Florida\'s hurricane exposure. Country Public Adjusters handle residential and commercial hurricane claims throughout Miami-Dade.',
    localContext: 'Miami-Dade properties face hurricane winds, storm surge, and flooding from multiple vectors each hurricane season. We have deep experience with Miami-Dade insurer practices and the specific damage profiles common to this market.',
    nearbyAreas: ['Broward County', 'Florida Keys', 'Miami Beach', 'Coral Gables'],
  },
  broward: {
    city: 'Broward County',
    state: 'Florida',
    region: 'south-florida',
    parentSlug: 'south-florida',
    slug: 'broward',
    intro: 'Broward County sits between Miami-Dade and Palm Beach — directly in the path of hurricane systems affecting South Florida.',
    localContext: 'Fort Lauderdale and the broader Broward area combine dense residential neighborhoods with high commercial property values. Post-hurricane claims in Broward require careful documentation of both residential and commercial damage.',
    nearbyAreas: ['Miami-Dade County', 'Palm Beach County', 'Fort Lauderdale', 'Hollywood'],
  },
  'palm-beach': {
    city: 'Palm Beach County',
    state: 'Florida',
    region: 'south-florida',
    parentSlug: 'south-florida',
    slug: 'palm-beach',
    intro: 'Palm Beach County has seen significant hurricane-related property damage from storms tracking up Florida\'s east coast.',
    localContext: 'High-value residential properties in Palm Beach, Boca Raton, and West Palm Beach require sophisticated claims handling. We serve all of Palm Beach County with the same thoroughness and expertise.',
    nearbyAreas: ['Broward County', 'Martin County', 'West Palm Beach', 'Boca Raton'],
  },
  'fort-lauderdale': {
    city: 'Fort Lauderdale',
    state: 'Florida',
    region: 'south-florida',
    parentSlug: 'south-florida',
    slug: 'fort-lauderdale',
    intro: 'Fort Lauderdale homeowners and commercial property owners face hurricane and tropical storm exposure from the Atlantic and Gulf systems.',
    localContext: 'Fort Lauderdale\'s dense urban environment, waterfront properties, and commercial corridors create complex claims profiles after storm events.',
    nearbyAreas: ['Hollywood', 'Pompano Beach', 'Deerfield Beach', 'Miami'],
  },
}
