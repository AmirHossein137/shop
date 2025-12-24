/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admdev.restoyar.ir",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
