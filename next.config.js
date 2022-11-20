/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'petz.com.br',
        port: '',
        pathname: '/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao2-1280x720.jpg',
      },
    ],
  },
}
