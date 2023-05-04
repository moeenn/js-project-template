import test from "node:test"
import assert from "node:assert/strict"
import { main } from "./index.mjs"

test("entity position", async () => {
  const expected = "(30, 10)"
  const got = await main()

  assert.equal(got, expected)
})
