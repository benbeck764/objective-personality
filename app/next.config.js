/** @type {import('next').NextConfig} */

module.exports = {
  transpilePackages: ['objective-personality-data'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'objectivepersonalitysa.blob.core.windows.net',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'objectivepersonalitysa.blob.core.windows.net',
        pathname: '/images-new/**',
      },
    ],
    qualities: [100, 75],
    unoptimized: true,
  },
  output: 'standalone',
};
