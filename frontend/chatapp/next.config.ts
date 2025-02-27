import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false ,
  output: 'export', // static export
  images: {
    unoptimized: true, // unoptimise
  },
};

export default nextConfig;
