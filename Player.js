const { RIGHT } = require("./constants");

class Player {
  _direction;
  _body;

  constructor() {
    this._direction = RIGHT;
    this._body = [{ x: 10, y: 10 }];
  }
}

module.exports = Player;
