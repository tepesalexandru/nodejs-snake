const { RIGHT_DIRECTION } = require("./constants");

class Player {
  _direction;
  _body;

  constructor() {
    this._direction = RIGHT_DIRECTION;
    this._body = [{ x: 10, y: 10 }];
  }

  erase(grid) {
    for (let i = 0; i < this._body.length; i++) {
      grid[this._body[i].x][this._body[i].y] = " ";
    }
  }

  draw(grid) {
    for (let i = 0; i < this._body.length; i++) {
      grid[this._body[i].x][this._body[i].y] = "X";
    }
  }

  move() {
    let body = [];
    body.push({
      x: this._body[0].x + this._direction.x,
      y: this._body[0].y + this._direction.y,
    });
    for (let i = 1; i < this._body.length; i++) {
      body.push({
        x: this._body[i - 1].x,
        y: this._body[i - 1].y,
      });
    }
    this._body = body;
  }
}

module.exports = Player;
