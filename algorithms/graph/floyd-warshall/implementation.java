public class implementation {

    static final int INF = Integer.MAX_VALUE / 2;

    static int[][] floydWarshall(int n, int[][] edges) {
        int[][] dist = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                dist[i][j] = (i == j) ? 0 : INF;
        for (int[] e : edges) dist[e[0]][e[1]] = e[2];

        for (int k = 0; k < n; k++)
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    if (dist[i][k] != INF && dist[k][j] != INF)
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);

        return dist;
    }

    static boolean hasNegativeCycle(int[][] dist) {
        for (int i = 0; i < dist.length; i++) if (dist[i][i] < 0) return true;
        return false;
    }

    static void printMatrix(int[][] dist, String[] labels) {
        System.out.printf("      ");
        for (String l : labels) System.out.printf("%5s", l);
        System.out.println();
        for (int i = 0; i < dist.length; i++) {
            System.out.printf("  %s  ", labels[i]);
            for (int v : dist[i]) System.out.printf("%5s", v == INF ? "INF" : v);
            System.out.println();
        }
    }

    public static void main(String[] args) {
        // 4 nodes: 0=A,1=B,2=C,3=D
        int[][] edges = {{0,1,3},{0,3,7},{1,0,8},{1,2,2},{2,0,5},{2,3,1},{3,0,2}};
        int[][] dist = floydWarshall(4, edges);
        printMatrix(dist, new String[]{"A","B","C","D"});
        System.out.println("Negative cycle: " + hasNegativeCycle(dist));
    }
}
