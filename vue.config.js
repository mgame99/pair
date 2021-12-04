module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_vars.scss";`,
      },
    },
  },
};
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/pair/'
  : '/'
}