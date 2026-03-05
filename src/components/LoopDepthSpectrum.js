'use client';
const C = "#FAF7F2", D = "#2D2A26", W = "#8C8578", R = "#C4614E", B = "#4A7B8C", G = "#B8943E", L = "#E5DED4";
const stages = [
  { label: "Copilot", depth: "0", desc: "Reactive, memoryless", energy: "Trivial", x: 100 },
  { label: "Assisted", depth: "~100", desc: "Guided reasoning", energy: "Linear", x: 280 },
  { label: "Autonomous", depth: "~1,000", desc: "Self-correcting", energy: "Exponential", x: 460 },
  { label: "Six Sigma", depth: "~10,000+", desc: "Verified certainty", energy: "Industrial", x: 640 },
];
export default function LoopDepthSpectrum() {
  return (
    <svg viewBox="0 0 800 380" style={{ width: "100%", display: "block", background: C }}>
      <text x="400" y="38" textAnchor="middle" fontSize="17" fontWeight="700" fill={D} fontFamily="Georgia">The Loop Depth Spectrum</text>
      <text x="400" y="58" textAnchor="middle" fontSize="12" fill={W} fontFamily="Georgia" fontStyle="italic">From reactive computation to thermodynamic work</text>
      <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor={B} stopOpacity="0.15"/><stop offset="50%" stopColor={G} stopOpacity="0.35"/><stop offset="100%" stopColor={R} stopOpacity="0.8"/></linearGradient></defs>
      <rect x="80" y="110" width="640" height="10" rx="5" fill="url(#sg)"/>
      <line x1="520" y1="95" x2="520" y2="135" stroke={R} strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x="520" y="90" textAnchor="middle" fontSize="9" fill={R} fontFamily="sans-serif" fontWeight="600">PHASE BOUNDARY</text>
      {stages.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy="115" r="7" fill={C} stroke={D} strokeWidth="1.5"/>
          <text x={s.x} y="118" textAnchor="middle" fontSize="8" fill={D} fontWeight="700" fontFamily="sans-serif">{i+1}</text>
          <text x={s.x} y="152" textAnchor="middle" fontSize="14" fontWeight="700" fill={D} fontFamily="Georgia">{s.label}</text>
          <text x={s.x} y="170" textAnchor="middle" fontSize="11" fill={W} fontFamily="Georgia">{s.desc}</text>
          <text x={s.x} y="192" textAnchor="middle" fontSize="10" fill={W} fontFamily="sans-serif">Loop Depth: {s.depth}</text>
          <text x={s.x} y="212" textAnchor="middle" fontSize="11" fontWeight="600" fill={i>=2?R:B} fontFamily="Georgia">Energy: {s.energy}</text>
        </g>
      ))}
      <rect x="160" y="260" width="480" height="72" rx="8" fill="#F0EBE3" stroke={L}/>
      <text x="400" y="285" textAnchor="middle" fontSize="12" fontWeight="600" fill={D} fontFamily="Georgia">The phase transition occurs when Loop Depth exceeds ~1,000 iterations.</text>
      <text x="400" y="305" textAnchor="middle" fontSize="11" fill={W} fontFamily="Georgia">Beyond this threshold, heat dissipation — not algorithmic elegance —</text>
      <text x="400" y="322" textAnchor="middle" fontSize="11" fill={W} fontFamily="Georgia">becomes the binding constraint on computational output.</text>
    </svg>
  );
}
