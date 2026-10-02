// Every figure on the dashboard lives here, next to where it came from.

export type Source = {
  id: string
  label: string
  url: string
}

export const sources: Source[] = [
  {
    id: "marmot",
    label:
      "Institute of Health Equity, Medway Marmot Place Partnership report (life expectancy for men in Cuxton and Chatham)",
    url: "https://www.medway.gov.uk/download/downloads/id/9609/institute_of_health_equity_report_for_medways_marmot_place_partnership.pdf"
  },
  {
    id: "dfe",
    label:
      "Department for Education, Key stage 2 attainment statistics (reading, writing and maths combined)",
    url: "https://explore-education-statistics.service.gov.uk/find-statistics/key-stage-2-attainment"
  },
  {
    id: "wec",
    label:
      "House of Commons Women and Equalities Committee, Tackling inequalities faced by Gypsy, Roma and Traveller communities (long-term conditions)",
    url: "https://publications.parliament.uk/pa/cm201719/cmselect/cmwomeq/360/report-files/36005.htm"
  },
  {
    id: "imd",
    label:
      "Ministry of Housing, Communities and Local Government, English indices of deprivation",
    url: "https://www.gov.uk/government/collections/english-indices-of-deprivation"
  }
]

export type Bar = {
  label: string
  value: number
  highlight: boolean
}

// Life expectancy at birth for men, in years
export const lifeExpectancy: Bar[] = [
  { label: "Cuxton", value: 83.5, highlight: false },
  { label: "Chatham", value: 73.4, highlight: true }
]

// % of pupils meeting the expected standard at Key Stage 2
export const education: Bar[] = [
  { label: "SEN support pupils (Medway)", value: 26, highlight: true },
  { label: "All pupils (England)", value: 59, highlight: false }
]

// % of people with a long-term condition
export const longTermIllness: Bar[] = [
  { label: "Gypsy, Roma and Traveller", value: 42, highlight: true },
  { label: "General population", value: 18, highlight: false }
]

export const priorityAreas = [
  {
    name: "Margate Central",
    reason:
      "One of the most deprived neighbourhoods in Thanet with high unemployment and multiple deprivation indicators."
  },
  {
    name: "Chatham",
    reason:
      "Large life expectancy gap and significant inequality linked to deprivation, education and healthcare access."
  }
]

/** The gap between the highest and lowest value, rounded to one decimal place. */
export function gap(bars: Bar[]): number {
  const values = bars.map((bar) => bar.value)
  return Math.round((Math.max(...values) - Math.min(...values)) * 10) / 10
}
