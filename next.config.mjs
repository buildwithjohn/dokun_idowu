/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  // Exclude Sanity Studio from static generation
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
