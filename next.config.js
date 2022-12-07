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
  }
}

module.exports = nextConfig;