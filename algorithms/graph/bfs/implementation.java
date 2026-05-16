import java.util.*;

public class implementation {

    static List<String> bfs(Map<String, List<String>> graph, String start) {
        Set<String> visited = new LinkedHashSet<>();
        Queue<String> queue = new LinkedList<>();
        queue.add(start);
        visited.add(start);

        while (!queue.isEmpty()) {
            String node = queue.poll();
            for (String neighbour : graph.getOrDefault(node, Collections.emptyList())) {
                if (!visited.contains(neighbour)) {
                    visited.add(neighbour);
                    queue.add(neighbour);
                }
            }
        }
        return new ArrayList<>(visited);
    }

    static List<String> shortestPath(Map<String, List<String>> graph, String start, String end) {
        Map<String, String> visited = new LinkedHashMap<>();
        visited.put(start, null);
        Queue<String> queue = new LinkedList<>();
        queue.add(start);

        while (!queue.isEmpty()) {
            String node = queue.poll();
            if (node.equals(end)) {
                List<String> path = new ArrayList<>();
                String cur = end;
                while (cur != null) { path.add(cur); cur = visited.get(cur); }
                Collections.reverse(path);
                return path;
            }
            for (String neighbour : graph.getOrDefault(node, Collections.emptyList())) {
                if (!visited.containsKey(neighbour)) {
                    visited.put(neighbour, node);
                    queue.add(neighbour);
                }
            }
        }
        return Collections.emptyList();
    }

    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D", "E"));
        graph.put("C", Arrays.asList("A", "F"));
        graph.put("D", Arrays.asList("B"));
        graph.put("E", Arrays.asList("B", "F"));
        graph.put("F", Arrays.asList("C", "E"));

        System.out.println("BFS from A: " + bfs(graph, "A"));
        System.out.println("Shortest A→F: " + shortestPath(graph, "A", "F"));  // [A, C, F]
    }
}
