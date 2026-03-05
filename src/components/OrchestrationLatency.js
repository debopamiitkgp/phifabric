'use client';
const C="#FAF7F2",D="#2D2A26",W="#8C8578",R="#C4614E",B="#4A7B8C",G="#B8943E",L="#E5DED4";
const items=[{y:145,label:"Data retrieval"},{y:175,label:"State synchronization"},{y:205,label:"Checkpoint writes"},{y:235,label:"Subtask routing"}];
export default function OrchestrationLatency(){return(
  <svg viewBox="0 0 800 460" style={{width:"100%",display:"block",background:C}}>
    <text x="400" y="32" textAnchor="middle" fontSize="17" fontWeight="700" fill={D} fontFamily="Georgia">The Latency-Loop Drag</text>
    <text x="400" y="52" textAnchor="middle" fontSize="12" fill={W} fontFamily="Georgia" fontStyle="italic">The cable is not in the loop — but orchestration is</text>
    <rect x="40" y="80" width="300" height="230" rx="12" fill="#F0EBE3" stroke={B} strokeWidth="1.5"/>
    <text x="190" y="105" textAnchor="middle" fontSize="14" fontWeight="700" fill={B} fontFamily="Georgia">Local GPU Cluster</text>
    <ellipse cx="190" cy="190" rx="75" ry="45" fill="none" stroke={B} strokeWidth="1.5" strokeDasharray="6,3"/>
    <polygon points="265,185 255,178 257,195" fill={B}/>
    <text x="190" y="188" textAnchor="middle" fontSize="10" fontWeight="600" fill={D} fontFamily="sans-serif">Monte Carlo</text>
    <text x="190" y="201" textAnchor="middle" fontSize="10" fontWeight="600" fill={D} fontFamily="sans-serif">Tree Search</text>
    <text x="190" y="260" textAnchor="middle" fontSize="10" fill={B} fontFamily="sans-serif" fontWeight="600">μs-scale inter-node latency</text>
    <text x="190" y="278" textAnchor="middle" fontSize="10" fill={B} fontFamily="sans-serif" fontWeight="600">1,000–10,000 loops LOCAL</text>
    <text x="190" y="300" textAnchor="middle" fontSize="20" fill={B} fontFamily="Georgia" fontWeight="700">≈ 0 cable trips</text>
    <rect x="460" y="80" width="300" height="230" rx="12" fill="#F0EBE3" stroke={R} strokeWidth="1.5"/>
    <text x="610" y="105" textAnchor="middle" fontSize="14" fontWeight="700" fill={R} fontFamily="Georgia">Orchestration Layer</text>
    {items.map((it,i)=><g key={i}><circle cx="490" cy={it.y} r="3.5" fill={R}/><text x="502" y={it.y+4} fontSize="11" fill={D} fontFamily="Georgia">{it.label}</text><text x="735" y={it.y+4} textAnchor="end" fontSize="10" fill={R} fontFamily="sans-serif" fontWeight="600">150ms ×</text></g>)}
    <line x1="480" y1="258" x2="740" y2="258" stroke={L} strokeWidth="1"/>
    <text x="610" y="278" textAnchor="middle" fontSize="10" fill={R} fontFamily="sans-serif" fontWeight="600">50–1,000+ round-trips per task</text>
    <text x="610" y="300" textAnchor="middle" fontSize="20" fill={R} fontFamily="Georgia" fontWeight="700">≈ minutes of dead time</text>
    <line x1="340" y1="190" x2="460" y2="160" stroke={G} strokeWidth="1.5" strokeDasharray="6,3"/>
    <line x1="340" y1="190" x2="460" y2="190" stroke={G} strokeWidth="1.5" strokeDasharray="6,3"/>
    <line x1="340" y1="190" x2="460" y2="220" stroke={G} strokeWidth="1.5" strokeDasharray="6,3"/>
    <text x="400" y="248" textAnchor="middle" fontSize="9" fill={G} fontFamily="sans-serif" fontWeight="600">SUBMARINE FIBER ~150ms</text>
    <rect x="120" y="340" width="560" height="90" rx="10" fill="#F0EBE3" stroke={L}/>
    <text x="400" y="365" textAnchor="middle" fontSize="12" fontWeight="700" fill={D} fontFamily="Georgia">+ Cryptographic Compute Tax (FHE)</text>
    <text x="400" y="385" textAnchor="middle" fontSize="11" fill={W} fontFamily="Georgia">Fully Homomorphic Encryption imposes 10×–50× compute overhead</text>
    <text x="400" y="405" textAnchor="middle" fontSize="11" fill={W} fontFamily="Georgia">on encrypted offshore data, compounding orchestration latency</text>
    <text x="400" y="425" textAnchor="middle" fontSize="12" fontWeight="700" fill={R} fontFamily="Georgia">→ The $0.04/kWh arbitrage mathematically implodes</text>
  </svg>
);}
