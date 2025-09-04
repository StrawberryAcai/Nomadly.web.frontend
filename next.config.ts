import withPWA from "next-pwa";
const nextConfig = {
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
