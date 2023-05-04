import { test, expect } from "vitest"
import { main } from "./index.mjs"

test("entity position", async () => {
  const expected = "(30, 10)"
  const got = await main()

  expect(got).toBe(expected)
})
