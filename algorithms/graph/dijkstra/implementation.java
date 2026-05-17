import java.util.*;

public class implementation {

    static Map<String, Integer> dijkstra(Map<String, List<int[]>> graph,
                                          Map<String, String> prev, String source) {
        Map<String, Integer> dist = new HashMap<>();
        for (String node : graph.keySet()) { dist.put(node, Integer.MAX_VALUE); prev.put(node, null); }
        dist.put(source, 0);

        // PriorityQueue entries: [distance, node]
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        Map<String, Integer> idx = new HashMap<>();
        for (String n : graph.keySet()) idx.put(n, idx.size());
        String[] nodes = new String[idx.size()];
        for (Map.Entry<String, Integer> e : idx.entrySet()) nodes[e.getValue()] = e.getKey();

        pq.offer(new int[]{0, idx.get(source)});

        while (!pq.isEmpty()) {
            int[] top = pq.poll();
            int d = top[0]; String u = nodes[top[1]];
            if (d > dist.get(u)) continue;
            for (int[] edge : graph.getOrDefault(u, Collections.emptyList())) {
                String v = nodes[edge[0]]; int w = edge[1];
                int newDist = dist.get(u) + w;
                if (newDist < dist.get(v)) {
                    dist.put(v, newDist);
                    prev.put(v, u);
                    pq.offer(new int[]{newDist, idx.get(v)});
                }
            }
        }
        return dist;
    }

    static List<String> shortestPath(Map<String, String> prev, String source, String target) {
        List<String> path = new ArrayList<>();
        String node = target;
        while (node != null) { path.add(node); node = prev.get(node); }
        Collections.reverse(path);
        return path.isEmpty() || !path.get(0).equals(source) ? Collections.emptyList() : path;
    }

    public static void main(String[] args) {
        // Build graph with node index mapping A=0,B=1,C=2,D=3
        Map<String, List<int[]>> graph = new LinkedHashMap<>();
        graph.put("A", Arrays.asList(new int[]{1, 4}, new int[]{2, 1})); // B=1,C=2
        graph.put("B", Arrays.asList(new int[]{3, 1}));                   // D=3
        graph.put("C", Arrays.asList(new int[]{1, 2}, new int[]{3, 5}));
        graph.put("D", Collections.emptyList());

        Map<String, String> prev = new HashMap<>();
        Map<String, Integer> dist = dijkstra(graph, prev, "A");
        System.out.println("Distances from A: " + dist);
        System.out.println("Path A → D: " + shortestPath(prev, "A", "D"));
    }
}
