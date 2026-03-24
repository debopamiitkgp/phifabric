'use client';
export default function AsymmetricChannelFlow() {
  return (
    <svg viewBox="0 0 800 500" style={{ width: '100%', display: 'block', background: '#FAF7F2' }}>
      <defs>
        <linearGradient id="acf-flowRed" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4614E" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#A8483A" stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="acf-flowOrange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C87A3E" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#A86038" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="acf-flowYellow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8943E" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#C87A3E" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="acf-flowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A7B8C" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#5A8B9C" stopOpacity="0.8"/>
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="400" y="32" textAnchor="middle" fill="#2D2A26" fontSize="16" fontWeight="700" letterSpacing="0.5" fontFamily="sans-serif">The Asymmetric Channel: Neural Information Flow</text>
      <text x="400" y="50" textAnchor="middle" fill="#8C8578" fontSize="10" fontFamily="sans-serif">Bandwidth compression from sensory input to conscious output</text>

      {/* Stage labels */}
      <text x="80" y="78" textAnchor="middle" fill="#6C6860" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">SENSORY INPUT</text>
      <text x="310" y="78" textAnchor="middle" fill="#6C6860" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">COMPRESSION</text>
      <text x="510" y="78" textAnchor="middle" fill="#6C6860" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">BOTTLENECK</text>
      <text x="680" y="78" textAnchor="middle" fill="#6C6860" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">MOTOR OUTPUT</text>

      {/* Vertical stage dividers */}
      <line x1="185" y1="85" x2="185" y2="400" stroke="#D4CCC0" strokeWidth="1" strokeDasharray="3,6"/>
      <line x1="420" y1="85" x2="420" y2="400" stroke="#D4CCC0" strokeWidth="1" strokeDasharray="3,6"/>
      <line x1="595" y1="85" x2="595" y2="400" stroke="#D4CCC0" strokeWidth="1" strokeDasharray="3,6"/>

      {/* Photoreceptor flow */}
      <path d="M 10,130 C 100,130 120,200 185,200 C 250,200 300,215 350,230 C 400,245 430,250 460,250 C 480,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowRed)" strokeWidth="80" strokeOpacity="0.2"/>
      <path d="M 10,130 C 100,130 120,200 185,200 C 250,200 300,215 350,230 C 400,245 430,250 460,250 C 480,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowRed)" strokeWidth="55" strokeOpacity="0.35"/>
      <path d="M 510,250 C 530,250 545,250 560,250" fill="none" stroke="#4A7B8C" strokeWidth="3" strokeOpacity="0.7"/>

      {/* Somatosensory flow */}
      <path d="M 10,280 C 80,280 130,270 185,265 C 240,260 290,255 340,252 C 380,250 420,250 460,250 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowYellow)" strokeWidth="28" strokeOpacity="0.25"/>
      <path d="M 10,280 C 80,280 130,270 185,265 C 240,260 290,255 340,252 C 380,250 420,250 460,250 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowYellow)" strokeWidth="18" strokeOpacity="0.4"/>

      {/* Auditory flow */}
      <path d="M 10,360 C 80,360 130,320 185,300 C 240,280 290,265 340,258 C 380,254 420,252 460,251 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowOrange)" strokeWidth="12" strokeOpacity="0.25"/>
      <path d="M 10,360 C 80,360 130,320 185,300 C 240,280 290,265 340,258 C 380,254 420,252 460,251 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowOrange)" strokeWidth="7" strokeOpacity="0.45"/>

      {/* Bottleneck */}
      <path d="M 510,250 C 540,250 570,250 595,250" fill="none" stroke="#4A7B8C" strokeWidth="3" strokeOpacity="0.9"/>
      <ellipse cx="510" cy="250" rx="6" ry="35" fill="none" stroke="#4A7B8C" strokeWidth="1" strokeOpacity="0.4"/>
      <text x="510" y="300" textAnchor="middle" fill="#4A7B8C" fontSize="9" fontWeight="600" fontFamily="sans-serif">~10 bits/s</text>
      <text x="510" y="312" textAnchor="middle" fill="#5A8B9C" fontSize="7" fontFamily="sans-serif">conscious</text>

      {/* Output flows */}
      <path d="M 595,250 C 620,245 650,235 690,225" fill="none" stroke="url(#acf-flowBlue)" strokeWidth="2.5" strokeOpacity="0.8"/>
      <path d="M 595,250 C 620,250 650,250 690,250" fill="none" stroke="url(#acf-flowBlue)" strokeWidth="2.5" strokeOpacity="0.8"/>
      <path d="M 595,250 C 620,255 650,265 690,275" fill="none" stroke="url(#acf-flowBlue)" strokeWidth="2.5" strokeOpacity="0.8"/>

      {/* Output labels */}
      <text x="695" y="228" fill="#4A7B8C" fontSize="8" fontWeight="500" fontFamily="sans-serif">Speech</text>
      <text x="695" y="253" fill="#4A7B8C" fontSize="8" fontWeight="500" fontFamily="sans-serif">Typing</text>
      <text x="695" y="278" fill="#4A7B8C" fontSize="8" fontWeight="500" fontFamily="sans-serif">Gesture</text>

      {/* Input label boxes */}
      <rect x="12" y="105" width="155" height="48" rx="3" fill="#F5F0E8" stroke="#C4614E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="20" y="121" fill="#C4614E" fontSize="10" fontWeight="600" fontFamily="sans-serif">Photoreceptors</text>
      <text x="20" y="135" fill="#A8483A" fontSize="18" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="11">9</tspan></text>
      <text x="82" y="135" fill="#8C8578" fontSize="9" fontFamily="sans-serif"> bits/s</text>
      <text x="20" y="147" fill="#8C8578" fontSize="7" fontFamily="sans-serif">~1 billion bits/s raw capture</text>

      <rect x="12" y="255" width="155" height="48" rx="3" fill="#F5F0E8" stroke="#B8943E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="20" y="271" fill="#B8943E" fontSize="10" fontWeight="600" fontFamily="sans-serif">Somatosensory</text>
      <text x="20" y="285" fill="#9A7A30" fontSize="18" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="11">6</tspan></text>
      <text x="82" y="285" fill="#8C8578" fontSize="9" fontFamily="sans-serif"> bits/s</text>
      <text x="20" y="297" fill="#8C8578" fontSize="7" fontFamily="sans-serif">Touch, proprioception, temp</text>

      <rect x="12" y="335" width="155" height="48" rx="3" fill="#F5F0E8" stroke="#C87A3E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="20" y="351" fill="#C87A3E" fontSize="10" fontWeight="600" fontFamily="sans-serif">Auditory nerve</text>
      <text x="20" y="365" fill="#A86038" fontSize="16" fontWeight="700" fontFamily="sans-serif">~10<tspan baselineShift="super" fontSize="10">4</tspan></text>
      <text x="90" y="365" fill="#8C8578" fontSize="9" fontFamily="sans-serif"> bits/s</text>
      <text x="20" y="377" fill="#8C8578" fontSize="7" fontFamily="sans-serif">Cochlear nerve fibers</text>

      {/* Compression stage labels */}
      <rect x="200" y="165" width="130" height="30" rx="3" fill="#EDE8E0" stroke="#7B5EA7" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="210" y="178" fill="#7B5EA7" fontSize="8" fontWeight="500" fontFamily="sans-serif">Optic nerve</text>
      <text x="210" y="189" fill="#6B4E97" fontSize="7" fontFamily="sans-serif">{'8.75 \u00d7 10\u2075 bits/s'}</text>

      <rect x="310" y="200" width="100" height="30" rx="3" fill="#EDE8E0" stroke="#7B5EA7" strokeWidth="0.5" strokeOpacity="0.3"/>
      <text x="318" y="213" fill="#7B5EA7" fontSize="8" fontWeight="500" fontFamily="sans-serif">Thalamic relay</text>
      <text x="318" y="224" fill="#6B4E97" fontSize="7" fontFamily="sans-serif">further compression</text>

      <rect x="395" y="215" width="105" height="30" rx="3" fill="#EDE8E0" stroke="#7B5EA7" strokeWidth="0.5" strokeOpacity="0.3"/>
      <text x="403" y="228" fill="#7B5EA7" fontSize="8" fontWeight="500" fontFamily="sans-serif">Cortical integration</text>
      <text x="403" y="239" fill="#6B4E97" fontSize="7" fontFamily="sans-serif">{'binding & selection'}</text>

      {/* BCI benchmarks box */}
      <rect x="610" y="330" width="175" height="100" rx="5" fill="#EDE8E0" stroke="#4A7B8C" strokeWidth="0.8" strokeOpacity="0.5"/>
      <text x="620" y="348" fill="#4A7B8C" fontSize="9" fontWeight="700" letterSpacing="0.5" fontFamily="sans-serif">BCI BENCHMARKS</text>
      <line x1="620" y1="354" x2="775" y2="354" stroke="#4A7B8C" strokeWidth="0.5" strokeOpacity="0.3"/>

      <circle cx="625" cy="370" r="3" fill="#C4614E"/>
      <text x="634" y="374" fill="#A8483A" fontSize="8" fontWeight="500" fontFamily="sans-serif">Early EEG: 0.2-0.4 bits/s</text>

      <circle cx="625" cy="392" r="3" fill="#3D8B58"/>
      <text x="634" y="396" fill="#3D8B58" fontSize="8" fontWeight="500" fontFamily="sans-serif">Neuralink N1: 8-9 bits/s</text>

      <circle cx="625" cy="414" r="3" fill="#B8943E"/>
      <text x="634" y="418" fill="#9A7A30" fontSize="8" fontWeight="500" fontFamily="sans-serif">BrainGate: ~9 bits/s</text>

      {/* Connecting lines */}
      <line x1="610" y1="370" x2="595" y2="260" stroke="#C4614E" strokeWidth="0.8" strokeDasharray="3,3" strokeOpacity="0.5"/>
      <line x1="610" y1="392" x2="595" y2="252" stroke="#3D8B58" strokeWidth="0.8" strokeDasharray="3,3" strokeOpacity="0.5"/>
      <line x1="610" y1="414" x2="595" y2="254" stroke="#B8943E" strokeWidth="0.8" strokeDasharray="3,3" strokeOpacity="0.5"/>

      {/* Compression ratio */}
      <rect x="220" y="410" width="220" height="35" rx="4" fill="#F0EBE3" stroke="#D4CCC0" strokeWidth="0.5"/>
      <text x="230" y="425" fill="#3D3A36" fontSize="9" fontWeight="500" fontFamily="sans-serif">{'Compression ratio:  '}</text>
      <text x="355" y="425" fill="#C4614E" fontSize="11" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="8">9</tspan></text>
      <text x="383" y="425" fill="#8C8578" fontSize="9" fontFamily="sans-serif"> : </text>
      <text x="393" y="425" fill="#4A7B8C" fontSize="11" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="8">1</tspan></text>
      <text x="230" y="439" fill="#8C8578" fontSize="8" fontFamily="sans-serif">~100 million-fold reduction in bandwidth</text>

      <text x="15" y="490" fill="#8C8578" fontSize="8" fontFamily="sans-serif">Fig. 1 | PhiFabric</text>
    </svg>
  );
}
