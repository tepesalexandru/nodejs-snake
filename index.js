"use strict";
const Player = require("./Player");
const Grid = require("./Grid");
const Apple = require("./Apple");
const { onKeyPress } = require("./helpers");
const { GRID_WIDTH, GRID_HEIGHT } = require("./constants");

let grid = Grid.generateEmpty(GRID_WIDTH, GRID_HEIGHT);
const player = new Player();
const apple = new Apple();

const gameLoop = () => {
  player.erase(grid);
  player.move();
  player.draw(grid);
  apple.draw(grid);

  // check if apple is eaten
  if (player.checkCollisionWithApple(apple)) {
    player.grow();
    apple.respawn();
  }

  Grid.print(grid);
  setTimeout(gameLoop, 50);
};

gameLoop();

onKeyPress((key) => {
  player.handleKeyPress(key);
});
