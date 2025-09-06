import {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "i.namu.wiki"}
    ]
  }
};

export default nextConfig;
