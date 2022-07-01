import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
// import i18n from "./i18n";
import { createI18n } from "vue-i18n/index";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      lvl: "Level",
      rules: "Rules",
      feedback: "Feedback",
      settings: "Settings",
      settingsItems: {
        size: "Cards size",
        auto: "Auto",
        screen: "Full screen",
        lang: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
      },
      reset: "Reset levels",
    },
    ru: {
      lvl: "Уровень",
      rules: "Правила",
      feedback: "Обратная связь",
      settings: "Настройки",
      settingsItems: {
        size: "Размер карт",
        auto: "Дефолтный",
        screen: "По экрану",
        lang: "Язык",
        theme: "Вид",
        light: "Светлый",
        dark: "Темный",
      },
      reset: "Сбросить уровни",
    },
  },
});

createApp(App).use(i18n).mount("#app");
