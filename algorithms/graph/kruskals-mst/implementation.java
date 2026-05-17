import java.util.*;

public class implementation {

    static Map<String, String> parent = new HashMap<>();
    static Map<String, Integer> rank  = new HashMap<>();

    static void init(List<String> nodes) {
        for (String n : nodes) { parent.put(n, n); rank.put(n, 0); }
    }

    static String find(String x) {
        if (!parent.get(x).equals(x)) parent.put(x, find(parent.get(x)));
        return parent.get(x);
    }

    static boolean union(String x, String y) {
        String rx = find(x), ry = find(y);
        if (rx.equals(ry)) return false;
        if (rank.get(rx) < rank.get(ry)) { String tmp = rx; rx = ry; ry = tmp; }
        parent.put(ry, rx);
        if (rank.get(rx).equals(rank.get(ry))) rank.put(rx, rank.get(rx) + 1);
        return true;
    }

    public static void main(String[] args) {
        List<String> vertices = Arrays.asList("A","B","C","D");
        // edges: {u, v, weight}
        int[][] edges = {{0,1,2},{0,2,3},{1,2,1},{1,3,4},{2,3,5}};
        String[] nodes = {"A","B","C","D"};

        // Sort edges by weight
        Arrays.sort(edges, Comparator.comparingInt(e -> e[2]));

        init(vertices);
        List<String> mst = new ArrayList<>();
        int total = 0;

        for (int[] e : edges) {
            String u = nodes[e[0]], v = nodes[e[1]]; int w = e[2];
            if (union(u, v)) {
                mst.add("(" + u + "," + v + "," + w + ")");
                total += w;
                if (mst.size() == vertices.size() - 1) break;
            }
        }

        System.out.println("MST edges: " + mst);       // [(B,C,1),(A,B,2),(B,D,4)]
        System.out.println("Total weight: " + total);  // 7
    }
}
