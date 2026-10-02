import { describe, expect, it } from "vitest"

import { education, gap, lifeExpectancy, longTermIllness, sources } from "./data"

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
