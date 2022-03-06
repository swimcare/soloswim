module.exports = {
  // FOR HANDLING SVG IMPORTS
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // DATABASE URL
  env: {
    MONGODB_URL:
      "mongodb+srv://dbsoloswim:QEvPUarNGk3cWyS8@cluster0.g3azr.mongodb.net/soloswim?retryWrites=true&w=majority",
  },
  // REDIRECT URLS FOR QR CODES ON TRAINING SCHEDULES
  async redirects() {
    return [
      {
        source: "/review",
        destination: "https://g.page/r/CRxat-X_lZvOEAg/review",
        permanent: true,
      },
      // Borstcrawl Gevorderden Kracht Editie 1
      {
        source: "/BCK1G1",
        destination: "https://vimeo.com/681927971/a4a1b7ccb0",
        permanent: true,
      },
      {
        source: "/BCK2G1",
        destination: "https://vimeo.com/681928307/00669a8e37",
        permanent: true,
      },
      {
        source: "/BCK3G1",
        destination: "https://vimeo.com/681927593/70ec14f016",
        permanent: true,
      },
      {
        source: "/BCK4G1",
        destination: "https://vimeo.com/681929347/9440967576",
        permanent: true,
      },
      {
        source: "/BCK5G1",
        destination: "https://vimeo.com/683953646/0d61810966",
        permanent: true,
      },
      {
        source: "/BCK6G1",
        destination: "https://vimeo.com/683953943/de5b151735",
        permanent: true,
      },
      {
        source: "/BCK7G1",
        destination: "https://vimeo.com/683954287/a0b9df98a3",
        permanent: true,
      },
      {
        source: "/BCK8G1",
        destination: "https://vimeo.com/683954499/915eddbe49",
        permanent: true,
      },
      {
        source: "/BCK9G1",
        destination: "https://vimeo.com/683953415/95c18f7e6a",
        permanent: true,
      },
      {
        source: "/BCK10G1",
        destination: "https://vimeo.com/681900439/40a8a8a1d5",
        permanent: true,
      },
    ];
  },
};
