import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "yutongdesign.art" }],
        destination: "https://julianz.space/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.yutongdesign.art" }],
        destination: "https://julianz.space/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
