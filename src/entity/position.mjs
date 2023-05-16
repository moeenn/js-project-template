export class Position {
  /** @property {number} */
  x

  /** @property {number} */
  y

  /**
   * @constructor
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * @public
   * @returns {string}
   */
  serialize() {
    return `(${this.x}, ${this.y})`
  }
}
