import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package.json higher up (e.g. in Documents) makes Turbopack infer
  // the wrong workspace root, breaking module resolution — pin it here.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
