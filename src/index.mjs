import { Entity } from "#src/entity/entity.mjs"
import { Position } from "./entity/position.mjs"
import { Direction } from "#src/direction.mjs"

/** @returns {Promise<string>} */
export async function main() {
  const e = new Entity("Entity one", new Position(10, 20))
  {
    e.move(Direction.Right)
    e.move(Direction.Right)
    e.move(Direction.Down)
  }

  const position = e.position.serialize()
  console.log(position)
  return position
}

main().catch(console.error)
