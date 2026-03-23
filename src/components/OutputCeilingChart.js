'use client';
export default function OutputCeilingChart() {
  return (
    <svg viewBox="0 0 700 450" style={{ width: '100%', display: 'block', background: '#1a1a2e' }}>
      <defs>
        <filter id="occ-glow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="occ-pointGlow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="occ-plotClip">
          <rect x="90" y="55" width="530" height="330"/>
        </clipPath>
      </defs>

      {/* Title */}
      <text x="350" y="28" textAnchor="middle" fill="#e0e0e0" fontSize="15" fontWeight="700" letterSpacing="0.3" fontFamily="sans-serif">Output Ceiling Convergence</text>
      <text x="350" y="44" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">BCI information transfer rates by modality (1995–2026)</text>

      {/* Plot area */}
      <rect x="90" y="55" width="530" height="330" fill="#12122a" rx="2" stroke="#333" strokeWidth="0.5"/>

      {/* Horizontal grid lines */}
      <line x1="90" y1="385" x2="620" y2="385" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="90" y1="302.5" x2="620" y2="302.5" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="90" y1="220" x2="620" y2="220" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="90" y1="137.5" x2="620" y2="137.5" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="90" y1="55" x2="620" y2="55" stroke="#2a2a45" strokeWidth="0.5"/>

      {/* Minor grid lines */}
      <line x1="90" y1="357.7" x2="620" y2="357.7" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="345.3" x2="620" y2="345.3" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="336" x2="620" y2="336" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="275.2" x2="620" y2="275.2" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="262.8" x2="620" y2="262.8" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="253.5" x2="620" y2="253.5" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="246" x2="620" y2="246" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="192.7" x2="620" y2="192.7" stroke="#222240" strokeWidth="0.3"/>
      <line x1="90" y1="180.3" x2="620" y2="180.3" stroke="#222240" strokeWidth="0.3"/>

      {/* Y-axis labels */}
      <text x="82" y="389" textAnchor="end" fill="#888" fontSize="9" fontFamily="sans-serif">0.1</text>
      <text x="82" y="306.5" textAnchor="end" fill="#888" fontSize="9" fontFamily="sans-serif">1</text>
      <text x="82" y="224" textAnchor="end" fill="#888" fontSize="9" fontFamily="sans-serif">10</text>
      <text x="82" y="141.5" textAnchor="end" fill="#888" fontSize="9" fontFamily="sans-serif">100</text>
      <text x="82" y="59" textAnchor="end" fill="#888" fontSize="9" fontFamily="sans-serif">1000</text>

      {/* Y-axis title */}
      <text x="20" y="220" textAnchor="middle" fill="#aaa" fontSize="10" fontWeight="500" fontFamily="sans-serif" transform="rotate(-90, 20, 220)">Information Transfer Rate (bits/s)</text>

      {/* Vertical grid lines every 5 years */}
      <line x1="175.5" y1="55" x2="175.5" y2="385" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="261" y1="55" x2="261" y2="385" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="346.5" y1="55" x2="346.5" y2="385" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="432" y1="55" x2="432" y2="385" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="517.5" y1="55" x2="517.5" y2="385" stroke="#2a2a45" strokeWidth="0.5"/>
      <line x1="603" y1="55" x2="603" y2="385" stroke="#2a2a45" strokeWidth="0.5"/>

      {/* X-axis labels */}
      <text x="90" y="402" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">1995</text>
      <text x="175.5" y="402" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">2000</text>
      <text x="261" y="402" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">2005</text>
      <text x="346.5" y="402" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">2010</text>
      <text x="432" y="402" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">2015</text>
      <text x="517.5" y="402" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">2020</text>
      <text x="603" y="402" textAnchor="middle" fill="#888" fontSize="9" fontFamily="sans-serif">2025</text>

      {/* X-axis title */}
      <text x="355" y="420" textAnchor="middle" fill="#aaa" fontSize="10" fontWeight="500" fontFamily="sans-serif">Year</text>

      {/* Propositional ceiling at 10 bits/s */}
      <line x1="90" y1="220" x2="620" y2="220" stroke="#ff6b6b" strokeWidth="1.5" strokeDasharray="8,4" strokeOpacity="0.8"/>
      <rect x="400" y="207" width="218" height="14" rx="2" fill="#1a1a2e" fillOpacity="0.9"/>
      <text x="405" y="217" fill="#ff6b6b" fontSize="8" fontWeight="600" fontFamily="sans-serif">{'Propositional ceiling (Zheng & Meister 2025)'}</text>

      {/* Continuous motor upper bound */}
      <line x1="90" y1="170.3" x2="620" y2="170.3" stroke="#ffd43b" strokeWidth="1" strokeDasharray="4,6" strokeOpacity="0.5"/>
      <rect x="300" y="157" width="245" height="14" rx="2" fill="#1a1a2e" fillOpacity="0.9"/>
      <text x="305" y="167" fill="#ffd43b" fontSize="7.5" fontWeight="500" fontFamily="sans-serif">Continuous motor estimate ~40 bits/s (non-propositional; see Sidebar 1)</text>

      {/* Able-bodied baseline band */}
      <rect x="90" y="220" width="530" height="8" fill="#48cae4" fillOpacity="0.08" clipPath="url(#occ-plotClip)"/>
      <rect x="93" y="222" width="100" height="10" rx="2" fill="#1a1a2e" fillOpacity="0.8"/>
      <text x="96" y="230" fill="#48cae4" fontSize="7" fillOpacity="0.6" fontFamily="sans-serif">Keyboard/mouse baseline</text>

      {/* EEG-based (Blue circles) */}
      <circle cx="158.4" cy="345.6" r="6" fill="#4dabf7" fillOpacity="0.9" stroke="#4dabf7" strokeWidth="1" filter="url(#occ-pointGlow)"/>
      <circle cx="261" cy="310.5" r="6" fill="#4dabf7" fillOpacity="0.9" stroke="#4dabf7" strokeWidth="1" filter="url(#occ-pointGlow)"/>
      <circle cx="346.5" cy="288" r="6" fill="#4dabf7" fillOpacity="0.9" stroke="#4dabf7" strokeWidth="1" filter="url(#occ-pointGlow)"/>

      {/* ECoG-based (Green diamond) */}
      <rect x="427" y="258.2" width="10" height="10" rx="1" fill="#51cf66" fillOpacity="0.9" stroke="#51cf66" strokeWidth="1" transform="rotate(45, 432, 263.2)" filter="url(#occ-pointGlow)"/>

      {/* Intracortical (Red squares) */}
      <rect x="374.7" y="271.7" width="12" height="12" rx="1" fill="#ff6b6b" fillOpacity="0.9" stroke="#ff6b6b" strokeWidth="1" filter="url(#occ-pointGlow)"/>
      <rect x="528.6" y="232.3" width="12" height="12" rx="1" fill="#ff6b6b" fillOpacity="0.9" stroke="#ff6b6b" strokeWidth="1" filter="url(#occ-pointGlow)"/>
      <rect x="562.8" y="222" width="12" height="12" rx="1" fill="#ff6b6b" fillOpacity="0.9" stroke="#ff6b6b" strokeWidth="1" filter="url(#occ-pointGlow)"/>
      <rect x="579.9" y="218" width="12" height="12" rx="1" fill="#ff6b6b" fillOpacity="0.9" stroke="#ff6b6b" strokeWidth="1" filter="url(#occ-pointGlow)"/>
      <rect x="611" y="219.5" width="12" height="12" rx="1" fill="#ff6b6b" fillOpacity="0.9" stroke="#ff6b6b" strokeWidth="1" filter="url(#occ-pointGlow)"/>

      {/* Paradromics preclinical */}
      <polygon points="603,105.7 610,119.7 596,119.7" fill="#ffa94d" fillOpacity="0.9" stroke="#ffa94d" strokeWidth="1" filter="url(#occ-pointGlow)"/>

      {/* Convergence curve */}
      <path d="M 158,346 C 200,340 250,315 300,290 C 350,270 400,255 450,240 C 500,230 550,225 620,222"
            fill="none" stroke="#ff6b6b" strokeWidth="1.5" strokeDasharray="2,4" strokeOpacity="0.4"/>

      {/* Point labels */}
      <text x="145" y="340" fill="#4dabf7" fontSize="7" textAnchor="end" fontFamily="sans-serif">P300 speller</text>
      <text x="261" y="304" fill="#4dabf7" fontSize="7" textAnchor="middle" fontFamily="sans-serif">SSVEP</text>
      <text x="370" y="271" fill="#ff6b6b" fontSize="7" textAnchor="end" fontFamily="sans-serif">BrainGate cursor</text>
      <text x="540" y="228" fill="#ff6b6b" fontSize="7" textAnchor="end" fontFamily="sans-serif">Willett handwriting</text>
      <text x="559" y="218" fill="#ff6b6b" fontSize="7" textAnchor="end" fontFamily="sans-serif">Speech</text>
      <text x="580" y="214" fill="#ff6b6b" fontSize="6.5" textAnchor="start" fontFamily="sans-serif">N1</text>

      {/* Paradromics annotation */}
      <line x1="603" y1="120" x2="560" y2="98" stroke="#ffa94d" strokeWidth="0.8" strokeOpacity="0.5"/>
      <rect x="410" y="86" width="155" height="22" rx="3" fill="#2a2010" stroke="#ffa94d" strokeWidth="0.5" strokeOpacity="0.5"/>
      <text x="416" y="96" fill="#ffa94d" fontSize="7" fontWeight="600" fontFamily="sans-serif">Paradromics 200 bps (preclinical)</text>
      <text x="416" y="105" fill="#cc8833" fontSize="6" fontFamily="sans-serif">Tone-decoding, not propositional</text>

      {/* Legend */}
      <rect x="95" y="60" width="145" height="85" rx="4" fill="#12122a" stroke="#444" strokeWidth="0.5"/>
      <text x="105" y="74" fill="#ccc" fontSize="9" fontWeight="600" fontFamily="sans-serif">Modality</text>
      <circle cx="108" cy="85" r="4" fill="#4dabf7"/>
      <text x="118" y="88" fill="#4dabf7" fontSize="8" fontFamily="sans-serif">EEG-based</text>
      <rect x="103" y="96" width="9" height="9" rx="1" fill="#51cf66" transform="rotate(45, 107.5, 100.5)"/>
      <text x="118" y="104" fill="#51cf66" fontSize="8" fontFamily="sans-serif">ECoG-based</text>
      <rect x="103.5" y="112.5" width="9" height="9" rx="1" fill="#ff6b6b"/>
      <text x="118" y="120" fill="#ff6b6b" fontSize="8" fontFamily="sans-serif">Intracortical</text>
      <polygon points="108,129 112,137 104,137" fill="#ffa94d"/>
      <text x="118" y="136" fill="#ffa94d" fontSize="8" fontFamily="sans-serif">Preclinical</text>

      <text x="15" y="443" fill="#555" fontSize="8" fontFamily="sans-serif">Fig. 2 | PhiFabric</text>
    </svg>
  );
}
