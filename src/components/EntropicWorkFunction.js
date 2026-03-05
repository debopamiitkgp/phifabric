'use client';
const C="#FAF7F2",D="#2D2A26",W="#8C8578",R="#C4614E",B="#4A7B8C",G="#B8943E",L="#E5DED4",M="#D4CCC0";
export default function EntropicWorkFunction(){
  const defl=[],eff=[];
  for(let x=60;x<=720;x+=4){const t=(x-60)/660;
    defl.push(`${x},${Math.max(100,Math.min(280,280-180*Math.exp(-2.5*t)))}`);
    eff.push(`${x},${Math.max(100,Math.min(280,280-180*(1-Math.exp(-0.3*t))*(1+1.8*t)))}`);}
  return(
    <svg viewBox="0 0 800 430" style={{width:"100%",display:"block",background:C}}>
      <text x="400" y="32" textAnchor="middle" fontSize="17" fontWeight="700" fill={D} fontFamily="Georgia">The Entropic Work Function: Φ_E(t)</text>
      <text x="400" y="52" textAnchor="middle" fontSize="12" fill={W} fontFamily="Georgia" fontStyle="italic">Algorithmic deflation vs. thermodynamic reality</text>
      <line x1="60" y1="280" x2="720" y2="280" stroke={M} strokeWidth="1.5"/>
      <line x1="60" y1="280" x2="60" y2="75" stroke={M} strokeWidth="1.5"/>
      <text x="390" y="302" textAnchor="middle" fontSize="11" fill={W} fontFamily="sans-serif">Time →</text>
      <text x="28" y="178" textAnchor="middle" fontSize="11" fill={W} fontFamily="sans-serif" transform="rotate(-90,28,178)">Cost per verified output →</text>
      <rect x="60" y="205" width="660" height="75" fill={B} opacity="0.05"/>
      <text x="140" y="268" fontSize="10" fill={B} fontFamily="Georgia" fontStyle="italic">Zero marginal cost illusion</text>
      <rect x="400" y="75" width="320" height="80" fill={R} opacity="0.05"/>
      <text x="560" y="90" fontSize="10" fill={R} fontFamily="Georgia" fontStyle="italic">Heavy Logic regime</text>
      <polyline points={defl.join(" ")} fill="none" stroke={B} strokeWidth="2.5"/>
      <polyline points={eff.join(" ")} fill="none" stroke={R} strokeWidth="2.5"/>
      <circle cx="380" cy="175" r="5" fill={C} stroke={G} strokeWidth="2.5"/>
      <line x1="380" y1="180" x2="380" y2="280" stroke={G} strokeWidth="1" strokeDasharray="4,3"/>
      <text x="380" y="295" textAnchor="middle" fontSize="9" fill={G} fontWeight="600" fontFamily="sans-serif">Phase transition</text>
      <line x1="480" y1="330" x2="508" y2="330" stroke={B} strokeWidth="2.5"/>
      <text x="516" y="334" fontSize="11" fill={D} fontFamily="Georgia">Algorithmic deflation (λ)</text>
      <line x1="480" y1="350" x2="508" y2="350" stroke={R} strokeWidth="2.5"/>
      <text x="516" y="354" fontSize="11" fill={D} fontFamily="Georgia">Effective cost (λ − δ + π)</text>
      <circle cx="494" cy="370" r="3.5" fill={C} stroke={G} strokeWidth="2"/>
      <text x="516" y="374" fontSize="11" fill={D} fontFamily="Georgia">Crossover: irreversible phase transition</text>
      <rect x="100" y="395" width="600" height="28" rx="6" fill="#F0EBE3" stroke={L}/>
      <text x="400" y="414" textAnchor="middle" fontSize="11" fill={W} fontFamily="Georgia">Φ_E(t) = E(t) × L(t) — first-order approximation; coupled dynamics require differential treatment</text>
    </svg>
  );
}
