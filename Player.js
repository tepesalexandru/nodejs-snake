const {
  UP_DIRECTION,
  DOWN_DIRECTION,
  LEFT_DIRECTION,
  RIGHT_DIRECTION,
  UP_ARROW,
  DOWN_ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
} = require("./constants");

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

  checkCollisionWithApple(apple) {
    return this._body[0].x === apple._x && this._body[0].y === apple._y;
  }

  grow() {
    this._body.push({
      x: this._body[this._body.length - 1].x,
      y: this._body[this._body.length - 1].y,
    });
  }

  handleKeyPress(key) {
    switch (key) {
      case UP_ARROW:
        this._direction = UP_DIRECTION;
        break;
      case DOWN_ARROW:
        this._direction = DOWN_DIRECTION;
        break;
      case LEFT_ARROW:
        this._direction = LEFT_DIRECTION;
        break;
      case RIGHT_ARROW:
        this._direction = RIGHT_DIRECTION;
        break;
      default:
        break;
    }
  }
}

module.exports = Player;
