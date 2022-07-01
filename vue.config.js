module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/pair/" : "/",
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prependData: `@import "@/assets/styles/_vars.scss";`,
        },
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      enableLegacy: false,
    },
  },
};
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/pair/" : "/",
  // pluginOptions: {
  //   i18n: {
  //     locale: "en",
  //     fallbackLocale: "en",
  //     localeDir: "locales",
  //     enableLegacy: true,
  //     runtimeOnly: false,
  //     compositionOnly: true,
  //     fullInstall: true,
  //   },
  // }
};
