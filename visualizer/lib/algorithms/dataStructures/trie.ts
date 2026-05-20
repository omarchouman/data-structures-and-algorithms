import { TrieStep, TrieNodeData } from "@/lib/types";

const WORDS = ["cat", "car", "card", "care", "bat", "ball"];

function layoutTrie(nodes: TrieNodeData[], id: number, depth: number, xMin: number, xMax: number) {
  const n = nodes.find(nd => nd.id === id)!;
  n.x = (xMin + xMax) / 2;
  n.y = 30 + depth * 60;
  const w = (xMax - xMin) / Math.max(n.children.length, 1);
  n.children.forEach((cid, i) => layoutTrie(nodes, cid, depth + 1, xMin + i * w, xMin + (i + 1) * w));
}

export function generateTrieSteps(): TrieStep[] {
  const steps: TrieStep[] = [];
  const nodes: TrieNodeData[] = [{ id: 0, char: "", isEnd: false, children: [], x: 250, y: 30 }];
  let nextId = 1;

  steps.push({ nodes: [{ ...nodes[0] }], action: "idle", path: [], label: "Empty Trie (root)" });

  for (const word of WORDS) {
    const path: number[] = [0];
    let cur = 0;

    for (const ch of word) {
      const parent = nodes.find(n => n.id === cur)!;
      let childId = parent.children.find(cid => nodes.find(n => n.id === cid)!.char === ch) ?? null;

      if (childId === null) {
        childId = nextId++;
        nodes.push({ id: childId, char: ch, isEnd: false, children: [], x: 0, y: 0 });
        parent.children.push(childId);
      }
      path.push(childId);
      cur = childId;
      layoutTrie(nodes, 0, 0, 0, 500);
      steps.push({ nodes: nodes.map(n => ({ ...n })), action: "insert", path: [...path], label: `Inserting "${word}" — '${ch}'` });
    }

    nodes.find(n => n.id === cur)!.isEnd = true;
    layoutTrie(nodes, 0, 0, 0, 500);
    steps.push({ nodes: nodes.map(n => ({ ...n })), action: "idle", path: [], label: `Inserted "${word}"` });
  }

  // Search demo
  const searchWord = "car";
  let cur = 0;
  const searchPath: number[] = [0];
  for (const ch of searchWord) {
    const parent = nodes.find(n => n.id === cur)!;
    const childId = parent.children.find(cid => nodes.find(n => n.id === cid)!.char === ch) ?? null;
    if (childId === null) break;
    searchPath.push(childId);
    cur = childId;
    steps.push({ nodes: nodes.map(n => ({ ...n })), action: "search", path: [...searchPath], label: `Searching "${searchWord}" — '${ch}'` });
  }

  return steps;
}
