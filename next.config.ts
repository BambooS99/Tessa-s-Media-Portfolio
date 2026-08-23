import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 clamps every request to this allowlist (default is just [75]),
    // which was quietly softening the photography. Allow higher quality for
    // the portfolio galleries.
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
