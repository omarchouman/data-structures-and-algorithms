import Link from "next/link";

const SECTIONS = [
  {
    category: "Sorting",
    items: [
      { name: "Bubble Sort",    href: "/sorting/bubble-sort",    description: "Compare and swap adjacent elements repeatedly." },
      { name: "Insertion Sort", href: "/sorting/insertion-sort", description: "Build a sorted array one element at a time." },
      { name: "Merge Sort",     href: "/sorting/merge-sort",     description: "Divide, sort, and merge halves recursively." },
      { name: "Quick Sort",     href: "/sorting/quick-sort",     description: "Partition around a pivot and recurse." },
    ],
  },
  {
    category: "Graph",
    items: [
      { name: "Breadth-First Search", href: "/graph/bfs", description: "Explore nodes level by level using a queue." },
      { name: "Depth-First Search",   href: "/graph/dfs", description: "Explore as deep as possible before backtracking." },
    ],
  },
  {
    category: "Data Structures",
    items: [
      { name: "Stack", href: "/data-structures/stack", description: "LIFO — last in, first out." },
      { name: "Queue", href: "/data-structures/queue", description: "FIFO — first in, first out." },
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
