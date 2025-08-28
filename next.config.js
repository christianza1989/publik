/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Įsitikink, kad šis domenas yra pridėtas
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
