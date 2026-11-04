//@ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@nextjs-template/brand-weglow-surprise',
    '@nextjs-template/ui',
  ],
  allowedDevOrigins:['http://192.168.100.138:3000']
};

module.exports = nextConfig;
