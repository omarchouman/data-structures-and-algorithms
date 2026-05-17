import java.util.ArrayList;
import java.util.List;

public class implementation {

    static final int BASE = 256;
    static final int MOD  = 101;

    static List<Integer> rabinKarp(String text, String pattern) {
        int n = text.length(), m = pattern.length();
        List<Integer> matches = new ArrayList<>();
        if (m > n) return matches;

        int h = 1;
        for (int i = 0; i < m - 1; i++) h = (h * BASE) % MOD;

        int patHash = 0, winHash = 0;
        for (int i = 0; i < m; i++) {
            patHash = (BASE * patHash + pattern.charAt(i)) % MOD;
            winHash = (BASE * winHash + text.charAt(i)) % MOD;
        }

        for (int i = 0; i <= n - m; i++) {
            if (patHash == winHash && text.substring(i, i + m).equals(pattern))
                matches.add(i);
            if (i < n - m) {
                winHash = (BASE * (winHash - text.charAt(i) * h) + text.charAt(i + m)) % MOD;
                if (winHash < 0) winHash += MOD;
            }
        }
        return matches;
    }

    public static void main(String[] args) {
        System.out.println(rabinKarp("ABCABCABC", "ABC"));         // [0, 3, 6]
        System.out.println(rabinKarp("AABAACAADAABAABA", "AABA")); // [0, 9, 12]
        System.out.println(rabinKarp("AAAAAA", "AA"));             // [0, 1, 2, 3, 4]
        System.out.println(rabinKarp("HELLO", "WORLD"));           // []
    }
}
