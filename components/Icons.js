const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const paths = {
  flow: (
    <>
      <rect x="2.5" y="3" width="6" height="5" rx="1.6" {...base} />
      <rect x="15.5" y="3" width="6" height="5" rx="1.6" {...base} />
      <rect x="9" y="16" width="6" height="5" rx="1.6" {...base} />
      <path d="M5.5 8v3.5a2 2 0 0 0 2 2H12m6.5-5.5v3.5a2 2 0 0 1-2 2H12m0 0V16" {...base} />
    </>
  ),
  zap: (
    <>
      <path d="M13.5 2 4 13.2h6.3L10 22l9.6-11.3h-6.4L13.5 2Z" {...base} />
    </>
  ),
  agent: (
    <>
      <rect x="4" y="7.5" width="16" height="12" rx="3.2" {...base} />
      <path d="M12 3v4.5M8.8 12.8h.01M15.2 12.8h.01M9 16.4h6" {...base} />
      <path d="M1.8 12v3M22.2 12v3" {...base} />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.6" rx="7.6" ry="3.1" {...base} />
      <path d="M4.4 5.6v12.8c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1V5.6" {...base} />
      <path d="M4.4 12c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1" {...base} />
    </>
  ),
  brain: (
    <>
      <path d="M12 5a3 3 0 0 0-5.7-1.3A3.1 3.1 0 0 0 3.5 8a3.2 3.2 0 0 0 .6 4.6A3.2 3.2 0 0 0 6 18.3 3 3 0 0 0 12 19" {...base} />
      <path d="M12 5a3 3 0 0 1 5.7-1.3A3.1 3.1 0 0 1 20.5 8a3.2 3.2 0 0 1-.6 4.6A3.2 3.2 0 0 1 18 18.3 3 3 0 0 1 12 19" {...base} />
      <path d="M12 5v14" {...base} />
    </>
  ),
  prompt: (
    <>
      <rect x="2.6" y="4" width="18.8" height="16" rx="3.2" {...base} />
      <path d="M7 10.2 9.6 12 7 13.8M12.4 14.6h4.6" {...base} />
    </>
  ),
  tools: (
    <>
      <path d="M14.2 6.4a3.9 3.9 0 0 0 5.1 5.1l-7.2 7.2a2.4 2.4 0 0 1-3.4-3.4l7.2-7.2Z" {...base} />
      <path d="M17.4 3.2 20.8 6.6M5.4 5.4l2.2 2.2M3.6 11h3.1" {...base} />
    </>
  ),
  plug: (
    <>
      <path d="M9 2.8v5.4M15 2.8v5.4" {...base} />
      <path d="M6 8.2h12v3.4a6 6 0 0 1-12 0V8.2Z" {...base} />
      <path d="M12 17.6v3.6" {...base} />
    </>
  ),
  calendar: (
    <>
      <rect x="3.2" y="5" width="17.6" height="16" rx="3.2" {...base} />
      <path d="M3.2 10h17.6M8.2 2.8v4M15.8 2.8v4" {...base} />
    </>
  ),
  live: (
    <>
      <circle cx="12" cy="12" r="3.2" {...base} />
      <path d="M7.4 7.4a6.5 6.5 0 0 0 0 9.2M16.6 16.6a6.5 6.5 0 0 0 0-9.2M4.2 4.2a11 11 0 0 0 0 15.6M19.8 19.8a11 11 0 0 0 0-15.6" {...base} />
    </>
  ),
  project: (
    <>
      <path d="M3.4 7.4 12 2.6l8.6 4.8v9.2L12 21.4 3.4 16.6V7.4Z" {...base} />
      <path d="m3.4 7.4 8.6 4.8 8.6-4.8M12 12.2v9.2" {...base} />
    </>
  ),
  mentor: (
    <>
      <circle cx="12" cy="7.6" r="3.8" {...base} />
      <path d="M4.6 20.4a7.4 7.4 0 0 1 14.8 0" {...base} />
    </>
  ),
  certificate: (
    <>
      <circle cx="12" cy="9.4" r="5.6" {...base} />
      <path d="M8.4 14.2 7 21.4l5-2.6 5 2.6-1.4-7.2" {...base} />
    </>
  ),
  career: (
    <>
      <path d="M3.4 17.6 9 11.4l3.8 3.6 7.8-8.4" {...base} />
      <path d="M15.6 6.6h5v5" {...base} />
    </>
  ),
  check: (
    <>
      <path d="m4.6 12.6 4.6 4.6 10.2-10.4" {...base} />
    </>
  ),
  arrow: (
    <>
      <path d="M4.6 12h14.2M13.4 6.6 18.8 12l-5.4 5.4" {...base} />
    </>
  ),
  chat: (
    <>
      <path d="M20.6 11.6a7.8 7.8 0 0 1-8.4 7.8L5 21.2l1.8-5.4A7.8 7.8 0 1 1 20.6 11.6Z" {...base} />
    </>
  ),
  mail: (
    <>
      <rect x="2.6" y="4.8" width="18.8" height="14.4" rx="3" {...base} />
      <path d="m3.6 7.4 8.4 5.8 8.4-5.8" {...base} />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.2" {...base} />
      <path d="M2.8 12h18.4M12 2.8a15 15 0 0 1 0 18.4A15 15 0 0 1 12 2.8Z" {...base} />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.2 13.9 9 19.8 11l-5.9 2 -1.9 5.8L10.1 13 4.2 11l5.9-2L12 3.2Z" {...base} />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name] || paths.spark}
    </svg>
  );
}
