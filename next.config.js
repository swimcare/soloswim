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
      //Review link Google
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
      // Borstcrawl Gevorderden Duur Editie 1
      {
        source: "/BCD1G1",
        destination: "https://vimeo.com/684925536/ec298872d1",
        permanent: true,
      },
      {
        source: "/BCD2G1",
        destination: "https://vimeo.com/684925707/a4259c5174",
        permanent: true,
      },
      {
        source: "/BCD3G1",
        destination: "https://vimeo.com/684925805/b0e901698f",
        permanent: true,
      },
      {
        source: "/BCD4G1",
        destination: "https://vimeo.com/684925975/709c9320f1",
        permanent: true,
      },
      {
        source: "/BCD5G1",
        destination: "https://vimeo.com/684926130/92e5f12719",
        permanent: true,
      },
      {
        source: "/BCD6G1",
        destination: "https://vimeo.com/684743812/92ca0eecce",
        permanent: true,
      },
      {
        source: "/BCD7G1",
        destination: "https://vimeo.com/684744010/c6543c1b07",
        permanent: true,
      },
      {
        source: "/BCD8G1",
        destination: "https://vimeo.com/684744198/6adcc685ef",
        permanent: true,
      },
      {
        source: "/BCD9G1",
        destination: "https://vimeo.com/684744393/b5a1a464e6",
        permanent: true,
      },
      {
        source: "/BCD10G1",
        destination: "https://vimeo.com/684744603/328f1deb15",
        permanent: true,
      },
    ];
  },
};
