// LearnWithLabAI's chatbot mascot: a small gold robot with an AI-spark antenna.
// Animations (float, blink, spark, wave) live in app/globals.css under "bot-".
export default function BotAvatar({ size = 56, animated = true, wave = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      aria-hidden="true"
      className={`${animated ? "bot-float" : ""} ${className}`}
    >
      <defs>
        <linearGradient id="botGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E3CB8F" />
          <stop offset=".55" stopColor="#C6A664" />
          <stop offset="1" stopColor="#B98CD8" />
        </linearGradient>
        <linearGradient id="botVisor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A1B33" />
          <stop offset="1" stopColor="#1E1324" />
        </linearGradient>
        <radialGradient id="botGlow">
          <stop offset="0" stopColor="#F2EDF5" />
          <stop offset=".45" stopColor="#D9BDF0" />
          <stop offset="1" stopColor="#B98CD8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* antenna: an AI spark */}
      <line x1="60" y1="31" x2="60" y2="19" stroke="#C6A664" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="12" r="9" fill="url(#botGlow)" opacity=".6" className={animated ? "bot-core" : ""} />
      <path
        d="M60 2.5c.9 5.2 3.3 7.6 8.5 8.5-5.2.9-7.6 3.3-8.5 8.5-.9-5.2-3.3-7.6-8.5-8.5 5.2-.9 7.6-3.3 8.5-8.5Z"
        fill="#E3CB8F"
        className={animated ? "bot-spark" : ""}
        style={{ transformOrigin: "60px 11px" }}
      />

      {/* ears */}
      <rect x="14" y="52" width="10" height="22" rx="5" fill="#C6A664" />
      <rect x="96" y="52" width="10" height="22" rx="5" fill="#C6A664" />

      {/* head */}
      <rect x="20" y="30" width="80" height="64" rx="24" fill="url(#botGold)" />
      <rect x="20" y="30" width="80" height="64" rx="24" fill="none" stroke="#F2EDF5" strokeOpacity=".35" strokeWidth="1.5" />

      {/* visor */}
      <rect x="29" y="42" width="62" height="38" rx="16" fill="url(#botVisor)" />

      {/* eyes */}
      <g className={animated ? "bot-blink" : ""} style={{ transformOrigin: "60px 58px" }}>
        <circle cx="47" cy="58" r="9" fill="url(#botGlow)" opacity=".55" />
        <circle cx="73" cy="58" r="9" fill="url(#botGlow)" opacity=".55" />
        <ellipse cx="47" cy="58" rx="4.5" ry="5.5" fill="#F2EDF5" />
        <ellipse cx="73" cy="58" rx="4.5" ry="5.5" fill="#F2EDF5" />
        <circle cx="48.5" cy="56" r="1.5" fill="#B98CD8" />
        <circle cx="74.5" cy="56" r="1.5" fill="#B98CD8" />
      </g>

      {/* smile + cheeks */}
      <path d="M53 70q7 5 14 0" fill="none" stroke="#E3CB8F" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="36" cy="72" rx="4" ry="2.4" fill="#B98CD8" opacity=".7" />
      <ellipse cx="84" cy="72" rx="4" ry="2.4" fill="#B98CD8" opacity=".7" />

      {/* body */}
      <rect x="38" y="92" width="44" height="22" rx="10" fill="#2A1B33" stroke="#C6A664" strokeWidth="2" />
      <g className={animated ? "bot-core" : ""}>
        <path d="M49 103h7l4-5 4 10 3-5h4" fill="none" stroke="#B98CD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* left arm, resting */}
      <path d="M39 98q-9 2-11 11" fill="none" stroke="#C6A664" strokeWidth="6" strokeLinecap="round" />
      <circle cx="27.5" cy="111" r="5.5" fill="#E3CB8F" stroke="#C6A664" strokeWidth="1.5" />

      {/* right arm: waves when wave=true, otherwise rests */}
      {wave ? (
        <g className="bot-wave" style={{ transformOrigin: "81px 98px" }}>
          <path d="M81 98q11-1 13-13" fill="none" stroke="#C6A664" strokeWidth="6" strokeLinecap="round" />
          <circle cx="94.5" cy="81" r="5.8" fill="#E3CB8F" stroke="#C6A664" strokeWidth="1.5" />
          <path d="M90.5 77.5l-1.6-3.2M94.5 75.5v-3.4M98.5 77.5l1.6-3.2" stroke="#E3CB8F" strokeWidth="2" strokeLinecap="round" />
        </g>
      ) : (
        <>
          <path d="M81 98q9 2 11 11" fill="none" stroke="#C6A664" strokeWidth="6" strokeLinecap="round" />
          <circle cx="92.5" cy="111" r="5.5" fill="#E3CB8F" stroke="#C6A664" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
