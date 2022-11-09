/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/9sy2a0egs6zh/**",
      },
      {
        protocol: "https",
        hostname: "docs.walletconnect.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
        pathname: "/button",
      },
    ],
  },
};

module.exports = nextConfig;
