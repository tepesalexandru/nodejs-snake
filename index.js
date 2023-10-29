"use strict";
const Player = require("./Player");
const Grid = require("./Grid");
const { onKeyPress } = require("./helpers");
const { GRID_WIDTH, GRID_HEIGHT } = require("./constants");

let grid = Grid.generateEmpty(GRID_WIDTH, GRID_HEIGHT);
const player = new Player();

const gameLoop = () => {
  player.erase(grid);
  player.move();
  player.draw(grid);
  Grid.print(grid);
  setTimeout(gameLoop, 50);
};

gameLoop();

onKeyPress((key) => {
  player.handleKeyPress(key);
});
