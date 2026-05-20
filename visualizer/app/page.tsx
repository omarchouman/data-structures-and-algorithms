import Link from "next/link";

const SECTIONS = [
  {
    category: "Sorting",
    items: [
      { name: "Bubble Sort",     href: "/sorting/bubble-sort",     description: "Compare and swap adjacent elements repeatedly." },
      { name: "Insertion Sort",  href: "/sorting/insertion-sort",  description: "Build a sorted array one element at a time." },
      { name: "Merge Sort",      href: "/sorting/merge-sort",      description: "Divide, sort, and merge halves recursively." },
      { name: "Quick Sort",      href: "/sorting/quick-sort",      description: "Partition around a pivot and recurse." },
      { name: "Selection Sort",  href: "/sorting/selection-sort",  description: "Find the minimum and place it at the front." },
      { name: "Heap Sort",       href: "/sorting/heap-sort",       description: "Sort using a binary heap structure." },
      { name: "Radix Sort",      href: "/sorting/radix-sort",      description: "Sort digit by digit from least to most significant." },
    ],
  },
  {
    category: "Searching",
    items: [
      { name: "Linear Search", href: "/searching/linear-search", description: "Scan each element until the target is found." },
      { name: "Binary Search", href: "/searching/binary-search", description: "Halve the search space each step on a sorted array." },
    ],
  },
  {
    category: "Graph",
    items: [
      { name: "Breadth-First Search",  href: "/graph/bfs",           description: "Explore nodes level by level using a queue." },
      { name: "Depth-First Search",    href: "/graph/dfs",           description: "Explore as deep as possible before backtracking." },
      { name: "Dijkstra's",            href: "/graph/dijkstra",      description: "Shortest path from a source using a greedy approach." },
      { name: "Bellman-Ford",          href: "/graph/bellman-ford",  description: "Shortest path tolerating negative edge weights." },
      { name: "Prim's MST",            href: "/graph/prims-mst",     description: "Grow a minimum spanning tree one edge at a time." },
      { name: "Kruskal's MST",         href: "/graph/kruskals-mst",  description: "Build MST by adding cheapest edges without cycles." },
      { name: "Floyd-Warshall",        href: "/graph/floyd-warshall",description: "All-pairs shortest paths via dynamic programming." },
    ],
  },
  {
    category: "Dynamic Programming",
    items: [
      { name: "Fibonacci",      href: "/dynamic-programming/fibonacci",   description: "Build up Fibonacci numbers bottom-up." },
      { name: "Knapsack",       href: "/dynamic-programming/knapsack",    description: "Maximize value within a weight constraint." },
      { name: "LCS",            href: "/dynamic-programming/lcs",         description: "Longest common subsequence of two strings." },
      { name: "LIS",            href: "/dynamic-programming/lis",         description: "Longest increasing subsequence in an array." },
      { name: "Coin Change",    href: "/dynamic-programming/coin-change", description: "Fewest coins to reach a target amount." },
    ],
  },
  {
    category: "String Algorithms",
    items: [
      { name: "KMP",          href: "/string/kmp",          description: "Efficient pattern matching using a failure function." },
      { name: "Rabin-Karp",   href: "/string/rabin-karp",   description: "Pattern matching with rolling hash comparisons." },
    ],
  },
  {
    category: "Data Structures",
    items: [
      { name: "Stack",          href: "/data-structures/stack",          description: "LIFO — last in, first out." },
      { name: "Queue",          href: "/data-structures/queue",          description: "FIFO — first in, first out." },
      { name: "Linked List",    href: "/data-structures/linked-list",    description: "Chain of nodes each pointing to the next." },
      { name: "Dynamic Array",  href: "/data-structures/dynamic-array",  description: "Resizable array that doubles capacity when full." },
      { name: "Deque",          href: "/data-structures/deque",          description: "Double-ended queue supporting front and rear operations." },
      { name: "Hash Table",     href: "/data-structures/hash-table",     description: "Key-value store with O(1) average lookups via hashing." },
      { name: "BST",            href: "/data-structures/bst",            description: "Binary search tree with ordered insert and search." },
      { name: "AVL Tree",       href: "/data-structures/avl-tree",       description: "Self-balancing BST using rotations." },
      { name: "Heap",           href: "/data-structures/heap",           description: "Min-heap with insert, extract-min, and heapify." },
      { name: "Trie",           href: "/data-structures/trie",           description: "Prefix tree for efficient string operations." },
      { name: "Union-Find",     href: "/data-structures/union-find",     description: "Disjoint sets with union by rank and path compression." },
      { name: "Segment Tree",   href: "/data-structures/segment-tree",   description: "Range sum queries and point updates in O(log n)." },
    ],
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">DSA Visualizer</h1>
      <p className="text-slate-500 mb-10">
        Watch algorithms and data structures come to life, step by step.
      </p>
      <div className="flex flex-col gap-10">
        {SECTIONS.map(({ category, items }) => (
          <section key={category}>
            <h2 className="text-lg font-semibold mb-4 text-slate-700">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map(({ name, href, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="block p-4 border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all"
                >
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-slate-500 mt-1">{description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
