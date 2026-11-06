import type { ProjectArtworkType } from "../project-data";

interface ProjectArtworkProps {
  type: ProjectArtworkType;
  title: string;
}

function MicrogreenArtwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 360"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="micro-bg" x1="30" y1="0" x2="610" y2="360">
          <stop stopColor="#0E2630" />
          <stop offset="1" stopColor="#0A1120" />
        </linearGradient>
        <linearGradient id="micro-leaf" x1="300" y1="110" x2="390" y2="220">
          <stop stopColor="#A5F3C7" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#micro-bg)" />
      <circle cx="488" cy="72" r="115" fill="#22D3EE" fillOpacity=".08" />
      <path d="M0 282H640" stroke="#67E8F9" strokeOpacity=".12" />
      <rect x="131" y="181" width="378" height="117" rx="18" fill="#111E2C" stroke="#67E8F9" strokeOpacity=".22" />
      <path d="M151 201H489" stroke="#67E8F9" strokeOpacity=".13" />
      <path d="M161 232C213 215 246 217 299 232C351 247 411 247 479 227V278H161V232Z" fill="#15352E" />
      <path d="M320 217V131" stroke="#7DD3A7" strokeWidth="4" strokeLinecap="round" />
      <path d="M320 178C291 177 271 159 274 137C299 138 317 151 320 178Z" fill="url(#micro-leaf)" />
      <path d="M321 164C323 139 342 122 365 123C367 147 352 164 321 164Z" fill="url(#micro-leaf)" />
      <path d="M285 207C264 196 252 179 253 162C274 165 287 181 292 209" fill="#7DD3A7" fillOpacity=".8" />
      <path d="M355 208C372 190 389 184 406 188C398 208 381 219 355 218" fill="#67E8F9" fillOpacity=".65" />
      <rect x="177" y="300" width="30" height="8" rx="4" fill="#67E8F9" fillOpacity=".35" />
      <rect x="433" y="300" width="30" height="8" rx="4" fill="#67E8F9" fillOpacity=".35" />
      <circle cx="169" cy="108" r="3" fill="#A5F3FC" fillOpacity=".8" />
      <circle cx="476" cy="142" r="2" fill="#A5F3FC" fillOpacity=".7" />
      <circle cx="534" cy="229" r="2" fill="#A5F3FC" fillOpacity=".6" />
      <path d="M100 121H170M100 131H145" stroke="#67E8F9" strokeOpacity=".25" strokeLinecap="round" />
    </svg>
  );
}

function SpaceShooterArtwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 360"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="space-bg" x1="75" y1="0" x2="570" y2="360">
          <stop stopColor="#161A3A" />
          <stop offset="1" stopColor="#090D1A" />
        </linearGradient>
        <linearGradient id="ship-fill" x1="319" y1="114" x2="319" y2="259">
          <stop stopColor="#A5F3FC" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#space-bg)" />
      <circle cx="504" cy="81" r="95" fill="#6366F1" fillOpacity=".11" />
      <circle cx="102" cy="254" r="70" fill="#06B6D4" fillOpacity=".08" />
      <circle cx="93" cy="78" r="2" fill="white" fillOpacity=".8" />
      <circle cx="210" cy="53" r="2" fill="white" fillOpacity=".55" />
      <circle cx="510" cy="180" r="2" fill="white" fillOpacity=".75" />
      <circle cx="557" cy="289" r="2" fill="white" fillOpacity=".6" />
      <circle cx="154" cy="315" r="2" fill="white" fillOpacity=".65" />
      <circle cx="437" cy="48" r="1.5" fill="#A5F3FC" />
      <circle cx="266" cy="91" r="1.5" fill="#A5F3FC" />
      <path d="M320 249V111" stroke="#67E8F9" strokeWidth="4" strokeLinecap="round" />
      <path d="M320 238V130" stroke="white" strokeOpacity=".65" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M320 114L361 236L320 215L279 236L320 114Z" fill="url(#ship-fill)" stroke="#BAF7FF" strokeWidth="2" />
      <path d="M320 155L334 202L320 194L306 202L320 155Z" fill="#0B1426" fillOpacity=".75" />
      <path d="M299 239L309 268L320 249L331 268L341 239" stroke="#F59E0B" strokeOpacity=".9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M174 135L190 168L206 135L190 142L174 135Z" fill="#A78BFA" fillOpacity=".85" />
      <path d="M439 244L455 277L471 244L455 251L439 244Z" fill="#F472B6" fillOpacity=".85" />
      <path d="M121 190H195M445 101H515M401 306H491" stroke="#A5F3FC" strokeOpacity=".18" strokeLinecap="round" />
    </svg>
  );
}

function BusinessGuidanceArtwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 360"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="business-bg" x1="68" y1="0" x2="570" y2="360">
          <stop stopColor="#102839" />
          <stop offset="1" stopColor="#0A1120" />
        </linearGradient>
        <linearGradient id="business-line" x1="194" y1="100" x2="432" y2="254">
          <stop stopColor="#67E8F9" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#business-bg)" />
      <circle cx="522" cy="72" r="115" fill="#3B82F6" fillOpacity=".1" />
      <rect x="123" y="57" width="394" height="246" rx="18" fill="#0B1422" stroke="#67E8F9" strokeOpacity=".21" />
      <path d="M123 94H517" stroke="#67E8F9" strokeOpacity=".14" />
      <circle cx="149" cy="76" r="4" fill="#FB7185" fillOpacity=".8" />
      <circle cx="164" cy="76" r="4" fill="#FBBF24" fillOpacity=".8" />
      <circle cx="179" cy="76" r="4" fill="#34D399" fillOpacity=".8" />
      <rect x="149" y="118" width="109" height="155" rx="10" fill="#111E2F" stroke="white" strokeOpacity=".06" />
      <rect x="166" y="137" width="48" height="7" rx="3.5" fill="#67E8F9" fillOpacity=".8" />
      <rect x="166" y="155" width="74" height="5" rx="2.5" fill="white" fillOpacity=".2" />
      <rect x="166" y="170" width="60" height="5" rx="2.5" fill="white" fillOpacity=".14" />
      <circle cx="181" cy="206" r="12" fill="#164E63" />
      <circle cx="220" cy="206" r="12" fill="#1E3A5F" />
      <path d="M181 203V208M220 203V208M176 214C178 210 184 210 186 214M215 214C217 210 223 210 225 214" stroke="#A5F3FC" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="276" y="118" width="222" height="69" rx="10" fill="#111E2F" stroke="white" strokeOpacity=".06" />
      <rect x="294" y="136" width="70" height="6" rx="3" fill="white" fillOpacity=".3" />
      <rect x="294" y="151" width="119" height="5" rx="2.5" fill="white" fillOpacity=".12" />
      <path d="M294 171H468" stroke="url(#business-line)" strokeWidth="2" strokeLinecap="round" />
      <rect x="276" y="204" width="222" height="69" rx="10" fill="#111E2F" stroke="white" strokeOpacity=".06" />
      <path d="M299 253V240L319 230L338 237L362 218L383 227L406 214L430 224L455 211L478 217" stroke="url(#business-line)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="362" cy="218" r="4" fill="#A5F3FC" />
      <circle cx="430" cy="224" r="4" fill="#A5F3FC" />
      <path d="M104 120H72M549 250H579" stroke="#67E8F9" strokeOpacity=".3" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectArtwork({ type, title }: ProjectArtworkProps) {
  return (
    <div
      role="img"
      aria-label={`Illustrative artwork for ${title}`}
      className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.07] bg-[#0b1220]"
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
        {type === "microgreen" && <MicrogreenArtwork />}
        {type === "space-shooter" && <SpaceShooterArtwork />}
        {type === "business-guidance" && <BusinessGuidanceArtwork />}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b14]/55 via-transparent to-white/[0.025]"
      />
      <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#080b14]/65 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
        Visual concept
      </span>
    </div>
  );
}
