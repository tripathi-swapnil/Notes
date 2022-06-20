class TrieNode {
  word = '';
  children = new Map<string, TrieNode>();
}

class Trie {
  root = new TrieNode();
  encodeLength = 0;

  constructor(words: string[]) {
     words
      .sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length)
      .forEach(word => this.insert(word));
  }

  insert(word: string): void {
    const wordSet = new Set<string>();

    let current = this.root;
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word.charAt(i);
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
      if (current.word) {
        this.encodeLength -= current.word.length + 1;
        current.word = '';
      }
    }
    current.word = word;
    this.encodeLength += current.word.length + 1;
  }
}

function minimumLengthEncoding(words: string[]): number {
  return (new Trie(words)).encodeLength;
};
 