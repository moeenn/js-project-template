import { test, expect } from "vitest"
import { Helpers } from "#src/Helpers.mjs"

test("Helpers.double", () => {
  /** @type {number} */
  const expected = 300

  /** @type {number} */
  const got = Helpers.double(150)

  expect(got).toBe(expected)
})
