// The site's background look, shared with the README banner and the link-preview image:
// coloured glows, a fading dot grid and a faint node network. Purely decorative.

// Fixed coordinates (not random) so the prerendered HTML and the client render match.
// prettier-ignore
const nodes: [number, number][] = [
  [369, 435], [465, 548], [36, 281], [548, 383], [525, 83], [283, 158], [325, 341],
  [27, 141], [177, 533], [366, 91], [21, 508], [137, 141], [570, 509], [520, 187],
  [102, 56], [189, 358], [22, 400], [478, 289], [130, 443], [213, 219],
];
// prettier-ignore
const edges: [number, number][] = [
  [0, 6], [0, 1], [1, 12], [2, 16], [2, 7], [3, 17], [3, 12], [4, 13], [4, 9], [5, 19],
  [5, 9], [6, 15], [7, 11], [7, 14], [8, 18], [8, 10], [10, 16], [10, 18], [11, 14], [11, 19],
  [13, 17], [15, 18], [16, 18],
];
// These nodes glow and pulse; the rest stay still.
const lit = new Set([4, 6, 12, 17, 19]);

function Network({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g className="net-lines">
        {edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      {nodes.map(([x, y], i) =>
        lit.has(i) ? (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            className="net-lit"
            style={{ animationDelay: `${(i % 5) * 0.9}s` }}
          />
        ) : (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 4 : 3}
            className="net-node"
          />
        ),
      )}
    </svg>
  );
}

// "hero" sits behind the top of the page and runs under the top bar; "footer" is a
// softer mirror image, so the page opens and closes with the same look.
export function Atmosphere({ variant }: { variant: "hero" | "footer" }) {
  const hero = variant === "hero";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -z-10 overflow-hidden ${
        hero ? "-top-14 bottom-0" : "inset-y-0"
      }`}
    >
      <div className={hero ? "atmos-glow-hero" : "atmos-glow-footer"} />
      <div className="atmos-dots" />
      <Network
        className={
          hero
            ? "atmos-net absolute -right-28 top-6 w-[34rem] opacity-60 sm:-right-16 sm:w-[36rem] sm:opacity-100 lg:right-[calc(50vw-50rem)]"
            : "atmos-net absolute -right-24 bottom-[-9rem] w-[28rem] -scale-x-100 opacity-40 sm:opacity-75 lg:right-[calc(50vw-46rem)]"
        }
      />
      <div className={hero ? "atmos-fade-bottom" : "atmos-fade-top"} />
    </div>
  );
}
