public class implementation {

    private final int[] parent;
    private final int[] rank;
    private int components;

    public implementation(int n) {
        parent = new int[n];
        rank = new int[n];
        components = n;
        for (int i = 0; i < n; i++) parent[i] = i;
    }

    public int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]); // path compression
        return parent[x];
    }

    public boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) { int tmp = rx; rx = ry; ry = tmp; }
        parent[ry] = rx;
        if (rank[rx] == rank[ry]) rank[rx]++;
        components--;
        return true;
    }

    public boolean connected(int x, int y) { return find(x) == find(y); }

    public int components() { return components; }

    public static void main(String[] args) {
        implementation uf = new implementation(6);
        uf.union(0, 1);
        uf.union(1, 2);
        uf.union(3, 4);

        System.out.println("0 and 2 connected: " + uf.connected(0, 2));  // true
        System.out.println("0 and 3 connected: " + uf.connected(0, 3));  // false
        System.out.println("Components: " + uf.components());             // 3

        uf.union(2, 3);
        System.out.println("After union(2,3):");
        System.out.println("0 and 4 connected: " + uf.connected(0, 4));  // true
        System.out.println("Components: " + uf.components());             // 2
    }
}
