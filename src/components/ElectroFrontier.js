'use client';
export default function ElectroFrontier() {
  return (
    <svg viewBox="0 0 750 500" style={{ width: '100%', display: 'block', background: '#FAF7F2' }}>
      <defs>
        <linearGradient id="ef-safeZone" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3D8B58" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#3D8B58" stopOpacity="0.02"/>
        </linearGradient>
        <linearGradient id="ef-unsafeZone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4614E" stopOpacity="0.06"/>
          <stop offset="100%" stopColor="#C4614E" stopOpacity="0.02"/>
        </linearGradient>
        <clipPath id="ef-plotArea">
          <rect x="100" y="55" width="510" height="340"/>
        </clipPath>
      </defs>

      {/* Title */}
      <text x="375" y="28" textAnchor="middle" fill="#2D2A26" fontSize="15" fontWeight="700" letterSpacing="0.3" fontFamily="sans-serif">The Electro-Information Frontier</text>
      <text x="375" y="44" textAnchor="middle" fill="#8C8578" fontSize="9" fontFamily="sans-serif">Charge density limits vs. electrode geometry (Shannon 1992 framework)</text>

      {/* Plot area */}
      <rect x="100" y="55" width="510" height="340" fill="#F0EBE3" rx="2" stroke="#D4CCC0" strokeWidth="0.5"/>

      {/* Grid lines X */}
      <line x1="100" y1="55" x2="100" y2="395" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="202" y1="55" x2="202" y2="395" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="304" y1="55" x2="304" y2="395" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="406" y1="55" x2="406" y2="395" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="508" y1="55" x2="508" y2="395" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="610" y1="55" x2="610" y2="395" stroke="#E5DED4" strokeWidth="0.5"/>

      {/* Grid lines Y */}
      <line x1="100" y1="395" x2="610" y2="395" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="100" y1="310" x2="610" y2="310" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="100" y1="225" x2="610" y2="225" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="100" y1="140" x2="610" y2="140" stroke="#E5DED4" strokeWidth="0.5"/>
      <line x1="100" y1="55" x2="610" y2="55" stroke="#E5DED4" strokeWidth="0.5"/>

      {/* X-axis labels */}
      <text x="100" y="412" textAnchor="middle" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="6">1</tspan></text>
      <text x="202" y="412" textAnchor="middle" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="6">2</tspan></text>
      <text x="304" y="412" textAnchor="middle" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="6">3</tspan></text>
      <text x="406" y="412" textAnchor="middle" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="6">4</tspan></text>
      <text x="508" y="412" textAnchor="middle" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="6">5</tspan></text>
      <text x="610" y="412" textAnchor="middle" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="6">6</tspan></text>
      <text x="355" y="432" textAnchor="middle" fill="#6C6860" fontSize="10" fontWeight="500" fontFamily="sans-serif">{'\u00b5m\u00b2 Electrode Geometric Surface Area'}</text>

      {/* Y-axis left labels */}
      <text x="92" y="399" textAnchor="end" fill="#8C8578" fontSize="8" fontFamily="sans-serif">1</text>
      <text x="92" y="314" textAnchor="end" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10</text>
      <text x="92" y="229" textAnchor="end" fill="#8C8578" fontSize="8" fontFamily="sans-serif">100</text>
      <text x="92" y="144" textAnchor="end" fill="#8C8578" fontSize="8" fontFamily="sans-serif">1000</text>
      <text x="92" y="59" textAnchor="end" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10000</text>
      <text x="22" y="225" textAnchor="middle" fill="#6C6860" fontSize="9" fontWeight="500" fontFamily="sans-serif" transform="rotate(-90, 22, 225)">{'\u00b5C/cm\u00b2/phase Max Safe Charge Density'}</text>

      {/* Y-axis right labels */}
      <text x="618" y="399" fill="#8C8578" fontSize="8" fontFamily="sans-serif">0.1</text>
      <text x="618" y="314" fill="#8C8578" fontSize="8" fontFamily="sans-serif">1</text>
      <text x="618" y="229" fill="#8C8578" fontSize="8" fontFamily="sans-serif">10</text>
      <text x="618" y="144" fill="#8C8578" fontSize="8" fontFamily="sans-serif">100</text>
      <text x="618" y="59" fill="#8C8578" fontSize="8" fontFamily="sans-serif">1000</text>
      <text x="720" y="225" textAnchor="middle" fill="#B8943E" fontSize="9" fontWeight="500" fontFamily="sans-serif" transform="rotate(90, 720, 225)">Shannon-Hartley Capacity (bits/s) [schematic]</text>

      {/* Safe/unsafe zones and Greenspon box */}
      <g clipPath="url(#ef-plotArea)">
        <polygon points="100,395 100,180 430,395" fill="url(#ef-safeZone)"/>
        <polygon points="100,180 430,395 610,395 610,55 100,55" fill="url(#ef-unsafeZone)"/>
        <rect x="150" y="240" width="200" height="130" rx="6" fill="#3D8B58" fillOpacity="0.06" stroke="#3D8B58" strokeWidth="1.2" strokeDasharray="6,3" strokeOpacity="0.4"/>
      </g>

      {/* Shannon 1992 boundary line (PtIr) */}
      <line x1="100" y1="180" x2="430" y2="395" stroke="#3D3A36" strokeWidth="2" strokeOpacity="0.7"/>
      <text x="220" y="270" fill="#3D3A36" fontSize="8" fontWeight="600" fontFamily="sans-serif" transform="rotate(-33, 220, 270)">Shannon 1992 (PtIr, k = 1.85)</text>

      {/* Safe/Unsafe labels */}
      <text x="140" y="370" fill="#3D8B58" fontSize="10" fontWeight="600" fillOpacity="0.6" fontFamily="sans-serif">SAFE</text>
      <text x="450" y="100" fill="#C4614E" fontSize="10" fontWeight="600" fillOpacity="0.5" fontFamily="sans-serif">TISSUE DAMAGE</text>

      {/* PtIr material point */}
      <circle cx="180" cy="240" r="4" fill="#6C6860" stroke="#6C6860" strokeWidth="1"/>
      <text x="190" y="237" fill="#3D3A36" fontSize="8" fontWeight="600" fontFamily="sans-serif">Platinum-Iridium</text>
      <text x="190" y="247" fill="#8C8578" fontSize="7" fontFamily="sans-serif">k = 1.85</text>

      {/* PEDOT:PSS line */}
      <line x1="100" y1="167" x2="445" y2="395" stroke="#4A7B8C" strokeWidth="1.8" strokeOpacity="0.8"/>
      <circle cx="220" cy="228" r="4" fill="#4A7B8C" stroke="#4A7B8C" strokeWidth="1"/>
      <text x="230" y="222" fill="#4A7B8C" fontSize="8" fontWeight="600" fontFamily="sans-serif">PEDOT:PSS</text>
      <text x="230" y="232" fill="#5A8B9C" fontSize="7" fontFamily="sans-serif">k = 2.0</text>

      {/* SIROF line */}
      <line x1="100" y1="158" x2="458" y2="395" stroke="#3D8B58" strokeWidth="1.8" strokeOpacity="0.8"/>
      <circle cx="260" cy="215" r="4" fill="#3D8B58" stroke="#3D8B58" strokeWidth="1"/>
      <text x="270" y="208" fill="#3D8B58" fontSize="8" fontWeight="600" fontFamily="sans-serif">SIROF</text>
      <text x="270" y="218" fill="#2D7048" fontSize="7" fontFamily="sans-serif">k = 2.1</text>

      {/* Shannon-Hartley capacity schematic */}
      <path d="M 130,360 C 200,320 300,260 400,210 C 480,175 550,150 600,135"
            fill="none" stroke="#B8943E" strokeWidth="1.8" strokeDasharray="8,5" strokeOpacity="0.7"/>
      <text x="575" y="128" fill="#B8943E" fontSize="7" fontWeight="500" fontStyle="italic" fontFamily="sans-serif">Shannon-Hartley</text>
      <text x="575" y="138" fill="#B8943E" fontSize="7" fontWeight="500" fontStyle="italic" fontFamily="sans-serif">capacity (schematic)</text>

      {/* Greenspon & Gaunt label */}
      <text x="168" y="257" fill="#3D8B58" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">{'Greenspon & Gaunt 2025'}</text>
      <text x="168" y="268" fill="#3D8B58" fontSize="7" fillOpacity="0.7" fontFamily="sans-serif">Safe operating parameters</text>
      <text x="168" y="279" fill="#3D8B58" fontSize="7" fillOpacity="0.7" fontFamily="sans-serif">(168M pulses, decade of use)</text>

      {/* THE GAP annotation */}
      <rect x="395" y="290" width="205" height="55" rx="5" fill="#F5F0E8" stroke="#C4614E" strokeWidth="0.8" strokeOpacity="0.5"/>
      <text x="405" y="305" fill="#C4614E" fontSize="8" fontWeight="700" fontFamily="sans-serif">THE GAP</text>
      <text x="405" y="317" fill="#A8483A" fontSize="7" fontFamily="sans-serif">No published translation from</text>
      <text x="405" y="328" fill="#A8483A" fontSize="7" fontFamily="sans-serif">charge-density limit to information</text>
      <text x="405" y="339" fill="#A8483A" fontSize="7" fontFamily="sans-serif">capacity for stimulation</text>

      {/* Right axis note */}
      <rect x="620" y="410" width="120" height="22" rx="3" fill="#FAF7F2" stroke="#B8943E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="626" y="420" fill="#B8943E" fontSize="6.5" fontStyle="italic" fontFamily="sans-serif">Right axis: Not yet</text>
      <text x="626" y="429" fill="#B8943E" fontSize="6.5" fontStyle="italic" fontFamily="sans-serif">empirically derived</text>

      {/* Legend */}
      <rect x="105" y="62" width="130" height="80" rx="4" fill="#F0EBE3" stroke="#D4CCC0" strokeWidth="0.5"/>
      <text x="115" y="76" fill="#3D3A36" fontSize="9" fontWeight="600" fontFamily="sans-serif">Materials</text>
      <line x1="115" y1="86" x2="145" y2="86" stroke="#6C6860" strokeWidth="2"/>
      <text x="150" y="89" fill="#3D3A36" fontSize="7.5" fontFamily="sans-serif">PtIr (k = 1.85)</text>
      <line x1="115" y1="100" x2="145" y2="100" stroke="#4A7B8C" strokeWidth="2"/>
      <text x="150" y="103" fill="#4A7B8C" fontSize="7.5" fontFamily="sans-serif">PEDOT:PSS (k = 2.0)</text>
      <line x1="115" y1="114" x2="145" y2="114" stroke="#3D8B58" strokeWidth="2"/>
      <text x="150" y="117" fill="#3D8B58" fontSize="7.5" fontFamily="sans-serif">SIROF (k = 2.1)</text>
      <line x1="115" y1="128" x2="145" y2="128" stroke="#B8943E" strokeWidth="2" strokeDasharray="5,3"/>
      <text x="150" y="131" fill="#B8943E" fontSize="7.5" fontFamily="sans-serif">Capacity (schematic)</text>

      <text x="15" y="490" fill="#8C8578" fontSize="8" fontFamily="sans-serif">Fig. 3 | PhiFabric</text>
    </svg>
  );
}
