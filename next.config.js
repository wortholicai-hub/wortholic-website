/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.automationanywhere.com",
      },
      {
        protocol: "https",
        hostname: "www.blueprism.com",
      },
      {
        protocol: "https",
        hostname: "www.pega.com",
      },
      {
        protocol: "https",
        hostname: "kissflow.com",
      },
      {
        protocol: "https",
        hostname: "www.tungstenautomation.com",
      },
    ],
  },
  // Enable compression
  compress: true,
};

module.exports = nextConfig;
