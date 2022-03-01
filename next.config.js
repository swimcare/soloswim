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
      {
        source: "/BCK1G1",
        destination: "https://vimeo.com/681927971/a4a1b7ccb0",
        permanent: true,
      },
    ];
  },
};
