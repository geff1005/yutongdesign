import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const palette = {
  ink: "#11110f",
  paper: "#f5f1e6",
  white: "#fffaf0",
  acid: "#c8ff3d",
  blue: "#2457ff",
  coral: "#ff6b4a",
  mint: "#6fe0bc",
};

type ProjectTile = {
  title: string;
  meta: string;
  image: string;
  accent: string;
};

const projectTiles: ProjectTile[] = [
  {
    title: "Co-Cerebral",
    meta: "Agentic learning",
    image: "work/co-cerebral/strategy/08-six-agents.jpg",
    accent: palette.acid,
  },
  {
    title: "SmaTaste",
    meta: "AI service design",
    image: "work/smataste/results/prototype-all.jpg",
    accent: palette.coral,
  },
  {
    title: "SKG+",
    meta: "Web system",
    image: "work/skgplus/strategy/function-section-draft-planning.jpg",
    accent: palette.blue,
  },
  {
    title: "ByteDance AR",
    meta: "Effect pipeline",
    image: "work/bytedance/01-hero-football-baby.png",
    accent: palette.mint,
  },
];

const caseStudyPictures = [
  "work/smataste/research/research-and-evaluation.jpg",
  "work/co-cerebral/strategy/01-learning-transformation-roadmap.jpg",
  "work/smataste/strategy/validation-process.jpg",
  "work/skgplus/research/weixin-image-20260306074435-104-3008.jpg",
  "work/beatrol/portfolio/02-system-prototype.jpg",
  "work/syncoe/portfolio/03-product-structure.jpg",
  "work/sprayscape/portfolio/02-service-design.jpg",
  "work/co-cerebral/results/01-four-future-scenarios.jpg",
];

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

function slideIn(frame: number, fps: number, delaySeconds: number) {
  return interpolate(frame, [delaySeconds * fps, delaySeconds * fps + 0.8 * fps], [0, 1], {
    ...clamp,
    easing: ease,
  });
}

function WordBlock({
  children,
  start,
  x = 0,
  y = 0,
  size = 142,
  color = palette.ink,
}: {
  children: React.ReactNode;
  start: number;
  x?: number;
  y?: number;
  size?: number;
  color?: string;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = slideIn(frame, fps, start);
  const out = interpolate(frame, [3.25 * fps, 3.7 * fps], [1, 0], clamp);

  return (
    <div
      style={{
        position: "absolute",
        left: 92 + x,
        top: 74 + y,
        color,
        fontFamily: "Arial Black, Arial, Helvetica, sans-serif",
        fontSize: size,
        lineHeight: 0.88,
        letterSpacing: 0,
        opacity: t * out,
        transform: `translateY(${interpolate(t, [0, 1], [84, 0])}px) scale(${interpolate(t, [0, 1], [0.96, 1])})`,
      }}
    >
      {children}
    </div>
  );
}

function EditorialOpener() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sweep = interpolate(frame, [0, 3.6 * fps], [-45, 116], clamp);
  const pill = interpolate(frame, [0.7 * fps, 1.4 * fps], [0, 1], {
    ...clamp,
    easing: ease,
  });

  return (
    <AbsoluteFill style={{ background: palette.paper, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, transparent 0%, transparent 45%, rgba(36,87,255,.16) 45%, rgba(36,87,255,.16) 55%, transparent 55%)",
          transform: `translateX(${sweep}%)`,
        }}
      />
      {caseStudyPictures.slice(0, 4).map((image, index) => {
        const t = slideIn(frame, fps, 0.26 + index * 0.16);
        const positions = [
          { left: 1020, top: 122, width: 420, height: 248, rotate: -4 },
          { left: 1360, top: 242, width: 390, height: 286, rotate: 3 },
          { left: 970, top: 538, width: 500, height: 302, rotate: 2 },
          { left: 1460, top: 620, width: 330, height: 238, rotate: -5 },
        ][index];

        return (
          <div
            key={image}
            style={{
              position: "absolute",
              left: positions.left,
              top: positions.top,
              width: positions.width,
              height: positions.height,
              borderRadius: 16,
              overflow: "hidden",
              opacity: t * 0.9,
              transform: `translateY(${interpolate(t, [0, 1], [72, 0])}px) rotate(${positions.rotate}deg)`,
              boxShadow: "0 28px 70px rgba(17,17,15,.18)",
              border: "2px solid rgba(17,17,15,.12)",
            }}
          >
            <Img
              src={staticFile(image)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `scale(${interpolate(frame, [0, 3.8 * fps], [1.08, 1.01])})`,
              }}
            />
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          right: 88,
          top: 68,
          width: 280,
          height: 280,
          borderRadius: 32,
          background: palette.acid,
          transform: `rotate(${interpolate(frame, [0, 3.6 * fps], [-8, 8])}deg) scale(${interpolate(
            pill,
            [0, 1],
            [0.2, 1]
          )})`,
        }}
      />
      <WordBlock start={0.1}>MAKE</WordBlock>
      <WordBlock start={0.45} y={138} x={230} size={126} color={palette.blue}>
        THE
      </WordBlock>
      <WordBlock start={0.8} y={266} size={178}>
        NEW
      </WordBlock>
      <WordBlock start={1.08} y={424} x={426} size={108} color={palette.coral}>
        NORMAL
      </WordBlock>
      <div
        style={{
          position: "absolute",
          left: 96,
          bottom: 88,
          width: 720,
          color: palette.ink,
          fontSize: 34,
          lineHeight: 1.12,
          fontFamily: "Arial, Helvetica, sans-serif",
          opacity: interpolate(frame, [1.5 * fps, 2.1 * fps, 3.3 * fps, 3.7 * fps], [0, 1, 1, 0], clamp),
        }}
      >
        A portfolio motion system for design work that thinks, ships, and keeps moving.
      </div>
    </AbsoluteFill>
  );
}

function Tile({ tile, index }: { tile: ProjectTile; index: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localStart = index * 0.16;
  const t = slideIn(frame, fps, localStart);
  const x = [90, 602, 1114, 344][index];
  const y = [118, 70, 154, 538][index];
  const w = [470, 452, 496, 598][index];
  const h = [360, 420, 330, 318][index];
  const drift = interpolate(frame, [0, 4 * fps], [0, index % 2 === 0 ? -34 : 28]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        borderRadius: 18,
        overflow: "hidden",
        background: tile.accent,
        opacity: t,
        transform: `translateY(${interpolate(t, [0, 1], [100, drift])}px) rotate(${[-3, 2, -1.5, 1][index]}deg)`,
        boxShadow: "0 34px 80px rgba(0,0,0,.28)",
      }}
    >
      <Img
        src={staticFile(tile.image)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${interpolate(frame, [0, 4 * fps], [1.12, 1.02])})`,
          filter: "saturate(1.08) contrast(1.04)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.72))",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 24,
          right: 24,
          bottom: 22,
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ fontSize: 19, opacity: 0.72, marginBottom: 6 }}>{tile.meta}</div>
        <div style={{ fontSize: 42, lineHeight: 0.96, fontWeight: 800, letterSpacing: 0 }}>{tile.title}</div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 18,
          top: 18,
          width: 54,
          height: 54,
          borderRadius: 999,
          background: tile.accent,
          border: "3px solid rgba(255,255,255,.9)",
        }}
      />
    </div>
  );
}

function MosaicScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const title = interpolate(frame, [0.2 * fps, 0.95 * fps], [0, 1], {
    ...clamp,
    easing: ease,
  });

  return (
    <AbsoluteFill style={{ background: palette.ink, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 76,
          top: 48,
          color: palette.white,
          fontFamily: "Arial Black, Arial, Helvetica, sans-serif",
          fontSize: 88,
          lineHeight: 0.9,
          letterSpacing: 0,
          opacity: title * 0.86,
          transform: `translateX(${interpolate(title, [0, 1], [-80, 0])}px)`,
        }}
      >
        DESIGN
        <br />
        IN MOTION
      </div>
      <div
        style={{
          position: "absolute",
          right: 78,
          bottom: 76,
          width: 365,
          color: palette.white,
          opacity: interpolate(frame, [1 * fps, 1.6 * fps], [0, 1], clamp),
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 30,
          lineHeight: 1.08,
        }}
      >
        Product clarity from Bending Spoons. Studio energy from Shopify Design.
      </div>
      {projectTiles.map((tile, index) => (
        <Tile key={tile.title} tile={tile} index={index} />
      ))}
    </AbsoluteFill>
  );
}

function EvidenceStrip() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        position: "absolute",
        left: 70,
        right: 70,
        bottom: 66,
        height: 250,
        display: "flex",
        gap: 18,
      }}
    >
      {caseStudyPictures.slice(4).map((image, index) => {
        const t = slideIn(frame, fps, 0.45 + index * 0.11);

        return (
          <div
            key={image}
            style={{
              flex: 1,
              borderRadius: 16,
              overflow: "hidden",
              opacity: t,
              transform: `translateY(${interpolate(t, [0, 1], [58, 0])}px)`,
              border: "2px solid rgba(17,17,15,.15)",
              boxShadow: "0 26px 60px rgba(17,17,15,.16)",
            }}
          >
            <Img
              src={staticFile(image)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `scale(${interpolate(frame, [0, 3.8 * fps], [1.04, 1.01])})`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function Metric({
  value,
  label,
  left,
  color,
  delay,
}: {
  value: string;
  label: string;
  left: number;
  color: string;
  delay: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = slideIn(frame, fps, delay);

  return (
    <div
      style={{
        position: "absolute",
        left,
        top: 286,
        width: 430,
        color: palette.ink,
        opacity: t,
        transform: `translateY(${interpolate(t, [0, 1], [80, 0])}px)`,
      }}
    >
      <div
        style={{
          fontFamily: "Arial Black, Arial, Helvetica, sans-serif",
          fontSize: 126,
          lineHeight: 0.84,
          letterSpacing: 0,
          color,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 22,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 32,
          lineHeight: 1.04,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function MetricsScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const stripe = interpolate(frame, [0, 3.8 * fps], [-20, 20]);

  return (
    <AbsoluteFill style={{ background: palette.white, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: -120,
          right: -120,
          top: 78,
          height: 100,
          background: palette.ink,
          transform: `rotate(-2deg) translateX(${stripe}px)`,
          color: palette.white,
          fontFamily: "Arial Black, Arial, Helvetica, sans-serif",
          fontSize: 58,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: 0,
        }}
      >
        SMALL TEAMS / DENSE SYSTEMS / LIVE PROTOTYPES
      </div>
      <Metric value="6" label="embodied AI agents for collective reasoning" left={110} color={palette.blue} delay={0.3} />
      <Metric value="170+" label="works turned into a maintainable publishing flow" left={738} color={palette.coral} delay={0.55} />
      <Metric value="10K+" label="public views across shipped AR effects" left={1366} color={palette.mint} delay={0.8} />
      <EvidenceStrip />
      <div
        style={{
          position: "absolute",
          left: 90,
          bottom: 350,
          width: 1740,
          borderTop: `3px solid ${palette.ink}`,
          color: palette.ink,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 28,
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>research evidence</span>
        <span>interaction prototypes</span>
        <span>portfolio-ready narrative</span>
      </div>
    </AbsoluteFill>
  );
}

function ClosingScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const reveal = interpolate(frame, [0.2 * fps, 1.1 * fps], [0, 1], {
    ...clamp,
    easing: ease,
  });
  const panel = interpolate(frame, [1.2 * fps, 2 * fps], [0, 1], {
    ...clamp,
    easing: ease,
  });

  return (
    <AbsoluteFill style={{ background: palette.blue, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(200,255,61,.92) 0%, rgba(200,255,61,.92) 37%, transparent 37%, transparent 100%)",
          transform: `translateX(${interpolate(reveal, [0, 1], [-70, 0])}%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 92,
          top: 96,
          color: palette.ink,
          fontFamily: "Arial Black, Arial, Helvetica, sans-serif",
          fontSize: 156,
          lineHeight: 0.86,
          letterSpacing: 0,
          opacity: reveal,
          transform: `translateY(${interpolate(reveal, [0, 1], [90, 0])}px)`,
        }}
      >
        BUILD
        <br />
        THE NEXT
        <br />
        INTERFACE
      </div>
      <div
        style={{
          position: "absolute",
          right: 92,
          bottom: 90,
          width: 650,
          padding: "36px 42px",
          borderRadius: 24,
          color: palette.white,
          background: "rgba(17,17,15,.88)",
          fontFamily: "Arial, Helvetica, sans-serif",
          opacity: panel,
          transform: `translateY(${interpolate(panel, [0, 1], [70, 0])}px)`,
        }}
      >
        <div style={{ fontSize: 30, opacity: 0.7, marginBottom: 20 }}>Design Hub Reel</div>
        <div style={{ fontSize: 58, lineHeight: 0.98, fontWeight: 800, letterSpacing: 0 }}>
          From raw work to a moving portfolio system.
        </div>
      </div>
    </AbsoluteFill>
  );
}

export function DesignHubBrandReel() {
  return (
    <AbsoluteFill style={{ background: palette.ink }}>
      <Sequence durationInFrames={120}>
        <EditorialOpener />
      </Sequence>
      <Sequence from={108} durationInFrames={132}>
        <MosaicScene />
      </Sequence>
      <Sequence from={228} durationInFrames={114}>
        <MetricsScene />
      </Sequence>
      <Sequence from={330} durationInFrames={120}>
        <ClosingScene />
      </Sequence>
    </AbsoluteFill>
  );
}
