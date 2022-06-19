function detectCapitalUse(word: string): boolean {
  for (let i = 1; i < word.length; i++) {
    const c = word.charCodeAt(i);
    const cp = word.charCodeAt(i - 1);

    if (i === 1) {
      if (cp >= 97 && c < 97) return false;
      continue;
    }

    if (cp < 97 && c >= 97) return false;
    if (cp >= 97 && c < 97) return false;
  }
  return true;
}