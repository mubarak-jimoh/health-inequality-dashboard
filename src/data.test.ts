import { describe, expect, it } from "vitest"

import { datasets, education, gap, lifeExpectancy, longTermIllness, sources, toCsv } from "./data"

describe("gap", () => {
  it("is the difference between the highest and lowest value", () => {
    expect(gap(lifeExpectancy)).toBe(10.1)
    expect(gap(education)).toBe(33)
    expect(gap(longTermIllness)).toBe(24)
  })

  it("does not depend on the order of the bars", () => {
    expect(gap([...lifeExpectancy].reverse())).toBe(gap(lifeExpectancy))
  })
})

describe("data", () => {
  it("keeps percentages between 0 and 100", () => {
    for (const bar of [...education, ...longTermIllness]) {
      expect(bar.value).toBeGreaterThanOrEqual(0)
      expect(bar.value).toBeLessThanOrEqual(100)
    }
  })

  it("highlights exactly one bar per chart", () => {
    for (const chart of [lifeExpectancy, education, longTermIllness]) {
      expect(chart.filter((bar) => bar.highlight)).toHaveLength(1)
    }
  })

  it("gives every source a secure link", () => {
    for (const source of sources) {
      expect(source.url.startsWith("https://")).toBe(true)
    }
  })
})

describe("toCsv", () => {
  it("writes a header and one row per bar", () => {
    const lines = toCsv(datasets).trim().split("\n")
    expect(lines[0]).toBe("measure,group,value,unit")
    expect(lines).toHaveLength(1 + 6)
    expect(lines[1]).toBe("Life expectancy for men (Medway),Cuxton,83.5,years")
  })

  it("quotes values that contain a comma", () => {
    const csv = toCsv(datasets)
    expect(csv).toContain('"Gypsy, Roma and Traveller",42,%')
  })

  it("escapes quotes inside a value", () => {
    const csv = toCsv([{ measure: 'The "gap"', unit: "%", bars: [{ label: "A", value: 1, highlight: false }] }])
    expect(csv).toContain('"The ""gap""",A,1,%')
  })

  it("ends with a newline so the last row is complete", () => {
    expect(toCsv(datasets).endsWith("\n")).toBe(true)
  })
})

