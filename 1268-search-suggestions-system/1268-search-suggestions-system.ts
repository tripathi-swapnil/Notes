class TrieNode {
  char: string;
  isWord = false;
  children = new Map<string, TrieNode>();

  constructor(char?: string) {
    this.char = char ?? '';
  }
}

class Trie {
  root = new TrieNode();

  insert(word: string) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode(char));
      }
      current = current.children.get(char)!;
    }
    current.isWord = true;
  }

  getMaxThreeWordsStartingWith(prefix: string) {
    let current = this.root;
    const words: string[] = [];
    
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix.charAt(i);
      if (!current.children.has(char)) {
        return words;
      }
      current = current.children.get(char)!;
    }

    return this.findWordsFrom(current, prefix);
  }

  findWordsFrom(node: TrieNode, prefix: string, previous: string[] = []): string[] {
    if (!node) return [];
    
    if (node.isWord) previous.push(prefix);
    
    for (let i = 0; i < 26 && previous.length < 3; i++) {
      const char = String.fromCharCode(97+i);
      const nextNode = node.children.get(char);
      if (nextNode) this.findWordsFrom(nextNode, prefix + char, previous);
    }
    
    return previous.slice(0, 3);
  }
}

function suggestedProducts(
  products: string[],
  searchWord: string
): string[][] {
  const trie = new Trie();
  for (const product of products) {
    trie.insert(product);
  }
  const result: string[][] = [];

  let prefix = '';
  for (let i = 0; i < searchWord.length; i++) {
    prefix += searchWord.charAt(i);
    result.push(trie.getMaxThreeWordsStartingWith(prefix));
  }
  return result;
}