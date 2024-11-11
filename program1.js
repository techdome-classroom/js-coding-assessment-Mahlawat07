const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(row, col) {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
      return;
    }

    grid[row][col] = 'W';

    
    dfs(row + 1, col); 
    dfs(row - 1, col); 
    dfs(row, col + 1); 
    dfs(row, col - 1); 
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 'L') { 
        count++;
        dfs(row, col); 
      }
    }
  }

  return count;
  

};
// const payload = [
//   ["L", "L", "L", "L", "W"],
//   ["L", "L", "W", "L", "W"],
//   ["L", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
// ];
// console.log(getTotalIsles(payload)); // 1
module.exports = getTotalIsles;