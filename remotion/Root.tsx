import {
  AbsoluteFill,
  Composition,
  Folder,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SELECTED_FEATURED } from "../lib/projects";
import { DesignHubBrandReel } from "./DesignHubBrandReel";
import {
  FeaturedProjectProductCard,
  featuredProjectVideoDuration,
  featuredProjectVideoFps,
  featuredProjectVideoHeight,
  featuredProjectVideoWidth,
} from "./FeaturedProjectProductCard";

type FeaturedCardLoopProps = {
  projectSlug: string;
};

const fps = 30;
const durationInFrames = fps * 4;

function publicAsset(path: string) {
  if (path.startsWith("http")) return path;
  return staticFile(path.replace(/^\//, ""));
}

function FeaturedCardLoop({ projectSlug }: FeaturedCardLoopProps) {
  const frame = useCurrentFrame();
  const { fps: videoFps } = useVideoConfig();
  const project =
    SELECTED_FEATURED.find((item) => item.slug === projectSlug) ??
    SELECTED_FEATURED[0];

  const intro = spring({
    frame,
    fps: videoFps,
    config: { damping: 18, stiffness: 90, mass: 0.9 },
  });
  const shimmerX = interpolate(frame, [0, durationInFrames], [-40, 140]);
  const imageScale = interpolate(frame, [0, durationInFrames], [1.08, 1.0]);
  const cursorX = interpolate(frame, [22, 82, 132], [70, 78, 86], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorY = interpolate(frame, [22, 82, 132], [76, 50, 62], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorOpacity = interpolate(frame, [0, 18, 104, 120], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#080807",
        color: "white",
        fontFamily: "Inter, Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 42%, rgba(255,255,255,.16), transparent 44%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 820,
          height: 500,
          transform: `translate(-50%, -50%) translateY(${interpolate(
            intro,
            [0, 1],
            [36, 0]
          )}px) scale(${interpolate(intro, [0, 1], [0.96, 1])})`,
          opacity: intro,
          borderRadius: 34,
          overflow: "hidden",
          boxShadow: "0 40px 140px rgba(0,0,0,.5)",
          border: "1px solid rgba(255,255,255,.18)",
          background: "#121211",
        }}
      >
        <Img
          src={publicAsset(project.thumbnail)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${imageScale})`,
            filter: "saturate(1.04) contrast(1.02)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.1), transparent 42%, rgba(0,0,0,.72))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateX(${shimmerX}%) rotate(10deg)`,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent)",
            width: "34%",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 36,
            right: 36,
            bottom: 34,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.58)",
                marginBottom: 12,
              }}
            >
              Featured project
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: 52,
                lineHeight: 1,
              }}
            >
              {project.title}
            </div>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,.28)",
              borderRadius: 999,
              padding: "12px 18px",
              fontSize: 16,
              background: "rgba(0,0,0,.36)",
              backdropFilter: "blur(12px)",
            }}
          >
            View case ↗
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: `${cursorX}%`,
            top: `${cursorY}%`,
            width: 28,
            height: 28,
            borderRadius: "50%",
            opacity: cursorOpacity,
            background: "white",
            boxShadow: "0 0 0 10px rgba(255,255,255,.18)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
}

export function RemotionRoot() {
  return (
    <>
      <Folder name="Portfolio">
        <Composition
          id="FeaturedCardLoop"
          component={FeaturedCardLoop}
          durationInFrames={durationInFrames}
          fps={fps}
          width={1080}
          height={720}
          defaultProps={{ projectSlug: "smataste" }}
        />
        <Composition
          id="FeaturedProjectProductCard"
          component={FeaturedProjectProductCard}
          durationInFrames={featuredProjectVideoDuration}
          fps={featuredProjectVideoFps}
          width={featuredProjectVideoWidth}
          height={featuredProjectVideoHeight}
          defaultProps={{ projectSlug: "smataste" }}
        />
        <Composition
          id="DesignHubBrandReel"
          component={DesignHubBrandReel}
          durationInFrames={450}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
    </>
  );
}
