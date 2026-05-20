import { HashTableStep } from "@/lib/types";

const BUCKET_COUNT = 5;
const hash = (key: string) => key.charCodeAt(0) % BUCKET_COUNT;

type Op = { type: "put" | "get" | "delete"; key: string };

const OPS: Op[] = [
  { type: "put",    key: "apple" },
  { type: "put",    key: "banana" },
  { type: "put",    key: "cherry" },
  { type: "put",    key: "date" },
  { type: "get",    key: "banana" },
  { type: "put",    key: "avocado" },
  { type: "delete", key: "cherry" },
  { type: "get",    key: "date" },
];

export function generateHashTableSteps(): HashTableStep[] {
  const steps: HashTableStep[] = [];
  const buckets: string[][] = Array.from({ length: BUCKET_COUNT }, () => []);

  steps.push({ buckets: buckets.map(b => [...b]), action: "idle", activeBucket: null, activeItem: null, activeKey: null });

  for (const op of OPS) {
    const b = hash(op.key);
    steps.push({ buckets: buckets.map(b => [...b]), action: op.type, activeBucket: b, activeItem: null, activeKey: op.key });

    if (op.type === "put") {
      if (!buckets[b].includes(op.key)) buckets[b].push(op.key);
      steps.push({ buckets: buckets.map(b => [...b]), action: "put", activeBucket: b, activeItem: buckets[b].indexOf(op.key), activeKey: op.key });
    } else if (op.type === "get") {
      const idx = buckets[b].indexOf(op.key);
      steps.push({ buckets: buckets.map(b => [...b]), action: "get", activeBucket: b, activeItem: idx >= 0 ? idx : null, activeKey: op.key });
    } else if (op.type === "delete") {
      const idx = buckets[b].indexOf(op.key);
      if (idx >= 0) {
        steps.push({ buckets: buckets.map(b => [...b]), action: "delete", activeBucket: b, activeItem: idx, activeKey: op.key });
        buckets[b].splice(idx, 1);
        steps.push({ buckets: buckets.map(b => [...b]), action: "idle", activeBucket: null, activeItem: null, activeKey: null });
      }
    }
  }
  return steps;
}
