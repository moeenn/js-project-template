import { test, expect } from "vitest"
import { Helpers } from "#src/Helpers.mjs"

test("Helpers.double", () => {
  const expected = 300
  const got = Helpers.double(150)

  expect(got).toBe(expected)
})
