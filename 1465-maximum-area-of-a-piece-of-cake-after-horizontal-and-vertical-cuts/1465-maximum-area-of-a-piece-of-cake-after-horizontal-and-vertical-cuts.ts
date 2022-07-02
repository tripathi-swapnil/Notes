function maxArea(h: number, w: number, hc: number[], vc: number[]): number {
  hc.sort((a, b) => a - b);
  vc.sort((a, b) => a - b);

  let maxH = Math.max(hc[0], h - hc[hc.length - 1]),
    maxW = Math.max(vc[0], w - vc[vc.length - 1]);

  const cL = Math.min(hc.length, vc.length);

  for (let i = 1; i < cL; i++) {
    maxH = Math.max(maxH, hc[i] - hc[i - 1]);
    maxW = Math.max(maxW, vc[i] - vc[i - 1]);
  }

  for (let i = cL; i < hc.length; i++) {
    maxH = Math.max(maxH, hc[i] - hc[i - 1]);
  }

  for (let i = cL; i < vc.length; i++) {
    maxW = Math.max(maxW, vc[i] - vc[i - 1]);
  }

  return Number(BigInt(maxH) * BigInt(maxW) % 1000000007n);
}