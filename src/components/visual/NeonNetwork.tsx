import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  seed?: number;
};

// Simple seeded RNG (mulberry32)
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateNetwork(seed = 0, width = 1200, height = 600) {
  const rand = mulberry32(0x9e3779b9 + seed);
  const count = 38;
  const margin = 40;
  const pts = Array.from({ length: count }, () => ({
    x: margin + rand() * (width - margin * 2),
    y: margin + rand() * (height - margin * 2),
  }));

  // Build edges by connecting each point to its 2 nearest neighbors
  const edges: Array<[number, number]> = [];
  const added = new Set<string>();
  pts.forEach((p, i) => {
    const distances = pts
      .map((q, j) => ({ j, d: (p.x - q.x) ** 2 + (p.y - q.y) ** 2 }))
      .filter(({ j }) => j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!added.has(key)) {
        added.add(key);
        edges.push([i, j]);
      }
    });
  });

  return { pts, edges, width, height };
}

const NeonNetwork: React.FC<Props> = ({ className, seed = 0 }) => {
  const data = useMemo(() => generateNetwork(seed), [seed]);

  return (
    <div className={cn("pointer-events-none select-none", className)} aria-hidden>
      <svg
        viewBox={`0 0 ${data.width} ${data.height}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {/* Lines */}
        {data.edges.map(([a, b], idx) => {
          const p1 = data.pts[a];
          const p2 = data.pts[b];
          return (
            <line
              key={idx}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              className="neon-line dash-animate"
              strokeWidth={1.2}
              strokeLinecap="round"
            />
          );
        })}
        {/* Nodes */}
        {data.pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={2.2} className="neon-node" />
        ))}
      </svg>
    </div>
  );
};

export default NeonNetwork;
