function minPartitions(n: string): number {
  let minRequired = 0;
  for (let i = 0; i < n.length; i++) minRequired = Math.max(minRequired, Number(n[i]));
  return minRequired;
};