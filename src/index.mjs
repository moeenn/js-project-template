import { Helpers } from "#src/Helpers.mjs"

/** @returns {Promise<void>} */
async function main() {
  console.log(Helpers.double(30))
}

main().catch(console.error)
