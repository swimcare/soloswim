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
        source: "/bck1g1",
        destination: "https://vimeo.com/681927971/a4a1b7ccb0",
        permanent: true,
      },
      {
        source: "/bck1g2",
        destination: "https://vimeo.com/681928307/00669a8e37",
        permanent: true,
      },
      {
        source: "/bck1g3",
        destination: "https://vimeo.com/681927593/70ec14f016",
        permanent: true,
      },
      {
        source: "/bck1g4",
        destination: "https://vimeo.com/681929347/9440967576",
        permanent: true,
      },
      {
        source: "/bck1g5",
        destination: "https://vimeo.com/683953646/0d61810966",
        permanent: true,
      },
      {
        source: "/bck1g6",
        destination: "https://vimeo.com/683953943/de5b151735",
        permanent: true,
      },
      {
        source: "/bck1g7",
        destination: "https://vimeo.com/683954287/a0b9df98a3",
        permanent: true,
      },
      {
        source: "/bck1g8",
        destination: "https://vimeo.com/683954499/915eddbe49",
        permanent: true,
      },
      {
        source: "/bck1g9",
        destination: "https://vimeo.com/683953415/95c18f7e6a",
        permanent: true,
      },
      {
        source: "/bck1g10",
        destination: "https://vimeo.com/681900439/40a8a8a1d5",
        permanent: true,
      },
      // borstcrawl gevorderden duur editie 1
      {
        source: "/bcd1g1",
        destination: "https://vimeo.com/684925536/ec298872d1",
        permanent: true,
      },
      {
        source: "/bcd1g2",
        destination: "https://vimeo.com/684925707/a4259c5174",
        permanent: true,
      },
      {
        source: "/bcd1g3",
        destination: "https://vimeo.com/684925805/b0e901698f",
        permanent: true,
      },
      {
        source: "/bcd1g4",
        destination: "https://vimeo.com/684925975/709c9320f1",
        permanent: true,
      },
      {
        source: "/bcd1g5",
        destination: "https://vimeo.com/684926130/92e5f12719",
        permanent: true,
      },
      {
        source: "/bcd1g6",
        destination: "https://vimeo.com/684743812/92ca0eecce",
        permanent: true,
      },
      {
        source: "/bcd1g7",
        destination: "https://vimeo.com/684744010/c6543c1b07",
        permanent: true,
      },
      {
        source: "/bcd1g8",
        destination: "https://vimeo.com/684744198/6adcc685ef",
        permanent: true,
      },
      {
        source: "/bcd1g9",
        destination: "https://vimeo.com/684744393/b5a1a464e6",
        permanent: true,
      },
      {
        source: "/bcd1g10",
        destination: "https://vimeo.com/684744603/328f1deb15",
        permanent: true,
      },
      // borstcrawl gevorderden techniek editie 1
      {
        source: "/bct1g1",
        destination: "https://vimeo.com/683946574/c2035d25b2",
        permanent: true,
      },
      {
        source: "/bct1g2",
        destination: "https://vimeo.com/683947157/f6b5b1ae69",
        permanent: true,
      },
      {
        source: "/bct1g3",
        destination: "https://vimeo.com/683947525/143e1c6fae",
        permanent: true,
      },
      {
        source: "/bct1g4",
        destination: "https://vimeo.com/683947897/a19ccc9cea",
        permanent: true,
      },
      {
        source: "/bct1g5",
        destination: "https://vimeo.com/683948400/3da329ad20",
        permanent: true,
      },
      {
        source: "/bct1g6",
        destination: "https://vimeo.com/683948723/ef823d87b7",
        permanent: true,
      },
      {
        source: "/bct1g7",
        destination: "https://vimeo.com/683949029/1e20ecf429",
        permanent: true,
      },
      {
        source: "/bct1g8",
        destination: "https://vimeo.com/684741209/cbe18a9ef7",
        permanent: true,
      },
      {
        source: "/bct1g9",
        destination: "https://vimeo.com/684925352/bb4904b506",
        permanent: true,
      },
      {
        source: "/bct1g10",
        destination: "https://vimeo.com/684740918/8a45a8e11f",
        permanent: true,
      },
      // borstcrawl beginners duur editie 1
      {
        source: "/bcd1b1",
        destination: "https://vimeo.com/684924737/5d9950a07c",
        permanent: true,
      },
      {
        source: "/bcd1b2",
        destination: "https://vimeo.com/684924921/8d09bd83fd",
        permanent: true,
      },
      {
        source: "/bcd1b3",
        destination: "https://vimeo.com/684923937/c95ff10a1e",
        permanent: true,
      },
      {
        source: "/bcd1b4",
        destination: "https://vimeo.com/684924164/f9d047857d",
        permanent: true,
      },
      {
        source: "/bcd1b5",
        destination: "https://vimeo.com/684924502/222abc0cef",
        permanent: true,
      },
      {
        source: "/bcd1b6",
        destination: "https://vimeo.com/684742797/62319a44f6",
        permanent: true,
      },
      {
        source: "/bcd1b7",
        destination: "https://vimeo.com/684741724/cdac5e0bc0",
        permanent: true,
      },
      {
        source: "/bcd1b8",
        destination: "https://vimeo.com/684742060/e7a7a34cc8",
        permanent: true,
      },
      {
        source: "/bcd1b9",
        destination: "https://vimeo.com/684742370/12ba23645d",
        permanent: true,
      },
      {
        source: "/bcd1b10",
        destination: "https://vimeo.com/684742612/1d21097843",
        permanent: true,
      },
      //borstcrawl techniek semi-gevorderden
      {
        source: "/bct1s1",
        destination: "https://vimeo.com/685192421/d0ce0c68af",
        permanent: true,
      },
      {
        source: "/bct1s2",
        destination: "https://vimeo.com/685192058/651d9e807f",
        permanent: true,
      },
      // {
      //   source: "/bct1s3",
      //   destination: "https://vimeo.com/683947525/143e1c6fae",
      //   permanent: true,
      // },
      // {
      //   source: "/bct1s4",
      //   destination: "https://vimeo.com/683947897/a19ccc9cea",
      //   permanent: true,
      // },
      // {
      //   source: "/bct1s5",
      //   destination: "https://vimeo.com/683948400/3da329ad20",
      //   permanent: true,
      // },
      // {
      //   source: "/bct1s6",
      //   destination: "https://vimeo.com/683948723/ef823d87b7",
      //   permanent: true,
      // },
      // {
      //   source: "/bct1s7",
      //   destination: "https://vimeo.com/683949029/1e20ecf429",
      //   permanent: true,
      // },
      // {
      //   source: "/bct1s8",
      //   destination: "https://vimeo.com/684741209/cbe18a9ef7",
      //   permanent: true,
      // },
      // {
      //   source: "/bct1s9",
      //   destination: "https://vimeo.com/684925352/bb4904b506",
      //   permanent: true,
      // },
      // {
      //   source: "/bct1s10",
      //   destination: "https://vimeo.com/684740918/8a45a8e11f",
      //   permanent: true,
      // },
    ];
  },
};
