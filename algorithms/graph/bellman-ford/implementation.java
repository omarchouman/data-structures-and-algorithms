import java.util.*;

public class implementation {

    static class Edge {
        String u, v; int w;
        Edge(String u, String v, int w) { this.u = u; this.v = v; this.w = w; }
    }

    static Map<String, Integer> bellmanFord(List<String> vertices, List<Edge> edges,
                                             String source, boolean[] hasNegCycle) {
        Map<String, Integer> dist = new HashMap<>();
        for (String v : vertices) dist.put(v, Integer.MAX_VALUE);
        dist.put(source, 0);

        for (int i = 0; i < vertices.size() - 1; i++) {
            for (Edge e : edges) {
                if (dist.get(e.u) != Integer.MAX_VALUE && dist.get(e.u) + e.w < dist.get(e.v)) {
                    dist.put(e.v, dist.get(e.u) + e.w);
                }
            }
        }

        hasNegCycle[0] = false;
        for (Edge e : edges) {
            if (dist.get(e.u) != Integer.MAX_VALUE && dist.get(e.u) + e.w < dist.get(e.v)) {
                hasNegCycle[0] = true;
                break;
            }
        }
        return dist;
    }

    public static void main(String[] args) {
        List<String> vertices = Arrays.asList("A", "B", "C", "D", "E");
        List<Edge> edges = Arrays.asList(
            new Edge("A","B",-1), new Edge("A","C", 4),
            new Edge("B","C", 3), new Edge("B","D", 2), new Edge("B","E", 2),
            new Edge("D","B", 1), new Edge("D","C", 5), new Edge("E","D",-3)
        );

        boolean[] hasNegCycle = {false};
        Map<String, Integer> dist = bellmanFord(vertices, edges, "A", hasNegCycle);
        System.out.println("Distances from A: " + dist);
        // {A=0, B=-1, C=2, D=-2, E=1}
        System.out.println("Negative cycle: " + hasNegCycle[0]);  // false
    }
}
