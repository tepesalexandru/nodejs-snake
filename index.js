"use strict";
const Player = require("./Player");
const Grid = require("./Grid");
const { onKeyPress } = require("./helpers");

// Global Variables
const GRID_HEIGHT = 20;
const GRID_WIDTH = 60;

const gameLoop = () => {
  player.erase(grid);
  player.move();
  player.draw(grid);
  Grid.print(grid);
  setTimeout(gameLoop, 50);
};

const player = new Player();
let grid = Grid.generateEmpty(GRID_WIDTH, GRID_HEIGHT);

gameLoop();

onKeyPress((key) => {
  player.handleKeyPress(key);
});
