function reconstructQueue(people: number[][]): number[][] {
  const queue: [number, number][] = [];

  const sorted = people.sort(([h1, k1], [h2, k2]) =>
    h1 === h2 ? k1 - k2 : h2 - h1
  );

  for (const [h, k] of sorted) {
    queue.splice(k, 0, [h, k]);
  }

  return queue;
}