class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() { this.root = new TrieNode(); }

    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children[ch]) node.children[ch] = new TrieNode();
            node = node.children[ch];
        }
        node.isEnd = true;
    }

    search(word) {
        const node = this._walk(word);
        return node !== null && node.isEnd;
    }

    startsWith(prefix) { return this._walk(prefix) !== null; }

    _walk(s) {
        let node = this.root;
        for (const ch of s) {
            if (!node.children[ch]) return null;
            node = node.children[ch];
        }
        return node;
    }

    autocomplete(prefix) {
        const node = this._walk(prefix);
        if (!node) return [];
        const results = [];
        this._dfs(node, prefix, results);
        return results;
    }

    _dfs(node, current, results) {
        if (node.isEnd) results.push(current);
        for (const [ch, child] of Object.entries(node.children)) {
            this._dfs(child, current + ch, results);
        }
    }
}

const trie = new Trie();
["apple", "app", "application", "apply", "apt", "bat", "ball"].forEach(w => trie.insert(w));

console.log("Search 'app':", trie.search("app"));           // true
console.log("Search 'ap':", trie.search("ap"));             // false
console.log("StartsWith 'ap':", trie.startsWith("ap"));     // true
console.log("Autocomplete 'app':", trie.autocomplete("app")); // ['app', 'apple', 'application', 'apply']
