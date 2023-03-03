import { Helpers } from "#src/Helpers.mjs"

/** @type {function (): Promise<void>}*/
async function main() {
  console.log(Helpers.double(30))
}

main().catch(console.error)
