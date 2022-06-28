function reverseWords(s: string): string {
  let result = '', current = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') current += s[i];

    if (current.length && (s[i] === ' ' || i === s.length - 1)) {    
      result = current + (result.length ? ' ' + result : '');
      current = '';
    };
  }

  return result;
};