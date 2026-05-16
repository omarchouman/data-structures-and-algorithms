import java.util.*;

public class implementation {

    static List<String> dfsRecursive(Map<String, List<String>> graph, String node,
                                      Set<String> visited, List<String> order) {
        visited.add(node);
        order.add(node);
        for (String neighbour : graph.getOrDefault(node, Collections.emptyList())) {
            if (!visited.contains(neighbour)) dfsRecursive(graph, neighbour, visited, order);
        }
        return order;
    }

    static List<String> dfsIterative(Map<String, List<String>> graph, String start) {
        Set<String> visited = new HashSet<>();
        Deque<String> stack = new ArrayDeque<>();
        List<String> order = new ArrayList<>();
        stack.push(start);

        while (!stack.isEmpty()) {
            String node = stack.pop();
            if (!visited.contains(node)) {
                visited.add(node);
                order.add(node);
                List<String> neighbours = new ArrayList<>(graph.getOrDefault(node, Collections.emptyList()));
                Collections.reverse(neighbours);
                for (String neighbour : neighbours) {
                    if (!visited.contains(neighbour)) stack.push(neighbour);
                }
            }
        }
        return order;
    }

    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D", "E"));
        graph.put("C", Arrays.asList("A", "F"));
        graph.put("D", Arrays.asList("B"));
        graph.put("E", Arrays.asList("B", "F"));
        graph.put("F", Arrays.asList("C", "E"));

        System.out.println("DFS recursive from A: " +
            dfsRecursive(graph, "A", new HashSet<>(), new ArrayList<>()));
        System.out.println("DFS iterative from A: " + dfsIterative(graph, "A"));
    }
}
