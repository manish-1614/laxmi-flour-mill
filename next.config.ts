import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/laxmi-flour-mill",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
