/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deploys anywhere (GitHub Pages, Vercel, any static host)
  output: "export",
  // GitHub Pages serves folders, not clean URLs — trailing slashes keep anchors working
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
