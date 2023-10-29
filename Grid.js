class Grid {
  static generateEmpty(width, height) {
    const row = Array(width - 2)
      .fill(" ")
      .join("");
    const topBottomRow = Array(width).fill("#").join("");
    const middleRows = Array(height - 2).fill(`#${row}#`);
    const grid = [topBottomRow, ...middleRows, topBottomRow];
    return grid.map((row) => row.split(""));
  }

  static print(grid) {
    console.clear();
    for (let i = 0; i < grid.length; i++) {
      console.log(grid[i].join(""));
    }
  }
}

module.exports = Grid;
