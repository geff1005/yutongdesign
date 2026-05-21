import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const hairArtifactFps = 30;
export const hairArtifactDuration = hairArtifactFps * 6;
export const hairArtifactWidth = 1080;
export const hairArtifactHeight = 1350;

const shots = [
  { src: "play/hair-reel/hair-03.jpg", x: -54, y: -18, s0: 1.12, s1: 1.21 },
  { src: "play/hair-reel/hair-02.png", x: 42, y: -8, s0: 1.1, s1: 1.18 },
  { src: "play/hair-reel/hair-07.png", x: -20, y: 22, s0: 1.13, s1: 1.2 },
  { src: "play/hair-reel/hair-04.jpg", x: 36, y: 14, s0: 1.08, s1: 1.17 },
  { src: "play/hair-reel/hair-08.png", x: -42, y: 6, s0: 1.11, s1: 1.19 },
  { src: "play/hair-reel/hair-05.jpg", x: 22, y: -26, s0: 1.09, s1: 1.18 },
  { src: "play/hair-reel/hair-09.png", x: -24, y: 16, s0: 1.12, s1: 1.22 },
  { src: "play/hair-reel/hair-01.jpg", x: 50, y: 2, s0: 1.1, s1: 1.18 },
  { src: "play/hair-reel/hair-06.jpg", x: -30, y: -10, s0: 1.08, s1: 1.16 },
];

const timelineShots = [...shots, shots[0], shots[1], shots[2]];

function clamp(frame: number, input: number[], output: number[]) {
  return interpolate(frame, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.82, 0.18, 1),
  });
}

export function HairArtifactReel() {
  const frame = useCurrentFrame();
  const beat = 16;
  const flashOpacity = clamp(frame % beat, [0, 2, 7], [0.24, 0.08, 0]);
  const pulse = clamp(frame, [0, 18, 70, hairArtifactDuration - 1], [0, 1, 0.35, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "#020202",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-18%",
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.12), transparent 34%), radial-gradient(circle at 36% 56%, rgba(58, 78, 255, 0.18), transparent 30%), radial-gradient(circle at 66% 38%, rgba(255, 80, 158, 0.16), transparent 34%)",
          opacity: 0.8,
        }}
      />
      {timelineShots.map((shot, index) => {
        const start = index * beat;
        const end = start + beat + 12;
        const local = frame - start;
        const opacity = clamp(frame, [start - 4, start, start + beat, end], [0, 1, 1, 0]);
        const scale = clamp(local, [0, beat + 12], [shot.s0, shot.s1]);
        const x = clamp(local, [0, beat + 12], [shot.x, shot.x * -0.42]);
        const y = clamp(local, [0, beat + 12], [shot.y, shot.y * -0.28]);
        const rotate = clamp(local, [0, beat + 12], [index % 2 === 0 ? -1.4 : 1.4, 0]);

        return (
          <Img
            key={`${shot.src}-${index}`}
            src={staticFile(shot.src)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity,
              transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`,
              filter: `contrast(${1.08 + pulse * 0.08}) saturate(${1.08 + pulse * 0.22})`,
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 34%, rgba(0,0,0,0.34) 68%, rgba(0,0,0,0.78) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,1)",
          opacity: flashOpacity,
          mixBlendMode: "overlay",
        }}
      />
    </AbsoluteFill>
  );
}
