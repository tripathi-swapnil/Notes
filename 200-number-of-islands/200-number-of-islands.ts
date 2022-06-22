const paths = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

function numIslands(grid: string[][]): number {
  const visited = Array.from<number>({ length: grid.length }).map(() =>
    new Array(grid[0].length).fill(0)
  );

  function dfs(i: number, j: number) {
    visited[i][j] = 1;

    for (const [ix, iy] of paths) {
      const dx = ix + i;
      const dy = iy + j;

      if (dx > -1 && dx < grid.length && dy > -1 && dy < grid[0].length && !visited[dx][dy] && grid[dx][dy] === '1') dfs(dx, dy);
    }
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
}