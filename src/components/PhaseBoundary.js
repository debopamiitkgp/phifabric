'use client';
const C="#FAF7F2",D="#2D2A26",W="#8C8578",R="#C4614E",B="#4A7B8C",G="#B8943E",L="#E5DED4",M="#D4CCC0";
export default function PhaseBoundary(){
  const pts=[];for(let x=60;x<=720;x+=3){const t=(x-60)/660;pts.push(`${x},${Math.max(80,Math.min(280,280-200/(1+Math.exp(-12*(t-0.5)))))}`)}
  return(
    <svg viewBox="0 0 800 400" style={{width:"100%",display:"block",background:C}}>
      <text x="400" y="32" textAnchor="middle" fontSize="17" fontWeight="700" fill={D} fontFamily="Georgia">The Power User Paradox</text>
      <text x="400" y="52" textAnchor="middle" fontSize="12" fill={W} fontFamily="Georgia" fontStyle="italic">Sigmoidal cost curve with phase boundary</text>
      <line x1="60" y1="280" x2="720" y2="280" stroke={M} strokeWidth="1.5"/>
      <line x1="60" y1="280" x2="60" y2="70" stroke={M} strokeWidth="1.5"/>
      <text x="390" y="300" textAnchor="middle" fontSize="11" fill={W} fontFamily="sans-serif">Query complexity / Loop Depth demanded →</text>
      <text x="28" y="175" textAnchor="middle" fontSize="11" fill={W} fontFamily="sans-serif" transform="rotate(-90,28,175)">Thermodynamic cost →</text>
      <line x1="60" y1="140" x2="720" y2="140" stroke={G} strokeWidth="1.5" strokeDasharray="8,4"/>
      <text x="730" y="135" fontSize="9" fill={G} fontFamily="sans-serif" fontWeight="600">Economic</text>
      <text x="730" y="147" fontSize="9" fill={G} fontFamily="sans-serif" fontWeight="600">viability</text>
      <rect x="60" y="210" width="240" height="70" fill={B} opacity="0.05"/>
      <text x="180" y="252" textAnchor="middle" fontSize="10" fill={B} fontFamily="Georgia" fontStyle="italic">Linear regime — cost scales predictably</text>
      <rect x="500" y="75" width="220" height="50" fill={R} opacity="0.05"/>
      <text x="610" y="98" textAnchor="middle" fontSize="10" fill={R} fontFamily="Georgia" fontStyle="italic">Beyond phase boundary — cost exceeds return</text>
      <polyline points={pts.join(" ")} fill="none" stroke={R} strokeWidth="2.5"/>
      <circle cx="390" cy="180" r="5" fill={C} stroke={G} strokeWidth="2.5"/>
      <line x1="390" y1="185" x2="390" y2="280" stroke={G} strokeWidth="1" strokeDasharray="4,3"/>
      <text x="390" y="295" textAnchor="middle" fontSize="9" fill={G} fontWeight="600" fontFamily="sans-serif">Inflection / phase boundary</text>
      <rect x="140" y="330" width="520" height="48" rx="6" fill="#F0EBE3" stroke={L}/>
      <text x="400" y="352" textAnchor="middle" fontSize="11" fill={D} fontFamily="Georgia" fontWeight="600">At the steep inflection, thermodynamic cost exceeds economic return.</text>
      <text x="400" y="370" textAnchor="middle" fontSize="11" fill={W} fontFamily="Georgia">This is not a pricing problem. It is a phase boundary.</text>
    </svg>
  );
}
