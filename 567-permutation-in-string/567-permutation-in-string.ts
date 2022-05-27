function checkInclusion(s1: string, s2: string): boolean {
  const len = s1.length;
  const m1 = createFreqMaps(s1);
  for (let i = 0; i < s2.length - len + 1; i++) {
    if (compare(m1, createFreqMaps(s2.substr(i, len)))) return true;
  }
  return false;
}
function compare(m1: number[], m2: number[]) {
  for (let i = 0; i < 26; i++) {
    if (m1[i] !== m2[i]) return false; 
  }
  return true;
}
const base = 'a'.charCodeAt(0);
function createFreqMaps(s: string)  {
  const m = Array.from<number>({ length: 26 }).fill(0);
  for (let i = 0; i < s.length; i++) {
    m[s.charCodeAt(i) - base]++;
  }
  return m;
}