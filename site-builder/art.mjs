// Original vector art: logo marks, icons, and editorial-style scene illustrations.
// All shapes are hand-authored for this project; no stock imagery or third-party assets.

const S = (vb, inner, cls = "") =>
  `<svg class="${cls}" viewBox="${vb}" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

/* ---------------------------------- LOGO ---------------------------------- */

const marks = {
  arch: `
    <path d="M8 34V20.5C8 13.6 13.6 8 20.5 8h7C34.4 8 40 13.6 40 20.5V34" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M24 30.5c-4.6-2.9-7.4-5.6-7.4-9.2a4.3 4.3 0 0 1 7.4-2.8 4.3 4.3 0 0 1 7.4 2.8c0 3.6-2.8 6.3-7.4 9.2Z" fill="currentColor"/>
    <path d="M5 38c3.6 0 3.6-2.4 7.2-2.4S15.8 38 19.4 38s3.6-2.4 7.2-2.4S30.2 38 33.8 38s3.6-2.4 7.2-2.4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`,
  monogram: `
    <path d="M9 34V15M9 24.5h9M18 15v19" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 34V15M24 24.5h9M33 15v19" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 11c2.6-2.4 5-3.6 8-3.6S25.4 8.6 28 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`,
  shield: `
    <path d="M24 5 39 10v10c0 9-6 15.4-15 18-9-2.6-15-9-15-18V10Z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M24 28c-4.2-2.7-6.8-5.1-6.8-8.4a3.9 3.9 0 0 1 6.8-2.5 3.9 3.9 0 0 1 6.8 2.5c0 3.3-2.6 5.7-6.8 8.4Z" fill="currentColor"/>`,
  wave: `
    <path d="M7 25c5.7-9 11.3-9 17 0s11.3 9 17 0" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M13 33V21.5L24 12l11 9.5V33" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="24" cy="27" r="3.6" fill="currentColor"/>`,
};

export function logoSVG(theme, opts = {}) {
  const { size = 44, color = "currentColor", mark = "arch" } = opts;
  return `<svg class="brand-mark" width="${size}" height="${size}" viewBox="0 0 48 48" aria-hidden="true" focusable="false" style="color:${color}" xmlns="http://www.w3.org/2000/svg">${marks[mark] || marks.arch}</svg>`;
}

/* --------------------------------- ICONS ---------------------------------- */

const iconPaths = {
  heart: `<path d="M12 20.6C7.4 17.7 4.5 15 4.5 11.5A4.4 4.4 0 0 1 12 8.6a4.4 4.4 0 0 1 7.5 2.9c0 3.5-2.9 6.2-7.5 9.1Z"/>`,
  home: `<path d="M4 11l8-7 8 7v8.5a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H5.5A1.5 1.5 0 0 1 4 19.5Z"/>`,
  bath: `<path d="M3.5 12.5h17v1.9a5.1 5.1 0 0 1-5.1 5.1H8.6a5.1 5.1 0 0 1-5.1-5.1ZM7 12.5V6.6a2.1 2.1 0 0 1 4.2 0M7 19.5l-1 2M17 19.5l1 2"/>`,
  refresh: `<path d="M20.4 12a8.4 8.4 0 1 1-2.4-5.9M20.5 3.8v4.6h-4.6"/>`,
  car: `<path d="M4.5 16.5h15M6 16.5l1.6-5.2h8.8l1.6 5.2M3.5 16.5v2.9h2.2v-2.9M18.3 16.5v2.9h2.2v-2.9M7.5 13.5h.01M16.5 13.5h.01"/>`,
  pill: `<path d="M10.7 4.3a4.9 4.9 0 0 1 6.9 6.9l-6.3 6.3a4.9 4.9 0 0 1-6.9-6.9ZM7.9 8l8 8"/>`,
  pulse: `<path d="M2.5 12h4l2.2-5.4 3.1 10.8L14 12h7.5"/>`,
  brain: `<path d="M9.2 4.8a3.2 3.2 0 0 0-3.2 3.2 3.2 3.2 0 0 0-1 5.9v1.6a3.2 3.2 0 0 0 3.2 3.2h1.1V4.8ZM14.8 4.8a3.2 3.2 0 0 1 3.2 3.2 3.2 3.2 0 0 1 1 5.9v1.6a3.2 3.2 0 0 1-3.2 3.2h-1.1V4.8ZM12 4.8v14.7"/>`,
  shield: `<path d="M12 3.2l7.8 2.9v5.7c0 4.8-3.3 8.1-7.8 9.2-4.5-1.1-7.8-4.4-7.8-9.2V6.1ZM8.6 11.8l2.2 2.2 4.6-4.6"/>`,
  users: `<path d="M15.8 20v-1.8a3.9 3.9 0 0 0-3.9-3.9H7.4a3.9 3.9 0 0 0-3.9 3.9V20M9.6 10.6a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2ZM16.6 10.9a2.6 2.6 0 1 0 0-5.2M20.5 20v-1.8a3.6 3.6 0 0 0-2.9-3.5"/>`,
  "house-check": `<path d="M3.8 11.2 12 4l8.2 7.2v8.3a1.4 1.4 0 0 1-1.4 1.4H5.2a1.4 1.4 0 0 1-1.4-1.4ZM8.8 13.6l2.3 2.3 4.4-4.4"/>`,
  moon: `<path d="M20.2 14.7A8.6 8.6 0 0 1 9.3 3.8 8.6 8.6 0 1 0 20.2 14.7Z"/>`,
  compass: `<circle cx="12" cy="12" r="8.6"/><path d="m15.4 8.6-2 4.8-4.8 2 2-4.8Z"/>`,
  message: `<path d="M3.8 5.2h16.4v11.2H9.4l-5.6 3.6ZM7.4 9.2h9M7.4 12.4h6"/>`,
  match: `<circle cx="8" cy="8" r="3.4"/><circle cx="16" cy="16" r="3.4"/><path d="M10.6 10.6l2.8 2.8M13.4 10.4a3.4 3.4 0 1 1 0 0Z"/>`,
  clock: `<circle cx="12" cy="12" r="8.6"/><path d="M12 7v5.4l3.4 2"/>`,
  receipt: `<path d="M5.8 3.6h12.4v17l-3.1-1.9-3.1 1.9-3.1-1.9-3.1 1.9ZM9 8h6M9 11.6h6M9 15.2h3.6"/>`,
  language: `<path d="M3.8 5h8M7.8 5v1.8c0 3.8-2.6 6.6-5.4 7.8M5.6 9.8c1 2.8 3 4.8 5.8 5.8M13.2 20l3.9-9.6L21 20M14.6 16.4h5"/>`,
  check: `<path d="M4.6 12.4 9.4 17 19.4 6.8"/>`,
  phone: `<path d="M7.2 3.8 9.8 8 7.6 9.9a12.8 12.8 0 0 0 6.5 6.5l1.9-2.2 4.2 2.6v3.4c0 .8-.7 1.5-1.5 1.5C10.4 21.7 2.3 13.6 2.3 5.3c0-.8.7-1.5 1.5-1.5Z"/>`,
  mail: `<rect x="3.4" y="5.4" width="17.2" height="13.2" rx="1.6"/><path d="m4.4 7 7.6 5.6L19.6 7"/>`,
  pin: `<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>`,
  arrow: `<path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5"/>`,
  menu: `<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>`,
  close: `<path d="m6 6 12 12M18 6 6 18"/>`,
  star: `<path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8Z"/>`,
  calendar: `<rect x="3.8" y="5.4" width="16.4" height="15" rx="2"/><path d="M3.8 10h16.4M8 3.4v4M16 3.4v4"/>`,
  sparkle: `<path d="M12 3.4l1.7 5.4 5.4 1.7-5.4 1.7L12 17.6l-1.7-5.4-5.4-1.7 5.4-1.7ZM18.6 15.2l.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8Z"/>`,
  quote: `<path d="M9.4 6.4C6.2 8 4.4 10.6 4.4 14.2c0 2.4 1.4 4 3.4 4 1.8 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.6-2.8-.3 0-.6 0-.8.1.4-1.7 1.7-3.2 3.6-4.3ZM19.4 6.4c-3.2 1.6-5 4.2-5 7.8 0 2.4 1.4 4 3.4 4 1.8 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.6-2.8-.3 0-.6 0-.8.1.4-1.7 1.7-3.2 3.6-4.3Z"/>`,
  alert: `<path d="M12 3.6 21 20H3ZM12 9v5M12 17h.01"/>`,
  book: `<path d="M4 5.4c3-1.2 5.4-1.2 8 .6 2.6-1.8 5-1.8 8-.6v13.2c-3-1.2-5.4-1.2-8 .6-2.6-1.8-5-1.8-8-.6ZM12 6v13.2"/>`,
  external: `<path d="M14 4h6v6M20 4l-9 9M18 14v5.2a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V6.8a.8.8 0 0 1 .8-.8H10"/>`,
  download: `<path d="M12 3.6v11M7.4 10.4 12 15l4.6-4.6M4 19.6h16"/>`,
  leaf: `<path d="M20 4C9 4 4 8.4 4 15a5 5 0 0 0 5 5c6.6 0 11-5 11-16ZM4 20c2.8-5.6 6.4-9 12-11.6"/>`,
};

export function icon(name, size = 24, cls = "") {
  const p = iconPaths[name] || iconPaths.heart;
  return `<svg class="icon ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${p}</svg>`;
}

/* -------------------------------- SCENES ---------------------------------- */

const steam = `<g class="steam" stroke="var(--art-line,#9fb3ab)" stroke-width="2" stroke-linecap="round" fill="none" opacity=".55">
  <path d="M0 0c5-7-5-12 0-19"/><path d="M10 2c5-7-5-12 0-19"/></g>`;

function personSeated({ x = 0, y = 0, skin = "#C68642", hair = "#E8E4DC", top = "#7FA99B", bottom = "#4A5B63", scale = 1 }) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M-38 52c2-26 14-38 38-38s36 12 38 38l-2 46h-72Z" fill="${top}"/>
    <path d="M-34 92h26v34h-26zM8 92h26v34H8z" fill="${bottom}" rx="6"/>
    <path d="M-40 52c8 8 20 12 40 12s32-4 40-12" fill="none" stroke="rgba(0,0,0,.12)" stroke-width="2"/>
    <circle cx="0" cy="0" r="25" fill="${skin}"/>
    <path d="M-26 -2c0-20 11-30 26-30S26-20 26-2c-6-9-14-13-26-13S-20-11-26-2Z" fill="${hair}"/>
    <path d="M-8 8c5 4 11 4 16 0" fill="none" stroke="rgba(60,40,30,.55)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="-9" cy="-1" r="1.7" fill="rgba(40,30,25,.65)"/><circle cx="9" cy="-1" r="1.7" fill="rgba(40,30,25,.65)"/>
    <path d="M-44 60c-12 8-16 22-16 36l10 4c4-12 10-20 18-24Z" fill="${top}"/>
    <path d="M44 60c14 6 18 20 18 34l-11 4c-3-12-9-21-17-25Z" fill="${top}"/>
    <rect x="-48" y="96" width="30" height="15" rx="7" fill="#2F3A3E"/>
    <rect x="16" y="96" width="30" height="15" rx="7" fill="#2F3A3E"/>
  </g>`;
}

function personStanding({ x = 0, y = 0, skin = "#8D5524", hair = "#2B2118", top = "#3E7C74", scale = 1, arm = false }) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M-30 34c0-22 12-34 30-34s30 12 30 34v44h-60Z" fill="${top}"/>
    <path d="M-28 78h22v58h-22zM6 78h22v58H6z" fill="#3C4A52"/>
    <rect x="-32" y="132" width="28" height="12" rx="6" fill="#25313A"/><rect x="4" y="132" width="28" height="12" rx="6" fill="#25313A"/>
    <circle cx="0" cy="0" r="22" fill="${skin}"/>
    <path d="M-23 -3c1-17 10-26 23-26s23 9 23 26c-6-10-13-14-23-14S-17-13-23-3Z" fill="${hair}"/>
    <circle cx="23" cy="-16" r="9" fill="${hair}"/>
    <path d="M-7 10c4 3 10 3 14 0" fill="none" stroke="rgba(60,40,30,.5)" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="-8" cy="1" r="1.5" fill="rgba(40,30,25,.6)"/><circle cx="8" cy="1" r="1.5" fill="rgba(40,30,25,.6)"/>
    ${arm ? `<path d="M26 40c18 4 26 18 22 36l-11 2c2-12-4-20-15-22Z" fill="${top}"/><circle cx="42" cy="80" r="8" fill="${skin}"/>` : `<path d="M28 38c8 14 8 28 2 42l-9-3c5-11 4-21-3-31Z" fill="${top}"/>`}
    <path d="M-28 38c-8 14-8 28-2 42l9-3c-5-11-4-21 3-31Z" fill="${top}"/>
  </g>`;
}

const plant = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M-4 44h48l-6 46h-36Z" fill="var(--art-pot,#C98F6B)"/>
  <path d="M-8 44h56" stroke="var(--art-pot-dark,#A9714F)" stroke-width="6" stroke-linecap="round"/>
  <g fill="var(--art-plant,#6E9B78)">
    <path d="M20 44C4 28 2 10 12 0c12 10 16 26 8 44Z"/>
    <path d="M20 44C36 30 46 14 36 2 28 14 20 28 20 44Z" opacity=".85"/>
    <path d="M20 44C8 32 0 22 4 12c10 4 18 16 16 32Z" opacity=".7"/>
    <path d="M20 44c10-16 20-22 28-18-2 12-14 20-28 18Z" opacity=".65"/>
  </g>
</g>`;

/* Scene A — living room, caregiver and client */
export function sceneLivingRoom(cls = "art") {
  return S(
    "0 0 800 620",
    `
  <defs>
    <linearGradient id="lrWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--art-wall,#EEF3EE)"/><stop offset="1" stop-color="var(--art-wall2,#E2EAE4)"/></linearGradient>
    <linearGradient id="lrLight" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF6DC" stop-opacity=".95"/><stop offset="1" stop-color="#FFF6DC" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="800" height="620" fill="url(#lrWall)"/>
  <rect y="470" width="800" height="150" fill="var(--art-floor,#D9C3A5)"/>
  <path d="M0 470h800" stroke="var(--art-floor-line,#C4AC8D)" stroke-width="3"/>
  <g opacity=".9">
    <rect x="70" y="70" width="240" height="250" rx="8" fill="#DCEAE6"/>
    <rect x="70" y="70" width="240" height="250" rx="8" fill="none" stroke="var(--art-frame,#F7FAF6)" stroke-width="14"/>
    <path d="M190 84v222M84 195h212" stroke="var(--art-frame,#F7FAF6)" stroke-width="10"/>
    <circle cx="150" cy="140" r="34" fill="#F6E7B8" opacity=".85"/>
    <path d="M84 320 260 84h80L124 320Z" fill="#FFF8E6" opacity=".28"/>
  </g>
  <g opacity=".9">
    <rect x="640" y="86" width="98" height="120" rx="6" fill="var(--art-frame,#F7FAF6)"/>
    <rect x="652" y="98" width="74" height="96" rx="3" fill="var(--art-accent,#7FA99B)" opacity=".5"/>
    <path d="M660 176c8-18 18-24 26-12 8-18 20-22 32 10v20h-58Z" fill="var(--art-accent2,#C98F6B)" opacity=".75"/>
  </g>
  <ellipse cx="400" cy="560" rx="310" ry="42" fill="var(--art-rug,#C7D6CB)"/>
  <g>
    <rect x="236" y="330" width="330" height="120" rx="26" fill="var(--art-sofa,#8FAE9E)"/>
    <rect x="252" y="350" width="140" height="74" rx="18" fill="var(--art-sofa-2,#A6C0B1)"/>
    <rect x="404" y="350" width="146" height="74" rx="18" fill="var(--art-sofa-2,#A6C0B1)"/>
    <rect x="222" y="392" width="34" height="86" rx="16" fill="var(--art-sofa,#8FAE9E)"/>
    <rect x="546" y="392" width="34" height="86" rx="16" fill="var(--art-sofa,#8FAE9E)"/>
    <rect x="252" y="446" width="14" height="30" rx="5" fill="#7B6244"/><rect x="536" y="446" width="14" height="30" rx="5" fill="#7B6244"/>
  </g>
  ${personSeated({ x: 370, y: 328, skin: "#D9A578", hair: "#EDE9E2", top: "#7C93A8", bottom: "#5B6672", scale: 1.06 })}
  <g transform="translate(556 296) scale(1.12)">
    <path d="M-30 34c0-22 12-34 30-34s30 12 30 34v50h-60Z" fill="#3E7C74"/>
    <path d="M-26 84h20v54h-20zM6 84h20v54H6z" fill="#3C4A52"/>
    <circle cx="0" cy="0" r="21" fill="#8D5524"/>
    <path d="M-21 -2c1-17 9-25 21-25s20 8 21 25c-6-9-12-13-21-13S-15-11-21-2Z" fill="#2B2118"/>
    <circle cx="20" cy="-14" r="8" fill="#2B2118"/>
    <path d="M-6 9c4 3 9 3 13 0" fill="none" stroke="rgba(60,40,30,.5)" stroke-width="1.7" stroke-linecap="round"/>
    <circle cx="-7" cy="1" r="1.5" fill="rgba(40,30,25,.6)"/><circle cx="7" cy="1" r="1.5" fill="rgba(40,30,25,.6)"/>
    <path d="M24 36c16 4 26 16 24 34l-11 3c1-13-5-21-17-24Z" fill="#3E7C74"/>
    <path d="M-26 36c-8 16-6 30 2 40l9-5c-6-10-5-20 2-30Z" fill="#3E7C74"/>
    <circle cx="43" cy="72" r="8" fill="#8D5524"/>
  </g>
  <g>
    <rect x="300" y="466" width="220" height="12" rx="6" fill="#B98D63"/>
    <rect x="326" y="478" width="10" height="48" fill="#A97C53"/><rect x="486" y="478" width="10" height="48" fill="#A97C53"/>
    <ellipse cx="404" cy="468" rx="26" ry="7" fill="#F4EFE4"/>
    <path d="M382 468c0-14 10-22 22-22s22 8 22 22Z" fill="#F7F3EA"/>
    <path d="M426 456c8 0 12 5 12 10s-6 10-14 9" fill="none" stroke="#F7F3EA" stroke-width="5"/>
    <g transform="translate(404 430)">${steam}</g>
  </g>
  ${plant(628, 380, 1.05)}
  <g opacity=".85"><ellipse cx="120" cy="560" rx="58" ry="16" fill="var(--art-rug,#C7D6CB)"/><path d="M104 548c-6-10 4-16 10-8 2-12 16-10 16 2 8-2 12 8 4 12Z" fill="#B9A48C"/></g>
`,
    cls
  );
}

/* Scene B — kitchen */
export function sceneKitchen(cls = "art") {
  return S(
    "0 0 800 620",
    `
  <rect width="800" height="620" fill="var(--art-wall,#F3EFE6)"/>
  <rect y="440" width="800" height="180" fill="var(--art-floor,#D8C7AE)"/>
  <rect x="0" y="90" width="800" height="70" fill="var(--art-cab,#C9D8CE)"/>
  <g fill="var(--art-cab-2,#B7CABD)">
    <rect x="36" y="100" width="120" height="52" rx="5"/><rect x="176" y="100" width="120" height="52" rx="5"/><rect x="316" y="100" width="120" height="52" rx="5"/><rect x="456" y="100" width="120" height="52" rx="5"/><rect x="596" y="100" width="120" height="52" rx="5"/>
  </g>
  <rect x="60" y="200" width="250" height="190" rx="10" fill="#E9F1EE"/>
  <rect x="60" y="200" width="250" height="190" rx="10" fill="none" stroke="var(--art-frame,#FBFCF9)" stroke-width="14"/>
  <path d="M185 206v178M66 294h238" stroke="var(--art-frame,#FBFCF9)" stroke-width="9"/>
  <circle cx="140" cy="252" r="26" fill="#F7E3A9"/>
  <rect x="530" y="236" width="240" height="150" rx="8" fill="var(--art-counter,#E5D8C4)"/>
  <rect x="530" y="376" width="240" height="34" fill="var(--art-counter-2,#CDB99E)"/>
  <g>
    <rect x="560" y="300" width="58" height="72" rx="6" fill="#D98C6A"/><rect x="566" y="290" width="46" height="12" rx="4" fill="#B86F51"/>
    <circle cx="660" cy="330" r="22" fill="#E8B45E"/><circle cx="694" cy="340" r="16" fill="#C97B5E"/>
    <path d="M608 330h24l-4 42h-16Z" fill="#8FAE9E"/>
  </g>
  <g>
    <rect x="250" y="410" width="330" height="18" rx="9" fill="#C99C71"/>
    <rect x="278" y="428" width="14" height="92" fill="#B4865C"/><rect x="536" y="428" width="14" height="92" fill="#B4865C"/>
    <path d="M330 410c0-26 22-42 44-42s44 16 44 42Z" fill="#F6F2E7"/>
    <path d="M404 374c14 0 22 8 22 18s-10 18-22 18" fill="#EDE7D8"/>
    <path d="M360 340c-4-14 6-18 2-30M386 344c-4-14 6-18 2-30" stroke="#C9D8CE" stroke-width="4" stroke-linecap="round" fill="none"/>
    <ellipse cx="500" cy="402" rx="38" ry="10" fill="#B7CABD"/>
    <path d="M470 400c0-18 14-28 30-28s30 10 30 28Z" fill="#DCE8DE"/>
    <circle cx="486" cy="386" r="8" fill="#7E9E72"/><circle cx="506" cy="380" r="8" fill="#7E9E72"/><circle cx="520" cy="390" r="7" fill="#7E9E72"/>
  </g>
  ${personStanding({ x: 180, y: 268, skin: "#8D5524", hair: "#2B2118", top: "#3E7C74", scale: 1.0, arm: true })}
  ${personSeated({ x: 640, y: 400, skin: "#E0B089", hair: "#DFD9CC", top: "#A88D74", bottom: "#6B6257", scale: .85 })}
  <g transform="translate(700 470)">
    <path d="M-4 0h40l-6 44h-28Z" fill="#C98F6B"/>
    <path d="M-10 0C-18-18-8-34 2-40c10 10 12 26 4 40Z" fill="#6E9B78"/>
    <path d="M16 0C26-12 38-14 44-6c-4 10-16 12-28 6Z" fill="#6E9B78" opacity=".8"/>
  </g>
`,
    cls
  );
}

/* Scene C — outdoors / walk */
export function sceneWalk(cls = "art") {
  return S(
    "0 0 800 620",
    `
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--art-sky,#DCEAEF)"/><stop offset="1" stop-color="var(--art-sky-2,#F4EFE2)"/></linearGradient></defs>
  <rect width="800" height="620" fill="url(#sky)"/>
  <circle cx="640" cy="120" r="66" fill="var(--art-sun,#F6DFA0)" opacity=".9"/>
  <path d="M0 400c90-40 170-36 260-12s170 22 260-2 190-18 280 6v228H0Z" fill="var(--art-hill,#BFD3BC)"/>
  <path d="M0 456c120-28 220-18 320 6s200 12 300-10 120-6 180 4v164H0Z" fill="var(--art-hill-2,#A8C3A2)"/>
  <g fill="var(--art-tree,#7C9C74)">
    <path d="M96 420c-4-38 10-66 34-78 22 18 26 48 12 78Z"/><rect x="128" y="410" width="10" height="46" fill="#8B6B4A"/>
    <path d="M690 414c-6-44 10-74 36-86 22 20 26 54 12 86Z"/><rect x="724" y="404" width="10" height="52" fill="#8B6B4A"/>
    <path d="M580 428c-4-28 8-48 24-58 18 14 22 38 10 58Z" opacity=".8"/>
  </g>
  <rect x="0" y="520" width="800" height="100" fill="var(--art-path,#E4D6BC)"/>
  <path d="M120 520c140 24 420 26 580 0" stroke="var(--art-path-2,#D3C1A2)" stroke-width="4" fill="none"/>
  <g>
    <rect x="44" y="300" width="300" height="22" rx="8" fill="#F6F2E7"/>
    <rect x="64" y="322" width="14" height="198" fill="#E9E2D2"/><rect x="310" y="322" width="14" height="198" fill="#E9E2D2"/>
    <rect x="44" y="220" width="14" height="86" fill="#E9E2D2"/><rect x="330" y="220" width="14" height="86" fill="#E9E2D2"/>
    <path d="M44 222c90-34 210-34 300 0" stroke="#E9E2D2" stroke-width="12" fill="none"/>
  </g>
  ${personStanding({ x: 400, y: 330, skin: "#8D5524", hair: "#2B2118", top: "#3E7C74", scale: 1.0 })}
  ${personSeated({ x: 512, y: 424, skin: "#E0B089", hair: "#E6E1D6", top: "#8C9BAE", bottom: "#5D666F", scale: .95 })}
  <g stroke="#A9714F" stroke-width="7" stroke-linecap="round"><path d="M548 520v-76"/><path d="M520 474h34" /></g>
  <g fill="#D9A0A0"><circle cx="250" cy="500" r="5"/><circle cx="282" cy="514" r="4"/><circle cx="206" cy="512" r="4"/></g>
`,
    cls
  );
}

/* Scene D — home safety cross-section */
export function sceneSafety(cls = "art") {
  return S(
    "0 0 800 620",
    `
  <rect width="800" height="620" fill="var(--art-wall,#EEF1EC)"/>
  <g>
    <path d="M120 300 400 96l280 204v236H120Z" fill="var(--art-house,#F7F4EC)" stroke="var(--art-line,#B9C6BD)" stroke-width="3"/>
    <path d="M96 308 400 76l304 232" fill="none" stroke="var(--art-roof,#B26B5B)" stroke-width="20" stroke-linecap="round"/>
    <rect x="200" y="340" width="120" height="196" fill="var(--art-door,#C9A77F)"/>
    <circle cx="296" cy="442" r="6" fill="#8A6A46"/>
    <rect x="380" y="352" width="156" height="120" rx="6" fill="var(--art-window,#CFE3E4)" stroke="#F9FBF7" stroke-width="10"/>
    <rect x="360" y="200" width="120" height="100" rx="6" fill="var(--art-window,#CFE3E4)" stroke="#F9FBF7" stroke-width="10"/>
    <path d="M120 536h560" stroke="var(--art-line,#B9C6BD)" stroke-width="4"/>
  </g>
  <g fill="none" stroke="var(--art-accent,#3E7C74)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(568 400)"><path d="M0 0v54M-16 0h32M-10 54h20"/><path d="M-30 20h60"/></g>
    <g transform="translate(210 250)"><circle cx="0" cy="0" r="18"/><path d="M0-26V-34M0 26V34M-26 0h-8M26 0h8M-18-18l-6-6M18-18l6-6"/></g>
  </g>
  <g transform="translate(430 430)">
    <rect x="-84" y="-50" width="168" height="86" rx="10" fill="#FFFFFF" opacity=".92"/>
    <g stroke="#3E7C74" stroke-width="3" fill="none" stroke-linecap="round"><path d="M-64-28h34M-64-12h56M-64 4h44"/></g>
    <circle cx="56" cy="-18" r="14" fill="#F3D9A4"/>
  </g>
  <g fill="var(--art-plant,#6E9B78)">
    <path d="M690 520c-20-26-18-50-2-64 18 14 22 40 2 64Z"/><rect x="680" y="516" width="12" height="26" fill="#A9714F"/>
  </g>
`,
    cls
  );
}

/* Scene E — stylized service-area map */
export function sceneMap(cls = "art") {
  return S(
    "0 0 800 620",
    `
  <rect width="800" height="620" fill="var(--art-map,#EAF0EA)"/>
  <path d="M0 430c120 18 200-24 320-6s180 46 300 22 120-10 180 4v170H0Z" fill="var(--art-water,#BFD9E0)" opacity=".7"/>
  <g stroke="var(--art-road,#FFFFFF)" stroke-width="9" fill="none" opacity=".95">
    <path d="M80 120c120 60 210 20 300 70s150 120 340 90"/>
    <path d="M160 560c40-140 40-240 90-360s110-120 190-130"/>
    <path d="M420 560c-20-150 40-240 130-300s140-80 200-40"/>
    <path d="M60 300c140-20 240 30 380 10s200-70 320-40"/>
  </g>
  <g stroke="var(--art-border,#C9D6CC)" stroke-width="2" fill="none" stroke-dasharray="8 8">
    <path d="M60 60h680v500H60Z" rx="24"/>
  </g>
  <g fill="var(--art-accent,#B26B5B)">
    ${[
      [250, 190, 1],
      [330, 260, 1],
      [300, 330, 1],
      [430, 300, 1],
      [500, 230, 1],
      [470, 390, 1],
      [560, 350, 1],
      [380, 440, 1],
      [600, 430, 0.9],
      [210, 420, 0.9],
    ]
      .map(
        ([x, y, s]) =>
          `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0c0 0 14-14 14-24a14 14 0 1 0-28 0c0 10 14 24 14 24Z" fill="var(--art-accent,#B26B5B)"/><circle cx="0" cy="-24" r="5" fill="#FFF"/></g>`
      )
      .join("")}
  </g>
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" fill="var(--art-ink,#43544B)" font-weight="600">
    <text x="210" y="150">Haymarket</text><text x="300" y="300">Gainesville</text><text x="392" y="272">Manassas</text>
    <text x="520" y="215">Bristow</text><text x="360" y="420">Woodbridge</text><text x="540" y="400">Dale City</text>
    <text x="185" y="466">Dumfries</text><text x="576" y="454">Occoquan</text>
  </g>
`,
    cls
  );
}

/* Scene F — abstract portrait / family conversation */
export function sceneFamily(cls = "art") {
  return S(
    "0 0 800 620",
    `
  <rect width="800" height="620" fill="var(--art-wall,#F2EEE6)"/>
  <circle cx="400" cy="300" r="250" fill="var(--art-accent,#DCE8DE)" opacity=".55"/>
  <circle cx="620" cy="130" r="70" fill="var(--art-sun,#F3D9A4)" opacity=".7"/>
  <g>
    <path d="M236 620c0-110 52-176 128-176s128 66 128 176Z" fill="#3E7C74"/>
    <circle cx="364" cy="386" r="58" fill="#D9A578"/>
    <path d="M306 374c0-40 24-62 58-62s58 22 58 62c-12-22-30-32-58-32s-46 10-58 32Z" fill="#4A3A30"/>
    <path d="M346 398c12 8 26 8 38 0" stroke="rgba(70,45,30,.6)" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  <g>
    <path d="M470 620c0-92 40-148 100-148s100 56 100 148Z" fill="#C98F6B"/>
    <circle cx="570" cy="412" r="48" fill="#E8BE96"/>
    <path d="M522 404c0-34 20-54 48-54s48 20 48 54c-10-18-26-26-48-26s-38 8-48 26Z" fill="#8B6B4A"/>
  </g>
  <g>
    <path d="M96 620c0-74 32-118 80-118s80 44 80 118Z" fill="#8C9BAE"/>
    <circle cx="176" cy="456" r="40" fill="#C68642"/>
    <path d="M136 448c0-28 16-44 40-44s40 16 40 44c-8-14-22-22-40-22s-32 8-40 22Z" fill="#2B2118"/>
  </g>
  <path d="M60 560c120-26 240-26 340 0s220 26 340 0" stroke="#FFF" stroke-width="4" fill="none" opacity=".5"/>
`,
    cls
  );
}

export const scenes = {
  living: sceneLivingRoom,
  kitchen: sceneKitchen,
  walk: sceneWalk,
  safety: sceneSafety,
  map: sceneMap,
  family: sceneFamily,
};

export function scene(name, cls = "art") {
  return (scenes[name] || sceneLivingRoom)(cls);
}
