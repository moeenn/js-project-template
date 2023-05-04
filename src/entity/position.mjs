export class Position {
  /** @property {number} */
  x

  /** @property {number} */
  y

  /**
   * 
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * 
   * @returns {string}
   */
  serialize() {
    return `(${this.x}, ${this.y})`
  }
}
