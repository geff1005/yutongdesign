type Props = {
  label: string;
  hue?: number;
  dark?: boolean;
  className?: string;
};

export function PlaceholderImg({ label, hue = 220, dark = false, className = "work-img" }: Props) {
  const bg = dark ? "#0f0f10" : "#1a1a1c";
  const fg = `hsl(${hue}, 20%, 55%)`;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="16" height="16" fill="${bg}"/>
      <line x1="0" y1="0" x2="0" y2="16" stroke="${fg}" stroke-width="1" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#p)"/>
  <rect x="40" y="40" width="720" height="520" fill="none" stroke="${fg}" stroke-width="1" opacity="0.4"/>
  <text x="400" y="305" font-family="ui-monospace, Menlo, monospace" font-size="22" fill="${fg}" text-anchor="middle" opacity="0.85">${label}</text>
</svg>`;
  const url = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  return <img className={className} src={url} alt={label} />;
}
