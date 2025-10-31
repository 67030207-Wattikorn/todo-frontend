/** @type {import('next').NextConfig} */
const repoName = 'todo-frontend';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',   // ใช้ basePath เฉพาะ production
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
