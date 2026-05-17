import java.util.ArrayList;
import java.util.List;

public class implementation {

    static int[] buildLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int length = 0, i = 1;
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(length)) {
                lps[i++] = ++length;
            } else if (length > 0) {
                length = lps[length - 1];
            } else {
                lps[i++] = 0;
            }
        }
        return lps;
    }

    static List<Integer> kmpSearch(String text, String pattern) {
        int n = text.length(), m = pattern.length();
        List<Integer> matches = new ArrayList<>();
        if (m == 0) return matches;

        int[] lps = buildLPS(pattern);
        int i = 0, j = 0;
        while (i < n) {
            if (text.charAt(i) == pattern.charAt(j)) { i++; j++; }
            if (j == m) {
                matches.add(i - j);
                j = lps[j - 1];
            } else if (i < n && text.charAt(i) != pattern.charAt(j)) {
                if (j > 0) j = lps[j - 1]; else i++;
            }
        }
        return matches;
    }

    public static void main(String[] args) {
        System.out.println(kmpSearch("AABAACAADAABAABA", "AABA")); // [0, 9, 12]
        System.out.println(kmpSearch("ABCABCABC", "ABC"));         // [0, 3, 6]
        System.out.println(kmpSearch("AAAAAA", "AA"));             // [0, 1, 2, 3, 4]
    }
}
