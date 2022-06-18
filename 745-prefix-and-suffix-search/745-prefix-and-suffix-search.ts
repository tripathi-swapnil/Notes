class TrieNode{
    value = false;
    match = '';
    public children = new Map<string, TrieNode>();
}
class WordFilter1 {
    
    trie: TrieNode;
    constructor(words: string[]) {
        this.trie = new TrieNode();
        let current = this.trie;
        
        for(let word of words) {
            for(var i = 0; i < word.length; i++) {
                if(!current.children.has(word[i])) {
                    const node = new TrieNode();
                    current.children.set(word[i], node)
                    current = node;
                } else {
                    current = current.children.get(word[i]);
                }

            }
            current.value = true;
            current.match = word;
        }
    }

    f(prefix: string, suffix: string): number {
        let current = this.trie;
        for(let word of prefix) {
            if(current.children.has(word)) {
                current = current.children.get(word);
                continue;
            }
            return -1
        }
        this.getAllPossibleVals(current);
        console.log(this.trie, this.trie.children);
        return -1;

    }
   getAllPossibleVals(current) {
       // let new Set();
       
   }
}

class WordFilter{
    map = new Map();
    
    constructor(words: string[]) {
        this.map = new Map();
          for (let i = 0; i < words.length; i++) {
            let prefix = '';
            for (let j = 0; j <= words[i].length; j++) {
              let suffix = '';
              for (let k = 0; k <= words[i].length; k++) {
                suffix = words[i].slice(k);
                this.map.set(prefix + '#' + suffix, i);
              }
              prefix += words[i][j];
            }
          }
    }

    f(prefix: string, suffix: string): number {
        let target = prefix + '#' + suffix;
        return this.map.has(target) ? this.map.get(target) : -1;
    }
    
}


  



/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */