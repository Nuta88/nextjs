const fs = require('fs');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: 'https://swapi.dev/api'
  },
  api: {
    bodyParser: false
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://swapi.dev/api/:path*'
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      setInterval(() => {
        fs.writeFileSync('api/data/users.json', JSON.stringify([], null, 4));
      }, 3600000);
    }

    return config;
  }
}

module.exports = nextConfig;