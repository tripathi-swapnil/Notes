const paths = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

function genMatrix(rows: number, columns: number): boolean[][] {
  return Array.from({ length: rows }).map<boolean[]>(() =>
    new Array(columns).fill(false)
  );
}

function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length, columns = heights[0].length;
  
  const pacific = genMatrix(rows, columns), atlantic = genMatrix(rows, columns);
  
  function isValid(row: number, col: number): boolean {
    return row >= 0 && row < rows && col >= 0 && col < columns;
  }

  function bfs(queue: [number, number][], reach: boolean[][]) {
    while (queue.length) {
      const [i, j] = queue.shift()!;
      
      reach[i][j] = true;

      for (const [ix, iy] of paths) {
        const dx = ix + i;
        const dy = iy + j;

        if (isValid(dx, dy) && heights[i][j] <= heights[dx][dy] && !reach[dx][dy]) queue.push([dx, dy]);
      }
    }
  }

  const leftQueue: [number, number][] = [],
    rightQueue: [number, number][] = [],
    peaks: number[][] = [];

  for (let col = 0; col < columns; col++) {
    leftQueue.push([0, col]);
    rightQueue.push([rows - 1, col]);
  }

  for (let row = 0; row < rows - 1; row++) {
    leftQueue.push([row + 1, 0]);
    rightQueue.push([row, columns - 1]);
  }

  bfs(leftQueue, pacific);
  bfs(rightQueue, atlantic);
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (pacific[row][col] && atlantic[row][col]) peaks.push([row, col]);
    }
  }

  return peaks;
}