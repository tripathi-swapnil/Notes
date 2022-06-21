function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const pqueue = new MinPriorityQueue({ priority: (x) => x });
  for (let i = 0; i < heights.length - 1; i++) {
    let diff = heights[i + 1] - heights[i];
    if (diff > 0) {
      if (ladders > 0) {
        pqueue.enqueue(diff);
        ladders--;
      } else if (pqueue.front() && diff > pqueue.front().element) {
        pqueue.enqueue(diff);
        bricks -= pqueue.dequeue().element;
      } else bricks -= diff;

      if (bricks < 0) return i;
    }
  }
  return heights.length - 1;
};