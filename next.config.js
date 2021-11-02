module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    MONGODB_URL:
      "mongodb+srv://dbsoloswim:QEvPUarNGk3cWyS8@cluster0.g3azr.mongodb.net/soloswim?retryWrites=true&w=majority",
  },
};
