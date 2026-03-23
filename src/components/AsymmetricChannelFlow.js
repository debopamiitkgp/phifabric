'use client';
export default function AsymmetricChannelFlow() {
  return (
    <svg viewBox="0 0 800 500" style={{ width: '100%', display: 'block', background: '#1a1a2e' }}>
      <defs>
        <linearGradient id="acf-flowRed" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#e63946" stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="acf-flowOrange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4a261" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#e76f51" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="acf-flowYellow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e9c46a" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#f4a261" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="acf-flowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a86ff" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#48cae4" stopOpacity="0.8"/>
        </linearGradient>
        <filter id="acf-glow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="acf-softGlow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Title */}
      <text x="400" y="32" textAnchor="middle" fill="#e0e0e0" fontSize="16" fontWeight="700" letterSpacing="0.5" fontFamily="sans-serif">The Asymmetric Channel: Neural Information Flow</text>
      <text x="400" y="50" textAnchor="middle" fill="#888" fontSize="10" fontFamily="sans-serif">Bandwidth compression from sensory input to conscious output</text>

      {/* Stage labels */}
      <text x="80" y="78" textAnchor="middle" fill="#aaa" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">SENSORY INPUT</text>
      <text x="310" y="78" textAnchor="middle" fill="#aaa" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">COMPRESSION</text>
      <text x="510" y="78" textAnchor="middle" fill="#aaa" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">BOTTLENECK</text>
      <text x="680" y="78" textAnchor="middle" fill="#aaa" fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">MOTOR OUTPUT</text>

      {/* Vertical stage dividers */}
      <line x1="185" y1="85" x2="185" y2="400" stroke="#333" strokeWidth="1" strokeDasharray="3,6"/>
      <line x1="420" y1="85" x2="420" y2="400" stroke="#333" strokeWidth="1" strokeDasharray="3,6"/>
      <line x1="595" y1="85" x2="595" y2="400" stroke="#333" strokeWidth="1" strokeDasharray="3,6"/>

      {/* Photoreceptor flow */}
      <path d="M 10,130 C 100,130 120,200 185,200 C 250,200 300,215 350,230 C 400,245 430,250 460,250 C 480,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowRed)" strokeWidth="80" strokeOpacity="0.3" filter="url(#acf-softGlow)"/>
      <path d="M 10,130 C 100,130 120,200 185,200 C 250,200 300,215 350,230 C 400,245 430,250 460,250 C 480,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowRed)" strokeWidth="55" strokeOpacity="0.5"/>
      <path d="M 510,250 C 530,250 545,250 560,250" fill="none" stroke="#3a86ff" strokeWidth="3" strokeOpacity="0.7" filter="url(#acf-glow)"/>

      {/* Somatosensory flow */}
      <path d="M 10,280 C 80,280 130,270 185,265 C 240,260 290,255 340,252 C 380,250 420,250 460,250 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowYellow)" strokeWidth="28" strokeOpacity="0.35" filter="url(#acf-softGlow)"/>
      <path d="M 10,280 C 80,280 130,270 185,265 C 240,260 290,255 340,252 C 380,250 420,250 460,250 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowYellow)" strokeWidth="18" strokeOpacity="0.55"/>

      {/* Auditory flow */}
      <path d="M 10,360 C 80,360 130,320 185,300 C 240,280 290,265 340,258 C 380,254 420,252 460,251 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowOrange)" strokeWidth="12" strokeOpacity="0.35" filter="url(#acf-softGlow)"/>
      <path d="M 10,360 C 80,360 130,320 185,300 C 240,280 290,265 340,258 C 380,254 420,252 460,251 C 490,250 500,250 510,250"
            fill="none" stroke="url(#acf-flowOrange)" strokeWidth="7" strokeOpacity="0.6"/>

      {/* Bottleneck */}
      <path d="M 510,250 C 540,250 570,250 595,250" fill="none" stroke="#48cae4" strokeWidth="3" strokeOpacity="0.9" filter="url(#acf-glow)"/>
      <ellipse cx="510" cy="250" rx="6" ry="35" fill="none" stroke="#48cae4" strokeWidth="1" strokeOpacity="0.4"/>
      <text x="510" y="300" textAnchor="middle" fill="#48cae4" fontSize="9" fontWeight="600" fontFamily="sans-serif">~10 bits/s</text>
      <text x="510" y="312" textAnchor="middle" fill="#6c8db5" fontSize="7" fontFamily="sans-serif">conscious</text>

      {/* Output flows */}
      <path d="M 595,250 C 620,245 650,235 690,225" fill="none" stroke="url(#acf-flowBlue)" strokeWidth="2.5" strokeOpacity="0.8" filter="url(#acf-glow)"/>
      <path d="M 595,250 C 620,250 650,250 690,250" fill="none" stroke="url(#acf-flowBlue)" strokeWidth="2.5" strokeOpacity="0.8" filter="url(#acf-glow)"/>
      <path d="M 595,250 C 620,255 650,265 690,275" fill="none" stroke="url(#acf-flowBlue)" strokeWidth="2.5" strokeOpacity="0.8" filter="url(#acf-glow)"/>

      {/* Output labels */}
      <text x="695" y="228" fill="#48cae4" fontSize="8" fontWeight="500" fontFamily="sans-serif">Speech</text>
      <text x="695" y="253" fill="#48cae4" fontSize="8" fontWeight="500" fontFamily="sans-serif">Typing</text>
      <text x="695" y="278" fill="#48cae4" fontSize="8" fontWeight="500" fontFamily="sans-serif">Gesture</text>

      {/* Input label boxes */}
      <rect x="12" y="105" width="155" height="48" rx="3" fill="#2a1a1a" stroke="#ff6b35" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="20" y="121" fill="#ff6b35" fontSize="10" fontWeight="600" fontFamily="sans-serif">Photoreceptors</text>
      <text x="20" y="135" fill="#ff9f7f" fontSize="18" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="11">9</tspan></text>
      <text x="82" y="135" fill="#cc7755" fontSize="9" fontFamily="sans-serif"> bits/s</text>
      <text x="20" y="147" fill="#886655" fontSize="7" fontFamily="sans-serif">~1 billion bits/s raw capture</text>

      <rect x="12" y="255" width="155" height="48" rx="3" fill="#2a2a1a" stroke="#e9c46a" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="20" y="271" fill="#e9c46a" fontSize="10" fontWeight="600" fontFamily="sans-serif">Somatosensory</text>
      <text x="20" y="285" fill="#f0d080" fontSize="18" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="11">6</tspan></text>
      <text x="82" y="285" fill="#b0a060" fontSize="9" fontFamily="sans-serif"> bits/s</text>
      <text x="20" y="297" fill="#887755" fontSize="7" fontFamily="sans-serif">Touch, proprioception, temp</text>

      <rect x="12" y="335" width="155" height="48" rx="3" fill="#2a1f1a" stroke="#f4a261" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="20" y="351" fill="#f4a261" fontSize="10" fontWeight="600" fontFamily="sans-serif">Auditory nerve</text>
      <text x="20" y="365" fill="#f0b878" fontSize="16" fontWeight="700" fontFamily="sans-serif">~10<tspan baselineShift="super" fontSize="10">4</tspan></text>
      <text x="90" y="365" fill="#b08850" fontSize="9" fontFamily="sans-serif"> bits/s</text>
      <text x="20" y="377" fill="#887755" fontSize="7" fontFamily="sans-serif">Cochlear nerve fibers</text>

      {/* Compression stage labels */}
      <rect x="200" y="165" width="130" height="30" rx="3" fill="#1f1a2e" stroke="#8338ec" strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="210" y="178" fill="#a070d0" fontSize="8" fontWeight="500" fontFamily="sans-serif">Optic nerve</text>
      <text x="210" y="189" fill="#8855bb" fontSize="7" fontFamily="sans-serif">{'8.75 \u00d7 10\u2075 bits/s'}</text>

      <rect x="310" y="200" width="100" height="30" rx="3" fill="#1f1a2e" stroke="#8338ec" strokeWidth="0.5" strokeOpacity="0.3"/>
      <text x="318" y="213" fill="#a070d0" fontSize="8" fontWeight="500" fontFamily="sans-serif">Thalamic relay</text>
      <text x="318" y="224" fill="#8855bb" fontSize="7" fontFamily="sans-serif">further compression</text>

      <rect x="395" y="215" width="105" height="30" rx="3" fill="#1f1a2e" stroke="#8338ec" strokeWidth="0.5" strokeOpacity="0.3"/>
      <text x="403" y="228" fill="#a070d0" fontSize="8" fontWeight="500" fontFamily="sans-serif">Cortical integration</text>
      <text x="403" y="239" fill="#8855bb" fontSize="7" fontFamily="sans-serif">{'binding & selection'}</text>

      {/* BCI benchmarks box */}
      <rect x="610" y="330" width="175" height="100" rx="5" fill="#16213e" stroke="#3a86ff" strokeWidth="0.8" strokeOpacity="0.5"/>
      <text x="620" y="348" fill="#5eaeff" fontSize="9" fontWeight="700" letterSpacing="0.5" fontFamily="sans-serif">BCI BENCHMARKS</text>
      <line x1="620" y1="354" x2="775" y2="354" stroke="#3a86ff" strokeWidth="0.5" strokeOpacity="0.3"/>

      <circle cx="625" cy="370" r="3" fill="#ff6b6b"/>
      <text x="634" y="374" fill="#ff9999" fontSize="8" fontWeight="500" fontFamily="sans-serif">Early EEG: 0.2-0.4 bits/s</text>

      <circle cx="625" cy="392" r="3" fill="#51cf66"/>
      <text x="634" y="396" fill="#8ce99a" fontSize="8" fontWeight="500" fontFamily="sans-serif">Neuralink N1: 8-9 bits/s</text>

      <circle cx="625" cy="414" r="3" fill="#ffd43b"/>
      <text x="634" y="418" fill="#ffe066" fontSize="8" fontWeight="500" fontFamily="sans-serif">BrainGate: ~9 bits/s</text>

      {/* Connecting lines */}
      <line x1="610" y1="370" x2="595" y2="260" stroke="#ff6b6b" strokeWidth="0.8" strokeDasharray="3,3" strokeOpacity="0.5"/>
      <line x1="610" y1="392" x2="595" y2="252" stroke="#51cf66" strokeWidth="0.8" strokeDasharray="3,3" strokeOpacity="0.5"/>
      <line x1="610" y1="414" x2="595" y2="254" stroke="#ffd43b" strokeWidth="0.8" strokeDasharray="3,3" strokeOpacity="0.5"/>

      {/* Compression ratio */}
      <rect x="220" y="410" width="220" height="35" rx="4" fill="#1a1a2e" stroke="#555" strokeWidth="0.5"/>
      <text x="230" y="425" fill="#ccc" fontSize="9" fontWeight="500" fontFamily="sans-serif">{'Compression ratio:  '}</text>
      <text x="355" y="425" fill="#ff6b35" fontSize="11" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="8">9</tspan></text>
      <text x="383" y="425" fill="#888" fontSize="9" fontFamily="sans-serif"> : </text>
      <text x="393" y="425" fill="#48cae4" fontSize="11" fontWeight="700" fontFamily="sans-serif">10<tspan baselineShift="super" fontSize="8">1</tspan></text>
      <text x="230" y="439" fill="#777" fontSize="8" fontFamily="sans-serif">~100 million-fold reduction in bandwidth</text>

      <text x="15" y="490" fill="#555" fontSize="8" fontFamily="sans-serif">Fig. 1 | PhiFabric</text>
    </svg>
  );
}
