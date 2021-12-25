// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `@import "@/assets/styles/_vars.scss";`
//       },
//     },
//   },
// };
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prependData: `@import "@/assets/styles/_vars.scss";`
        }
      },
    },
  },
};
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/pair/'
  : '/'
};
