import java.util.*;

public class implementation {

    static class TrieNode {
        Map<Character, TrieNode> children = new HashMap<>();
        boolean isEnd = false;
    }

    private final TrieNode root = new TrieNode();

    public void insert(String word) {
        TrieNode node = root;
        for (char ch : word.toCharArray()) {
            node.children.putIfAbsent(ch, new TrieNode());
            node = node.children.get(ch);
        }
        node.isEnd = true;
    }

    public boolean search(String word) {
        TrieNode node = walk(word);
        return node != null && node.isEnd;
    }

    public boolean startsWith(String prefix) { return walk(prefix) != null; }

    private TrieNode walk(String s) {
        TrieNode node = root;
        for (char ch : s.toCharArray()) {
            if (!node.children.containsKey(ch)) return null;
            node = node.children.get(ch);
        }
        return node;
    }

    public List<String> autocomplete(String prefix) {
        List<String> results = new ArrayList<>();
        TrieNode node = walk(prefix);
        if (node != null) dfs(node, new StringBuilder(prefix), results);
        return results;
    }

    private void dfs(TrieNode node, StringBuilder current, List<String> results) {
        if (node.isEnd) results.add(current.toString());
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            current.append(entry.getKey());
            dfs(entry.getValue(), current, results);
            current.deleteCharAt(current.length() - 1);
        }
    }

    public static void main(String[] args) {
        implementation trie = new implementation();
        for (String w : new String[]{"apple", "app", "application", "apply", "apt", "bat", "ball"})
            trie.insert(w);

        System.out.println("Search 'app': " + trie.search("app"));           // true
        System.out.println("Search 'ap': " + trie.search("ap"));             // false
        System.out.println("StartsWith 'ap': " + trie.startsWith("ap"));     // true
        System.out.println("Autocomplete 'app': " + trie.autocomplete("app"));
    }
}
