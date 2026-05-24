import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { CSSProperties, ReactNode } from "react";

export const featuredProjectVideoFps = 60;
export const featuredProjectVideoDuration = 696;
export const featuredProjectVideoWidth = 1920;
export const featuredProjectVideoHeight = 1330;

type Variant =
  | "mobile-food"
  | "agent-orbit"
  | "cms-pipeline"
  | "cockpit"
  | "film-system"
  | "device-explode"
  | "city-shift"
  | "ar-camera"
  | "poem-sculpture";

type FeaturedMotionProject = {
  slug: string;
  title: string;
  label: string;
  themeColor: string;
  accentColor: string;
  inkColor: string;
  secondaryColor: string;
  variant: Variant;
  sourceAssets: string[];
  motionCopy: string;
};

export const featuredMotionProjects: FeaturedMotionProject[] = [
  {
    slug: "smataste",
    title: "SmaTaste",
    label: "Taste memory",
    themeColor: "#D6E68A",
    accentColor: "#4F3422",
    inkColor: "#4F3422",
    secondaryColor: "#F7F4F2",
    variant: "mobile-food",
    sourceAssets: [
      "/thumbnails/smataste.jpg",
      "/work/smataste/app-home-screen.png",
      "/work/smataste/strategy/innovation-strategy.jpg",
    ],
    motionCopy: "AI dining signal",
  },
  {
    slug: "co-cerebral",
    title: "Cerebral Learning",
    label: "Six agents",
    themeColor: "#e7ff6f",
    accentColor: "#101410",
    inkColor: "#111510",
    secondaryColor: "#f8ffe8",
    variant: "agent-orbit",
    sourceAssets: [
      "/thumbnails/co-cerebral.jpg",
      "/work/co-cerebral/strategy/08-six-agents.jpg",
      "/work/co-cerebral/results/01-four-future-scenarios.jpg",
    ],
    motionCopy: "co-thinker room",
  },
  {
    slug: "skgplus",
    title: "SKG+",
    label: "Live archive",
    themeColor: "#0b1126",
    accentColor: "#64d9ff",
    inkColor: "#f6fbff",
    secondaryColor: "#172348",
    variant: "cms-pipeline",
    sourceAssets: [
      "/thumbnails/skgplus.jpg",
      "/work/skgplus/01-berlin-circle.jpg",
      "/work/skgplus/03-qingdao-beer-festival.jpg",
    ],
    motionCopy: "CMS publishes itself",
  },
  {
    slug: "beatrol",
    title: "BEATROL",
    label: "Fatigue cockpit",
    themeColor: "#b7c6d4",
    accentColor: "#21384f",
    inkColor: "#07111d",
    secondaryColor: "#eef4f8",
    variant: "cockpit",
    sourceAssets: [
      "/thumbnails/beatrol.jpg",
      "/work/beatrol/portfolio/03-tactile-wheel.jpg",
      "/work/beatrol/portfolio/04-multimodal-ai.jpg",
    ],
    motionCopy: "handover sequence",
  },
  {
    slug: "greenmove",
    title: "Healmove",
    label: "AI film",
    themeColor: "#dbeaa9",
    accentColor: "#2d5a35",
    inkColor: "#172013",
    secondaryColor: "#f2f8d4",
    variant: "film-system",
    sourceAssets: [
      "/work/greenmove/00-cover.png",
      "/work/greenmove/04-world-building.jpg",
      "/work/greenmove/05-ai-filming.jpg",
    ],
    motionCopy: "carbon health loop",
  },
  {
    slug: "poeticform",
    title: "Poetic Form",
    label: "Song Ci to sculpture",
    themeColor: "#f6f8ff",
    accentColor: "#1239d8",
    inkColor: "#091433",
    secondaryColor: "#edf3ff",
    variant: "poem-sculpture",
    sourceAssets: [
      "/work/poeticform/case/final-poem-sculptures.jpg",
      "/work/poeticform/case/workflow-overview.jpg",
      "/work/poeticform/case/exhibition-installation-room.jpg",
    ],
    motionCopy: "poem to spatial form",
  },
  {
    slug: "syncoe",
    title: "Synco-E",
    label: "BCI device",
    themeColor: "#d7e9ff",
    accentColor: "#1e6dff",
    inkColor: "#081327",
    secondaryColor: "#f7fbff",
    variant: "device-explode",
    sourceAssets: [
      "/thumbnails/syncoe.jpg",
      "/work/syncoe/portfolio/03-product-structure.jpg",
      "/work/syncoe/portfolio/04-platform.jpg",
    ],
    motionCopy: "esports neural layer",
  },
  {
    slug: "meta-station",
    title: "Meta Station",
    label: "HarmonyOS theme",
    themeColor: "#cfc3ff",
    accentColor: "#6b4dff",
    inkColor: "#130d2c",
    secondaryColor: "#efeaff",
    variant: "city-shift",
    sourceAssets: [
      "/thumbnails/meta-station.jpg",
      "/work/meta-station/portfolio/02-3d-scenes.jpg",
      "/work/meta-station/results/night0066--eagle-l2vlzbmu3o9ht.jpg",
    ],
    motionCopy: "day night lockscreen",
  },
  {
    slug: "bytedance",
    title: "ByteDance AR",
    label: "Effect House",
    themeColor: "#ffcfbd",
    accentColor: "#ff3b30",
    inkColor: "#210b0b",
    secondaryColor: "#fff1ea",
    variant: "ar-camera",
    sourceAssets: [
      "/work/bytedance/01-hero-football-baby.png",
      "/work/bytedance/02-football-model.png",
      "/work/bytedance/03-basketball-render.jpg",
    ],
    motionCopy: "camera effect loop",
  },
];

type Props = {
  projectSlug: string;
};

function asset(path: string) {
  return staticFile(path.replace(/^\//, ""));
}

function clamp(frame: number, input: [number, number], output: [number, number]) {
  return interpolate(frame, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
}

function CardImage({
  src,
  style,
}: {
  src: string;
  style: CSSProperties;
}) {
  return (
    <Img
      src={asset(src)}
      style={{
        position: "absolute",
        objectFit: "cover",
        borderRadius: 34,
        boxShadow: "0 44px 90px rgba(0,0,0,.18)",
        ...style,
      }}
    />
  );
}

function GlassPanel({
  children,
  style,
}: {
  children: ReactNode;
  style: CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: 30,
        background: "rgba(255,255,255,.72)",
        border: "1px solid rgba(255,255,255,.72)",
        boxShadow: "0 34px 70px rgba(0,0,0,.14)",
        backdropFilter: "blur(18px)",
        color: "#101010",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function DotField({
  project,
  progress,
}: {
  project: FeaturedMotionProject;
  progress: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.18,
        backgroundImage: `radial-gradient(${project.inkColor} 1.7px, transparent 1.7px)`,
        backgroundSize: "28px 28px",
        transform: `translate(${progress * -42}px, ${progress * 28}px)`,
        mixBlendMode: project.variant === "cms-pipeline" ? "screen" : "multiply",
      }}
    />
  );
}

function BrowserChrome({ project }: { project: FeaturedMotionProject }) {
  return (
    <div
      style={{
        height: 56,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 24px",
        color: project.inkColor,
        background: "rgba(255,255,255,.78)",
        borderBottom: "1px solid rgba(0,0,0,.06)",
      }}
    >
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: item === 0 ? project.accentColor : "rgba(0,0,0,.14)",
          }}
        />
      ))}
      <div
        style={{
          marginLeft: 16,
          height: 24,
          width: 250,
          borderRadius: 999,
          background: "rgba(0,0,0,.08)",
        }}
      />
    </div>
  );
}

function SmaTasteChip({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "matcha";
}) {
  const styles = {
    light: { background: "#fffaf4", color: "#4f3422" },
    dark: { background: "#4f3422", color: "#fffaf4" },
    matcha: { background: "#e7f3aa", color: "#4f3422" },
  };

  return (
    <div
      style={{
        ...styles[tone],
        height: 52,
        padding: "0 26px",
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: 850,
        letterSpacing: 0,
        whiteSpace: "nowrap",
        boxShadow: "0 14px 30px rgba(79,52,34,.09)",
      }}
    >
      {children}
    </div>
  );
}

function SmaTastePhone({
  children,
  dark = false,
  style,
}: {
  children: ReactNode;
  dark?: boolean;
  style: CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: 438,
        height: 830,
        borderRadius: 72,
        background: dark ? "#4f3422" : "#fffdf9",
        border: "14px solid #17110d",
        boxShadow: "0 54px 90px rgba(79,52,34,.32)",
        overflow: "hidden",
        color: dark ? "#fffaf4" : "#4f3422",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 18,
          width: 132,
          height: 34,
          borderRadius: 999,
          transform: "translateX(-50%)",
          background: "#17110d",
          opacity: dark ? 0.12 : 1,
          zIndex: 2,
        }}
      />
      {children}
    </div>
  );
}

function SmaTasteIndexScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: "104px 46px 40px" }}>
      <div style={{ fontSize: 22, letterSpacing: "0.1em", textTransform: "uppercase", color: "#777080", fontWeight: 750 }}>
        Smart Taste Index
      </div>
      <div style={{ marginTop: 24, display: "flex", alignItems: "flex-end", gap: 10 }}>
        <div style={{ fontSize: 146, lineHeight: 0.82, fontWeight: 900, letterSpacing: -8 }}>82</div>
        <div style={{ fontSize: 28, fontWeight: 850, opacity: 0.58, marginBottom: 14 }}>/ 100</div>
      </div>
      <div
        style={{
          marginTop: 48,
          background: "#d8eb83",
          borderRadius: 30,
          padding: "28px 30px",
          transform: "rotate(-4deg)",
          boxShadow: "0 28px 48px rgba(79,52,34,.12)",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.4 }}>Roasted pumpkin grain bowl</div>
        <div style={{ marginTop: 10, fontSize: 20, lineHeight: 1.2, opacity: 0.76 }}>
          Because you ate lighter at lunch.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 42 }}>
        {[
          ["energy", "light"],
          ["fibre", "+4 g"],
          ["stock", "pumpkin"],
          ["time", "25 min"],
        ].map(([label, value]) => (
          <div key={label} style={{ borderRadius: 20, background: "#f4efe9", padding: "16px 18px" }}>
            <div style={{ fontSize: 14, fontWeight: 850, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.46 }}>
              {label}
            </div>
            <div style={{ marginTop: 8, fontSize: 22, fontWeight: 900, letterSpacing: -0.2 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmaTasteWhyScreen() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: "118px 56px 48px" }}>
      <div style={{ color: "#d6e68a", fontSize: 21, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Why this
      </div>
      <div style={{ marginTop: 28, fontSize: 44, lineHeight: 0.94, fontWeight: 950, letterSpacing: -1.4 }}>
        Roasted pumpkin
        <br />
        grain bowl
      </div>
      <div style={{ marginTop: 32, fontSize: 23, lineHeight: 1.28, opacity: 0.84, maxWidth: 332 }}>
        Lunch was low on fibre, your mood note says tired, and the kitchen has roasted pumpkin and farro in stock today.
      </div>
      <div style={{ marginTop: 34, display: "grid", gap: 14 }}>
        {["personal taste memory", "canteen stock signal", "health goal match"].map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 11, height: 11, borderRadius: 999, background: "#d6e68a" }} />
            <span style={{ fontSize: 21, fontWeight: 800, opacity: 0.92 }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
        <SmaTasteChip tone="matcha">580 kcal</SmaTasteChip>
        <SmaTasteChip tone="dark">12 g fibre</SmaTasteChip>
      </div>
    </div>
  );
}

function VariantLayers({
  project,
  frame,
  progress,
  intro,
}: {
  project: FeaturedMotionProject;
  frame: number;
  progress: number;
  intro: number;
}) {
  const floatA = Math.sin(progress * Math.PI * 2);
  const floatB = Math.cos(progress * Math.PI * 2);
  const drift = clamp(frame, [0, featuredProjectVideoDuration], [-40, 40]);
  const imageOne = project.sourceAssets[0];
  const imageTwo = project.sourceAssets[1] ?? project.sourceAssets[0];
  const imageThree = project.sourceAssets[2] ?? project.sourceAssets[0];

  if (project.variant === "mobile-food") {
    const phoneShift = clamp(frame, [0, 220], [52, 0]);
    const indexLoad = clamp(frame, [40, 180], [18, 82]);

    return (
      <>
        <SmaTastePhone
          style={{
            left: 90 + phoneShift * 0.15,
            top: 108 + floatA * 9,
            transform: `rotate(-5.6deg) scale(${0.66 + intro * 0.06})`,
            zIndex: 5,
          }}
        >
          <SmaTasteIndexScreen />
        </SmaTastePhone>
        <SmaTastePhone
          dark
          style={{
            left: 306 - phoneShift * 0.1,
            top: 330 + floatB * 8,
            transform: `rotate(4.2deg) scale(${0.65 + intro * 0.06})`,
            zIndex: 6,
          }}
        >
          <SmaTasteWhyScreen />
        </SmaTastePhone>
        <CardImage
          src={imageOne}
          style={{
            right: 130,
            top: 130 + floatA * 8,
            width: 880,
            height: 500,
            borderRadius: 42,
            objectPosition: "center",
            transform: `rotate(${clamp(frame, [0, 150], [2.5, -1])}deg) scale(${0.96 + intro * 0.04})`,
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 845,
            top: 690,
            width: 600,
            padding: "30px 32px 32px",
            borderRadius: 34,
            background: "rgba(255,255,255,.58)",
            border: "1px solid rgba(255,255,255,.68)",
            boxShadow: "0 26px 64px rgba(79,52,34,.12)",
            backdropFilter: "blur(22px) saturate(140%)",
            color: "#4f3422",
            zIndex: 4,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.56 }}>
                Smart Taste Index
              </div>
              <div style={{ marginTop: 12, display: "flex", alignItems: "flex-end", gap: 8 }}>
                <span style={{ fontSize: 86, lineHeight: 0.82, fontWeight: 950, letterSpacing: -4 }}>82</span>
                <span style={{ fontSize: 25, fontWeight: 850, opacity: 0.52, marginBottom: 6 }}>/ 100</span>
              </div>
            </div>
            <div
              style={{
                height: 52,
                padding: "0 20px",
                borderRadius: 999,
                background: "#4f3422",
                color: "#fffaf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              why ready
            </div>
          </div>
          <div style={{ marginTop: 24, height: 22, borderRadius: 999, background: "rgba(79,52,34,.12)", overflow: "hidden" }}>
            <div
              style={{
                width: `${indexLoad}%`,
                height: "100%",
                borderRadius: 999,
                background: "linear-gradient(90deg, #4f3422, #d6e68a)",
                boxShadow: "0 0 28px rgba(214,230,138,.75)",
              }}
            />
          </div>
          <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
            {[
              ["Taste memory", 92],
              ["Health goal", 76],
              ["Kitchen stock", 88],
            ].map(([label, value], index) => (
              <div
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "142px 1fr 42px",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 850, opacity: 0.78 }}>{label}</span>
                <span style={{ height: 13, borderRadius: 999, background: "rgba(79,52,34,.11)", overflow: "hidden" }}>
                  <span
                    style={{
                      display: "block",
                      width: `${clamp(frame, [50 + index * 18, 180 + index * 18], [18, value as number])}%`,
                      height: "100%",
                      borderRadius: 999,
                      background: index === 1 ? "#d6e68a" : "#4f3422",
                    }}
                  />
                </span>
                <span style={{ fontSize: 17, fontWeight: 900, opacity: 0.68 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (project.variant === "agent-orbit") {
    return (
      <>
        <CardImage src={imageOne} style={{ left: 660, top: 265, width: 690, height: 560, opacity: 0.52 }} />
        {[0, 1, 2, 3, 4, 5].map((item) => {
          const angle = progress * Math.PI * 2 + item * (Math.PI / 3);
          return (
            <div
              key={item}
              style={{
                position: "absolute",
                left: 930 + Math.cos(angle) * 420,
                top: 560 + Math.sin(angle) * 245,
                width: item === 0 ? 150 : 108,
                height: item === 0 ? 150 : 108,
                borderRadius: 999,
                background: item % 2 ? project.accentColor : "#fff",
                boxShadow: `0 26px 70px ${project.accentColor}55`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
        <GlassPanel style={{ left: 250, bottom: 210, width: 560, padding: 34 }}>
          <MetricRows color={project.accentColor} copy="role orchestration" />
        </GlassPanel>
      </>
    );
  }

  if (project.variant === "cms-pipeline") {
    return (
      <>
        {[imageOne, imageTwo, imageThree].map((src, index) => (
          <CardImage
            key={src}
            src={src}
            style={{
              left: 270 + index * 430 + drift * (index + 1) * 0.45,
              top: 250 + index * 78,
              width: 520,
              height: 330,
              borderRadius: 38,
              transform: `rotate(${[-5, 2, -2][index]}deg)`,
            }}
          />
        ))}
        <div style={{ position: "absolute", left: 250, right: 250, bottom: 300, height: 3, background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }} />
        <GlassPanel style={{ right: 260, bottom: 190, width: 440, padding: 30 }}>
          <MetricRows color={project.accentColor} copy="sheet -> CMS -> live" dark />
        </GlassPanel>
      </>
    );
  }

  if (project.variant === "cockpit") {
    return (
      <>
        <CardImage src={imageOne} style={{ left: 500, top: 235, width: 940, height: 575, filter: "contrast(1.05) saturate(.92)" }} />
        <div style={{ position: "absolute", left: 330, top: 205, width: 1260, height: 720, borderRadius: "50%", border: `2px solid ${project.accentColor}55`, transform: `scale(${1 + progress * 0.08})` }} />
        <GlassPanel style={{ left: 250, bottom: 190, width: 500, padding: 34 }}>
          <MetricRows color={project.accentColor} copy="KSS fatigue state" />
        </GlassPanel>
        <GlassPanel style={{ right: 245, top: 210, width: 410, padding: 28 }}>
          <HudBars color={project.accentColor} progress={progress} />
        </GlassPanel>
      </>
    );
  }

  if (project.variant === "film-system") {
    return (
      <>
        {[imageOne, imageTwo, imageThree].map((src, index) => (
          <CardImage
            key={src}
            src={src}
            style={{
              left: 285 + index * 455,
              top: 250 + Math.sin(progress * Math.PI * 2 + index) * 22,
              width: 500,
              height: 360,
              borderRadius: 30,
              transform: `rotate(${[-4, 1.5, 5][index]}deg)`,
            }}
          />
        ))}
        <GlassPanel style={{ left: 330, bottom: 210, width: 520, padding: 34 }}>
          <MetricRows color={project.accentColor} copy="carbon account +37" />
        </GlassPanel>
        <div style={{ position: "absolute", right: 310, bottom: 245, width: 260, height: 260, borderRadius: 999, background: `conic-gradient(${project.accentColor} ${progress * 360}deg, rgba(255,255,255,.42) 0deg)` }} />
      </>
    );
  }

  if (project.variant === "device-explode") {
    return (
      <>
        {[0, 1, 2].map((item) => (
          <GlassPanel
            key={item}
            style={{
              left: 520 + item * 190 + floatA * 12,
              top: 250 + item * 94,
              width: 620,
              height: 270,
              padding: 0,
              overflow: "hidden",
              transform: `rotateY(${item * -8}deg) rotate(${item * 1.5}deg)`,
            }}
          >
            <Img src={asset([imageOne, imageTwo, imageThree][item])} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </GlassPanel>
        ))}
        <GlassPanel style={{ right: 260, bottom: 215, width: 450, padding: 32 }}>
          <MetricRows color={project.accentColor} copy="BCI sync / 86%" />
        </GlassPanel>
      </>
    );
  }

  if (project.variant === "city-shift") {
    const reveal = clamp(frame, [120, 420], [0, 1]);
    return (
      <>
        <CardImage src={imageOne} style={{ left: 345, top: 245, width: 640, height: 720 }} />
        <CardImage src={imageTwo} style={{ right: 340, top: 245, width: 640, height: 720, opacity: reveal }} />
        <div style={{ position: "absolute", left: 850, top: 235, width: 220, height: 740, borderRadius: 999, background: `linear-gradient(180deg, ${project.accentColor}, transparent)`, opacity: 0.42 }} />
        <GlassPanel style={{ left: 280, bottom: 185, width: 510, padding: 32 }}>
          <MetricRows color={project.accentColor} copy="lockscreen as place" />
        </GlassPanel>
      </>
    );
  }

  if (project.variant === "poem-sculpture") {
    const scan = clamp(frame, [70, 430], [0, 1]);
    const poemLines = [
      "imagery",
      "emotion",
      "prompt schema",
      "ComfyUI",
      "3D reconstruction",
    ];

    return (
      <>
        <CardImage
          src={imageTwo}
          style={{
            left: 230,
            top: 215 + floatA * 12,
            width: 640,
            height: 430,
            borderRadius: 32,
            objectPosition: "center",
            transform: `rotate(${clamp(frame, [0, 160], [-3, 1])}deg) scale(${0.96 + intro * 0.04})`,
          }}
        />
        <CardImage
          src={imageOne}
          style={{
            right: 245,
            top: 230 + floatB * 14,
            width: 760,
            height: 520,
            borderRadius: 36,
            objectPosition: "center",
            transform: `rotate(${clamp(frame, [0, 180], [4, -1.5])}deg) scale(${0.97 + intro * 0.03})`,
          }}
        />
        <CardImage
          src={imageThree}
          style={{
            left: 515,
            bottom: 175,
            width: 650,
            height: 360,
            borderRadius: 34,
            objectPosition: "center",
            opacity: 0.9,
            transform: `translateX(${drift * 0.42}px) rotate(-2deg)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 1010,
            top: 250,
            width: 3,
            height: 590,
            background: `linear-gradient(180deg, transparent, ${project.accentColor}, transparent)`,
            transform: `translateX(${scan * 360 - 170}px)`,
            boxShadow: `0 0 34px ${project.accentColor}`,
            opacity: 0.82,
          }}
        />
        {[0, 1, 2, 3].map((item) => {
          const angle = progress * Math.PI * 2 + item * 1.45;
          return (
            <div
              key={item}
              style={{
                position: "absolute",
                left: 1025 + Math.cos(angle) * (210 + item * 12),
                top: 675 + Math.sin(angle) * (78 + item * 8),
                width: 92 + item * 18,
                height: 92 + item * 18,
                borderRadius: item % 2 ? "52% 48% 58% 42%" : "42% 58% 45% 55%",
                background: `radial-gradient(circle at 32% 22%, rgba(255,255,255,.95), ${project.secondaryColor} 42%, ${project.accentColor}55)`,
                border: "1px solid rgba(255,255,255,.78)",
                boxShadow: `0 22px 66px ${project.accentColor}36`,
                transform: "translate(-50%, -50%)",
                opacity: 0.76,
              }}
            />
          );
        })}
        <GlassPanel style={{ left: 255, bottom: 210, width: 470, padding: 32 }}>
          <MetricRows color={project.accentColor} copy="human AI workflow" />
        </GlassPanel>
        <GlassPanel style={{ right: 310, bottom: 185, width: 440, padding: "30px 34px" }}>
          <div style={{ fontFamily: "Inter, Arial, sans-serif", color: project.inkColor }}>
            <div style={{ fontSize: 20, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.56, marginBottom: 18 }}>
              translation layer
            </div>
            {poemLines.map((line, index) => (
              <div key={line} style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
                <div style={{ width: 10, height: 10, borderRadius: 999, background: index === 3 ? project.accentColor : "rgba(9,20,51,.24)" }} />
                <div style={{ fontSize: 22, fontWeight: 700 }}>{line}</div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </>
    );
  }

  return (
    <>
      <GlassPanel style={{ left: 380, top: 190, width: 520, height: 850, padding: 24 }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 54, background: "#111", overflow: "hidden", position: "relative" }}>
          <Img src={asset(imageOne)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 30, borderRadius: 44, border: "2px solid rgba(255,255,255,.38)" }} />
        </div>
      </GlassPanel>
      <CardImage src={imageTwo} style={{ right: 350, top: 285, width: 560, height: 430, transform: `rotate(${4 + floatB * 1.5}deg)` }} />
      <div style={{ position: "absolute", right: 370, bottom: 235, width: 360, height: 360, borderRadius: 999, background: `radial-gradient(circle, ${project.accentColor}, transparent 68%)`, filter: "blur(4px)" }} />
      <GlassPanel style={{ right: 255, bottom: 210, width: 450, padding: 32 }}>
        <MetricRows color={project.accentColor} copy="AR effect / live" />
      </GlassPanel>
    </>
  );
}

function MetricRows({
  color,
  copy,
  dark = false,
}: {
  color: string;
  copy: string;
  dark?: boolean;
}) {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", color: dark ? "#f7fbff" : "#111" }}>
      <div style={{ fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.58, marginBottom: 18 }}>
        {copy}
      </div>
      {[0, 1, 2].map((item) => (
        <div key={item} style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 12 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: color }} />
          <div style={{ height: 14, width: 230 - item * 45, borderRadius: 999, background: dark ? "rgba(255,255,255,.28)" : "rgba(0,0,0,.12)" }} />
        </div>
      ))}
    </div>
  );
}

function HudBars({ color, progress }: { color: string; progress: number }) {
  return (
    <div>
      {[0, 1, 2, 3].map((item) => (
        <div key={item} style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 18, letterSpacing: ".12em", color: "rgba(0,0,0,.54)", marginBottom: 8 }}>STATE_0{item + 1}</div>
          <div style={{ height: 16, borderRadius: 999, background: "rgba(0,0,0,.1)", overflow: "hidden" }}>
            <div style={{ width: `${42 + ((progress * 100 + item * 18) % 50)}%`, height: "100%", borderRadius: 999, background: color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function FeaturedProjectProductCard({ projectSlug }: Props) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const project =
    featuredMotionProjects.find((item) => item.slug === projectSlug) ??
    featuredMotionProjects[0];
  const progress = frame / featuredProjectVideoDuration;
  const intro = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 82, mass: 0.92 },
  });
  const glowX = interpolate(frame, [0, featuredProjectVideoDuration], [-20, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: project.themeColor,
        color: project.inkColor,
        overflow: "hidden",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <DotField project={project} progress={progress} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${44 + progress * 10}% 42%, rgba(255,255,255,.74), transparent 34%),
            radial-gradient(circle at 76% 72%, ${project.accentColor}33, transparent 32%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 1700,
          height: 1110,
          transform: `translate(-50%, -50%) translateY(${(1 - intro) * 54}px) scale(${0.965 + intro * 0.035})`,
          opacity: clamp(frame, [0, 54], [0, 1]),
          borderRadius: 58,
          overflow: "hidden",
          background: `linear-gradient(145deg, rgba(255,255,255,.36), ${project.secondaryColor}88)`,
          boxShadow: "0 90px 180px rgba(0,0,0,.18)",
        }}
      >
        {project.variant !== "mobile-food" && <BrowserChrome project={project} />}
        <VariantLayers project={project} frame={frame} progress={progress} intro={intro} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateX(${glowX}%) rotate(9deg)`,
            width: "30%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,.34), transparent)",
            mixBlendMode: "screen",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 62,
            bottom: 52,
            display: "flex",
            alignItems: "center",
            gap: 18,
            padding: "16px 22px",
            borderRadius: 999,
            background: "rgba(255,255,255,.62)",
            backdropFilter: "blur(14px)",
            color: project.inkColor,
            boxShadow: "0 24px 48px rgba(0,0,0,.12)",
          }}
        >
          <span style={{ width: 14, height: 14, borderRadius: 999, background: project.accentColor }} />
          <span style={{ fontSize: 24, fontWeight: 700 }}>{project.label}</span>
        </div>
        {project.variant !== "mobile-food" && (
          <div
            style={{
              position: "absolute",
              right: 62,
              top: 84,
              textAlign: "right",
              color: project.inkColor,
            }}
          >
            <div style={{ fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.56 }}>
              {project.motionCopy}
            </div>
            <div style={{ marginTop: 12, fontSize: 72, lineHeight: 0.95, fontWeight: 850, letterSpacing: "-0.055em" }}>
              {project.title}
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
}
