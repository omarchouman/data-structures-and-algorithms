class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word):
        node = self._walk(word)
        return node is not None and node.is_end

    def starts_with(self, prefix):
        return self._walk(prefix) is not None

    def _walk(self, s):
        node = self.root
        for ch in s:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

    def autocomplete(self, prefix):
        node = self._walk(prefix)
        if node is None:
            return []
        results = []
        self._dfs(node, prefix, results)
        return results

    def _dfs(self, node, current, results):
        if node.is_end:
            results.append(current)
        for ch, child in node.children.items():
            self._dfs(child, current + ch, results)


def main():
    trie = Trie()
    for word in ["apple", "app", "application", "apply", "apt", "bat", "ball"]:
        trie.insert(word)

    print("Search 'app':", trie.search("app"))           # True
    print("Search 'ap':", trie.search("ap"))             # False
    print("StartsWith 'ap':", trie.starts_with("ap"))    # True
    print("Autocomplete 'app':", trie.autocomplete("app"))  # ['app', 'apple', 'application', 'apply']

if __name__ == "__main__":
    main()
