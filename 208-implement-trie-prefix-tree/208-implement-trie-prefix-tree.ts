class TrieNode{
    value = false;
    public children = new Map<string, TrieNode>();
}
class Trie {
    root: TrieNode;
    
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let current = this.root;
        for(var i =0; i < word.length; i++) {
            if(!current.children.has(word[i])) {
                const node = new TrieNode();
                current.children.set(word[i], node)
                current = node;
            } else {
                current = current.children.get(word[i]);
            }
            
        }
        current.value = true;
    }

    search(word: string): boolean {
        let current = this.root
        for(var i =0; i < word.length; i++) {
            if(current.children.has(word[i])) {
                current = current.children.get(word[i]);
                continue;
            } else {
               return false; 
            }
            
        }
        return current.value === true;
    }

    startsWith(word: string): boolean {
        let current = this.root
        for(var i =0; i < word.length; i++) {
            if(current.children.has(word[i])) {
                current = current.children.get(word[i]);
                continue;
            }
            return false;
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */