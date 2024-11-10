import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['image.slidesdocs.com' , 'img.freepik.com'],  // Add the domain you're trying to load the image from
  },
};

export default nextConfig;
