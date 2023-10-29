"use strict";

// Global Variables
const gridHeight = 20;
const gridWidth = 60;

const UP = { x: -1, y: 0 };
const DOWN = { x: 1, y: 0 };
const LEFT = { x: 0, y: -1 };
const RIGHT = { x: 0, y: 1 };

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

const getNextPlayerPosition = (currentPlayerPosition, direction) => {
  const newPlayerPosition = [];
  newPlayerPosition.push({
    x: currentPlayerPosition[0].x + direction.x,
    y: currentPlayerPosition[0].y + direction.y,
  });
  for (let i = 1; i < currentPlayerPosition.length; i++) {
    newPlayerPosition.push({
      x: currentPlayerPosition[i - 1].x,
      y: currentPlayerPosition[i - 1].y,
    });
  }
  return newPlayerPosition;
};

const gameLoop = () => {
  printGrid(grid);
  let newPlayerBlocks = getNextPlayerPosition(playerBlocks, currentDirection);
  updatePlayerGridPosition(grid, playerBlocks, newPlayerBlocks);
  playerBlocks = newPlayerBlocks;
  setTimeout(gameLoop, 50);
};

let playerBlocks = [
  { x: 10, y: 10 },
  { x: 11, y: 10 },
  { x: 12, y: 10 },
  { x: 12, y: 11 },
  { x: 12, y: 12 },
  { x: 12, y: 13 },
];

let currentDirection = RIGHT;

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

  const UP_ARROW = "\u001B\u005B\u0041";
  const DOWN_ARROW = "\u001B\u005B\u0042";
  const RIGHT_ARROW = "\u001B\u005B\u0043";
  const LEFT_ARROW = "\u001B\u005B\u0044";

  switch (key) {
    case UP_ARROW:
      currentDirection = UP;
      break;
    case DOWN_ARROW:
      currentDirection = DOWN;
      break;
    case LEFT_ARROW:
      currentDirection = LEFT;
      break;
    case RIGHT_ARROW:
      currentDirection = RIGHT;
      break;
    default:
      break;
  }
});
