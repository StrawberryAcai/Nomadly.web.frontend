import withPWA from "next-pwa";
import {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "i.namu.wiki"}
    ]
  }
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true
})(nextConfig);
