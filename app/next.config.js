/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'objectivepersonalitysa.blob.core.windows.net',
        pathname: '/images/**',
      },
    ],
  },
  output: 'standalone',
};
