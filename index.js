"use strict";
const Player = require("./Player");

// Global Variables
const gridHeight = 20;
const gridWidth = 60;

// Function to generate a matrix of size gridHeight x gridWidth, holding the grid
const generateEmptyGrid = () => {
  const row = Array(gridWidth - 2)
    .fill(" ")
    .join("");
  const topBottomRow = Array(gridWidth).fill("#").join("");
  const middleRows = Array(gridHeight - 2).fill(`#${row}#`);
  const grid = [topBottomRow, ...middleRows, topBottomRow];
  return grid.map((row) => row.split(""));
};

const printGrid = (grid) => {
  console.clear();
  for (let i = 0; i < gridHeight; i++) {
    console.log(grid[i].join(""));
  }
};

const updatePlayerGridPosition = (
  grid,
  oldPlayerPosition,
  newPlayerPosition
) => {
  // Remove the player from the grid
  for (let i = 0; i < oldPlayerPosition.length; i++) {
    grid[oldPlayerPosition[i].x][oldPlayerPosition[i].y] = " ";
  }
  // Remove the player from the grid
  for (let i = 0; i < newPlayerPosition.length; i++) {
    grid[newPlayerPosition[i].x][newPlayerPosition[i].y] = "X";
  }
};

const gameLoop = () => {
  player.erase(grid);
  player.move();
  player.draw(grid);
  printGrid(grid);
  // let newPlayerBlocks = getNextPlayerPosition(player._body, player._direction);
  // updatePlayerGridPosition(grid, player._body, newPlayerBlocks);
  // player._body = newPlayerBlocks;
  setTimeout(gameLoop, 50);
};

const player = new Player();

let grid = generateEmptyGrid();
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

  // switch (key) {
  //   case UP_ARROW:
  //     currentDirection = UP;
  //     break;
  //   case DOWN_ARROW:
  //     currentDirection = DOWN;
  //     break;
  //   case LEFT_ARROW:
  //     currentDirection = LEFT;
  //     break;
  //   case RIGHT_ARROW:
  //     currentDirection = RIGHT;
  //     break;
  //   default:
  //     break;
  // }
});
