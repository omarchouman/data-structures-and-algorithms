import java.util.*;

public class implementation {

    static class Edge {
        String to;
        Integer weight;
        Edge(String to, Integer weight) { this.to = to; this.weight = weight; }
        public String toString() { return weight != null ? to + "(" + weight + ")" : to; }
    }

    private final Map<String, List<Edge>> adj = new LinkedHashMap<>();
    private final boolean directed;

    public implementation(boolean directed) { this.directed = directed; }
    public implementation() { this(false); }

    public void addVertex(String v) { adj.putIfAbsent(v, new ArrayList<>()); }

    public void addEdge(String u, String v, Integer weight) {
        addVertex(u); addVertex(v);
        adj.get(u).add(new Edge(v, weight));
        if (!directed) adj.get(v).add(new Edge(u, weight));
    }

    public void addEdge(String u, String v) { addEdge(u, v, null); }

    public List<Edge> neighbors(String v) { return adj.getOrDefault(v, Collections.emptyList()); }

    public Set<String> vertices() { return adj.keySet(); }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, List<Edge>> entry : adj.entrySet()) {
            sb.append(entry.getKey()).append(" -> ").append(entry.getValue()).append("\n");
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        implementation g = new implementation();
        g.addEdge("A", "B");
        g.addEdge("A", "C");
        g.addEdge("B", "D");
        g.addEdge("C", "D");
        g.addEdge("D", "E");

        System.out.println("Graph:\n" + g);
        System.out.println("Neighbors of A: " + g.neighbors("A"));
        System.out.println("Vertices: " + g.vertices());

        System.out.println("--- Weighted directed graph ---");
        implementation wg = new implementation(true);
        wg.addEdge("A", "B", 4);
        wg.addEdge("A", "C", 2);
        wg.addEdge("C", "B", 1);
        System.out.println(wg);
    }
}
