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

const gameLoop = () => {
  printGrid(grid);
  updatePlayerGridPosition(grid, playerBlocks, playerBlocks);
  setTimeout(gameLoop, 35);
};

const playerBlocks = [
  { x: 10, y: 10 },
  { x: 11, y: 10 },
  { x: 12, y: 10 },
  { x: 12, y: 11 },
  { x: 12, y: 12 },
];
const playerMovements = [RIGHT];

let grid = generateEmptyGrid();
gameLoop();
