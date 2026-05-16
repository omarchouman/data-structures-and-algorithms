public class implementation {

    private final int[] tree;
    private final int n;

    public implementation(int[] data) {
        n = data.length;
        tree = new int[4 * n];
        if (n > 0) build(data, 0, 0, n - 1);
    }

    private void build(int[] data, int node, int start, int end) {
        if (start == end) { tree[node] = data[start]; return; }
        int mid = (start + end) / 2;
        build(data, 2 * node + 1, start, mid);
        build(data, 2 * node + 2, mid + 1, end);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public int query(int l, int r) { return query(0, 0, n - 1, l, r); }
    private int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return tree[node];
        int mid = (start + end) / 2;
        return query(2 * node + 1, start, mid, l, r) +
               query(2 * node + 2, mid + 1, end, l, r);
    }

    public void update(int index, int value) { update(0, 0, n - 1, index, value); }
    private void update(int node, int start, int end, int index, int value) {
        if (start == end) { tree[node] = value; return; }
        int mid = (start + end) / 2;
        if (index <= mid) update(2 * node + 1, start, mid, index, value);
        else              update(2 * node + 2, mid + 1, end, index, value);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static void main(String[] args) {
        implementation st = new implementation(new int[]{1, 3, 5, 7, 9, 11});

        System.out.println("Sum [1, 3]: " + st.query(1, 3));   // 15
        System.out.println("Sum [0, 5]: " + st.query(0, 5));   // 36
        st.update(1, 10);
        System.out.println("After update(1, 10):");
        System.out.println("Sum [1, 3]: " + st.query(1, 3));   // 22
    }
}
