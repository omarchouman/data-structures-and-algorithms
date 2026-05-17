import java.util.*;

public class implementation {

    public static void main(String[] args) {
        // Adjacency list: node -> list of [neighbour, weight]
        Map<String, List<int[]>> graph = new LinkedHashMap<>();
        // Using index map: A=0,B=1,C=2,D=3
        String[] nodes = {"A","B","C","D"};
        int[][] raw = {
            {1,2},{2,3},          // A: B(2), C(3)
            {0,2},{2,1},{3,4},    // B: A(2), C(1), D(4)
            {0,3},{1,1},{3,5},    // C: A(3), B(1), D(5)
            {1,4},{2,5}           // D: B(4), C(5)
        };
        int[] offsets = {0, 2, 5, 8, 10};
        for (int i = 0; i < 4; i++) {
            List<int[]> edges = new ArrayList<>();
            for (int j = offsets[i]; j < offsets[i+1]; j++) edges.add(raw[j]);
            graph.put(nodes[i], edges);
        }

        Set<String> visited = new LinkedHashSet<>();
        // PQ: [weight, fromIdx, toIdx]
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        Map<String,Integer> idx = new HashMap<>();
        for (int i = 0; i < nodes.length; i++) idx.put(nodes[i], i);

        visited.add("A");
        for (int[] e : graph.get("A")) pq.offer(new int[]{e[1], idx.get("A"), e[0]});

        List<String> mstEdges = new ArrayList<>();
        int totalWeight = 0;

        while (!pq.isEmpty() && visited.size() < nodes.length) {
            int[] top = pq.poll();
            int w = top[0]; String u = nodes[top[1]], v = nodes[top[2]];
            if (visited.contains(v)) continue;
            visited.add(v);
            mstEdges.add("(" + u + "," + v + "," + w + ")");
            totalWeight += w;
            for (int[] e : graph.get(v)) {
                if (!visited.contains(nodes[e[0]])) pq.offer(new int[]{e[1], idx.get(v), e[0]});
            }
        }

        System.out.println("MST edges: " + mstEdges);
        System.out.println("Total weight: " + totalWeight);  // 7
    }
}
