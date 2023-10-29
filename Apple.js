const { GRID_HEIGHT, GRID_WIDTH } = require("./constants.js");

class Apple {
  _x;
  _y;

  constructor() {
    this._x = 12;
    this._y = 20;
  }

  draw(grid) {
    grid[this._x][this._y] = "A";
  }

  respawn() {
    this._x = 1 + Math.floor(Math.random() * (GRID_HEIGHT - 1));
    this._y = 1 + Math.floor(Math.random() * (GRID_WIDTH - 1));
  }
}

module.exports = Apple;
