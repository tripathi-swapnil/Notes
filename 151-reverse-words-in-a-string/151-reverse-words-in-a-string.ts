function reverseWords(s: string): string {
  let result = '', current = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') current += s[i];

    if (current !== '' && (s[i] === ' ' || i === s.length - 1)) {    
      result = current + (result !== '' ? ' ' + result : '');
      current = '';
    };
  }

  return result;
};