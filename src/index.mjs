/**
 * @param {string} name
 * @param {number} age
 * @returns {void}
*/
function hello(name, age) {
  console.log("Hello %s, %d", name, age)
}

/**
 * @returns {Promise<void>}
*/
async function main() {

  /** @type {string} */
  let name = "sample"
  hello(name, 30)
}

main().catch(console.error)