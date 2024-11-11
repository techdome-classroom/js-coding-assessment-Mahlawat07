// const getTotalIsles = function (grid) {


//   // write your code here

// };

// module.exports = getTotalIsles;

const getTotalIsles = function (grid) {
  // Helper function to perform DFS
  const dfs = function (grid, i, j) {
    // Base case: if out of bounds or water, return
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
      return;
    }
    // Mark the current land as visited by changing 'L' to 'W'
    grid[i][j] = 'W';
    // Explore all 4 directions (up, down, left, right)
    dfs(grid, i - 1, j);  // up
    dfs(grid, i + 1, j);  // down
    dfs(grid, i, j - 1);  // left
    dfs(grid, i, j + 1);  // right
  };

  // Check if the grid is empty
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;

  // Iterate over each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // If we find an 'L', it's a new island
      if (grid[i][j] === 'L') {
        islandCount++;
        // Perform DFS to mark all connected land as visited
        dfs(grid, i, j);
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;


const getTotalIsles = require('./path/to/your/module');

const grid1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"]
];

console.log(getTotalIsles(grid1));  // Output: 1

const grid2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"]
];

console.log(getTotalIsles(grid2));  // Output: 3
