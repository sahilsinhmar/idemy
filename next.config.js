/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.unsplash.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};
