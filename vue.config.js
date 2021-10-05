module.exports = {
  devServer: {
    proxy: "https://prerelease.moqo.de/",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/rent-vehicle/" : "/",
};
