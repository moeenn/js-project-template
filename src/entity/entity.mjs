/** @typedef {import("./position.mjs").Position} Position */
import { Direction } from "#src/direction.mjs"

export class Entity {
  /** @property {string} */
  name

  /** @property {Position} */
  position

  /** @property {number} */
  step = 10

  /**
   * 
   * @param {string} name 
   * @param {Position} position 
   */
  constructor(name, position) {
    this.name = name
    this.position = position
  }

  /**
   * 
   * @param {string} direction 
   * @returns {Position}
   */
  move(direction) {
    switch (direction) {
      case Direction.Up:
        this.position.y += this.step
        break

      case Direction.Down:
        this.position.y -= this.step
        break

      case Direction.Left:
        this.position.x -= this.step
        break

      case Direction.Right:
        this.position.x += this.step
        break
    }

    return this.position
  }
}
