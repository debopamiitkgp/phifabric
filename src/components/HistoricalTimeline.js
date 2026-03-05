'use client';
const C="#FAF7F2",D="#2D2A26",W="#8C8578",R="#C4614E",B="#4A7B8C",G="#B8943E",L="#E5DED4",M="#D4CCC0";
const ev=[
  {year:"1824",label:"Carnot's Limit",desc:"Maximum efficiency of heat engines",color:B},
  {year:"1948",label:"Shannon's Limit",desc:"Maximum rate of error-free communication",color:B},
  {year:"1961",label:"Landauer's Limit",desc:"Minimum energy to erase one bit",color:G},
  {year:"2026",label:"Entropic Work Function",desc:"Minimum energy to extract verified intelligence",color:R},
];
export default function HistoricalTimeline(){return(
  <svg viewBox="0 0 800 340" style={{width:"100%",display:"block",background:C}}>
    <text x="400" y="32" textAnchor="middle" fontSize="17" fontWeight="700" fill={D} fontFamily="Georgia">A History of Physical Limits</text>
    <text x="400" y="52" textAnchor="middle" fontSize="12" fill={W} fontFamily="Georgia" fontStyle="italic">Each era of technology meets its thermodynamic constraint</text>
    <line x1="100" y1="150" x2="700" y2="150" stroke={M} strokeWidth="2"/>
    <defs><marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill={R}/></marker></defs>
    <line x1="680" y1="150" x2="710" y2="150" stroke={R} strokeWidth="2" markerEnd="url(#ah)"/>
    {ev.map((e,i)=>{const x=140+i*160;const above=i%2===0;return(
      <g key={i}>
        <circle cx={x} cy={150} r={i===3?9:6} fill={C} stroke={e.color} strokeWidth={i===3?2.5:1.5}/>
        <line x1={x} y1={above?98:158} x2={x} y2={above?144:205} stroke={e.color} strokeWidth="1" strokeDasharray="3,2"/>
        <text x={x} y={above?85:225} textAnchor="middle" fontSize="20" fontWeight="700" fill={e.color} fontFamily="Georgia">{e.year}</text>
        <text x={x} y={above?73:243} textAnchor="middle" fontSize="12" fontWeight="700" fill={D} fontFamily="Georgia">{e.label}</text>
        <text x={x} y={above?60:258} textAnchor="middle" fontSize="10" fill={W} fontFamily="Georgia">{e.desc}</text>
      </g>
    );})}
    <rect x="120" y="285" width="560" height="40" rx="8" fill="#F0EBE3" stroke={L}/>
    <text x="400" y="305" textAnchor="middle" fontSize="13" fill={D} fontFamily="Georgia" fontStyle="italic">"The entropy of intelligence is not a metaphor.</text>
    <text x="400" y="320" textAnchor="middle" fontSize="13" fill={D} fontFamily="Georgia" fontStyle="italic">It is a measurement. And it is rising."</text>
  </svg>
);}
