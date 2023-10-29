"use strict";

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

const gameLoop = () => {
  printGrid(grid);
  setTimeout(gameLoop, 35);
};

let grid = generateEmptyGrid();
gameLoop();
