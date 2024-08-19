/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/my-next-app/",
  basePath: "/my-next-app",
  trailingSlash: true, // 添加斜杠到生成的静态路径
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
