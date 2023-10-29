"use strict";
const Player = require("./Player");
const Grid = require("./Grid");

// Global Variables
const gridHeight = 20;
const gridWidth = 60;

const gameLoop = () => {
  player.erase(grid);
  player.move();
  player.draw(grid);
  Grid.print(grid);
  setTimeout(gameLoop, 50);
};

const player = new Player();
let grid = Grid.generateEmpty(gridWidth, gridHeight);

gameLoop();

var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding("utf8");

// on any data into stdin
stdin.on("data", function (key) {
  // ctrl-c ( end of text )
  if (key === "\u0003") {
    process.exit();
  }

  player.handleKeyPress(key);
});
