function canConstruct(ransomNote: string, magazine: string): boolean {
  return compare(
    createFreqMaps(ransomNote),
    createFreqMaps(magazine),
  );
};

function compare(m1: number[], m2: number[]) {
  for (let i = 0; i < 26; i++) {
    if (m1[i] > m2[i]) return false; 
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