"use client";

import { useEffect, RefObject } from "react";

export function useHls(videoRef: RefObject<HTMLVideoElement | null>, src: string) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: { destroy: () => void } | undefined;
    let cancelled = false;

    if (!src) return; // No source — leave the <video> element empty.

    (async () => {
      const mod = await import("hls.js");
      const Hls = mod.default;
      if (cancelled || !video) return;
      if (Hls.isSupported()) {
        const instance = new Hls();
        instance.loadSource(src);
        instance.attachMedia(video);
        hls = instance;
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    })();

    return () => {
      cancelled = true;
      if (hls) hls.destroy();
    };
  }, [videoRef, src]);
}

// TODO: replace with Julian's own showreel HLS / mp4 once recorded.
export const HLS_SRC = "";
