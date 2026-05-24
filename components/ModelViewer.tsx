"use client";

import { useEffect } from "react";
import { createElement } from "react";

const MODEL_VIEWER_SRC =
  "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";

type ModelViewerProps = {
  src: string;
  poster?: string;
  title: string;
};

export function ModelViewer({ src, poster, title }: ModelViewerProps) {
  useEffect(() => {
    if (customElements.get("model-viewer")) return;
    if (document.querySelector(`script[src="${MODEL_VIEWER_SRC}"]`)) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = MODEL_VIEWER_SRC;
    document.head.appendChild(script);
  }, []);

  return createElement("model-viewer", {
    src,
    poster,
    alt: title,
    "camera-controls": true,
    "auto-rotate": true,
    "interaction-prompt": "auto",
    "shadow-intensity": "0.65",
    exposure: "0.9",
    loading: "lazy",
    reveal: "interaction",
    className: "case-model-viewer",
  });
}
