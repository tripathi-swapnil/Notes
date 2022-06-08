function removePalindromeSub(s: string): number {
  return isPalindrome(s) ? 1 : 2 ;
};

function isPalindrome(s: string): boolean {
  const mid = (s.length - 1) / 2;
  let [i, j] = [Math.floor(mid), Math.ceil(mid)];

  while (i > -1 && j < s.length) {
    if (s.charAt(i--) !== s.charAt(j++)) return false;
  }
  return true;
}