<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <a href="#" class="logo"><img src="../../assets/images/logo.svg" /></a>
      </div>
      <div class="burger" @click="toggleNav" :class="{ open: isNav }">
        <span class="burger__line--1"></span>
        <span class="burger__line--2"></span>
        <span class="burger__line--3"></span>
      </div>
    </div>
    <transition name="translate">
      <nav class="nav" v-show="isNav">
        <ul class="nav__list" id="main-nav">
          <li>
            <button class="btn nav__item">
              <span>{{ $t("rules") }}</span>
            </button>
          </li>
          <li>
            <button class="btn nav__item" @click="toggleSettings">
              <span>{{ $t("settings") }}</span>
              <svg
                class="arrow"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button class="btn nav__item">
              <span>{{ $t("feedback") }}</span>
            </button>
          </li>
          <li>
            <hr class="divider" />
          </li>
          <li>
            <button @click="$emit('reset')" class="btn nav__item">
              <span>{{ $t("reset") }}</span>
            </button>
          </li>
        </ul>
        <transition name="translate">
          <ul
            class="nav__list nav__list--child"
            id="settings-nav"
            v-show="isSettings"
          >
            <li>
              <button class="btn nav__item" @click="toggleSettings">
                <svg
                  class="arrow arrow--left"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"
                  ></path>
                </svg>
                <span>{{ $t("settings") }}</span>
              </button>
            </li>
            <li>
              <div class="nav__item">
                <div class="nav__title">{{ $t("settingsItems.size") }}:</div>
                <span
                  class="nav__item-name"
                  :class="{ active: !sizeCards.isScreen }"
                  >{{ $t("settingsItems.auto") }}</span
                >
                <Checkbox
                  :checkboxId="sizeCards.id"
                  :checkboxName="sizeCards.id"
                  :firstImage="sizeCards.firstImage"
                  :secondImage="sizeCards.secondImage"
                  v-model="sizeCards.isScreen"
                  @update:modelValue="sizeChanger"
                />
                <span
                  class="nav__item-name"
                  :class="{ active: sizeCards.isScreen }"
                  >{{ $t("settingsItems.screen") }}</span
                >
              </div>
            </li>
            <li>
              <div class="nav__item">
                <div class="nav__title">{{ $t("settingsItems.lang") }}:</div>
                <span class="nav__item-name" :class="{ active: !lang.isRus }"
                  >Eng</span
                >
                <Checkbox
                  :checkboxId="lang.id"
                  :checkboxName="lang.id"
                  :firstImage="lang.firstImage"
                  :secondImage="lang.secondImage"
                  v-model="lang.isRus"
                  @update:modelValue="langChanger"
                />
                <span class="nav__item-name" :class="{ active: lang.isRus }"
                  >Рус</span
                >
              </div>
            </li>
            <li>
              <div class="nav__item">
                <div class="nav__title">{{ $t("settingsItems.theme") }}:</div>
                <span
                  class="nav__item-name"
                  :class="{ active: !theme.isDark }"
                  >{{ $t("settingsItems.light") }}</span
                >
                <Checkbox
                  :isTheme="true"
                  :checkboxId="theme.id"
                  :checkboxName="theme.id"
                  v-model="theme.isDark"
                  :firstImage="theme.firstImage"
                  :secondImage="theme.secondImage"
                  @update:modelValue="themeChanger"
                />
                <span
                  class="nav__item-name"
                  :class="{ active: theme.isDark }"
                  >{{ $t("settingsItems.dark") }}</span
                >
              </div>
            </li>
          </ul>
        </transition>
      </nav>
    </transition>
  </header>
</template>

<script>
import Checkbox from "../custom/Checkbox";
export default {
  name: "Header",
  emits: ["reset"],
  components: {
    Checkbox,
  },
  props: {},
  data() {
    return {
      theme: {
        id: "theme-switcher",
        isDark: false,
        firstImage: require("@/assets/images/sun.svg"),
        secondImage: require("@/assets/images/moon.svg"),
      },
      sizeCards: {
        id: "size-cards",
        isScreen: false,
        firstImage: require("@/assets/images/auto-size.svg"),
        secondImage: require("@/assets/images/full-size.svg"),
      },
      lang: {
        id: "lang",
        isRus: false,
        firstImage: require("@/assets/images/en.svg"),
        secondImage: require("@/assets/images/ru.svg"),
      },
      isNav: false,
      isSettings: false,
    };
  },
  methods: {
    stop() {
      document.body.classList.add("pointer-none");
      setTimeout(() => {
        document.body.classList.remove("pointer-none");
      }, 500);
    },
    themeChanger() {
      this.stop();
      if (this.theme.isDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },
    toggleNav() {
      this.stop();
      this.isNav = !this.isNav;
    },
    toggleSettings() {
      this.stop();
      this.isSettings = !this.isSettings;
    },
    sizeChanger() {
      this.stop();
      if (this.sizeCards.isScreen) {
        document.documentElement.setAttribute("data-size", "load");
        setTimeout(() => {
          document.documentElement.setAttribute("data-size", "full");
          localStorage.setItem("size", "full");
        }, 200);
      } else {
        document.documentElement.setAttribute("data-size", "load");
        setTimeout(() => {
          document.documentElement.setAttribute("data-size", "auto");
          localStorage.setItem("size", "auto");
        }, 200);
      }
    },
    langChanger() {
      this.stop();
      if (this.lang.isRus) {
        document.documentElement.setAttribute("lang", "ru");
        //document.documentElement.setAttribute("data-lang", "ru");
        localStorage.setItem("lang", "ru");
        this.$i18n.locale = "ru";
      } else {
        //document.documentElement.setAttribute("data-lang", "en");
        document.documentElement.setAttribute("lang", "en");
        localStorage.setItem("lang", "en");
        this.$i18n.locale = "en";
      }
    },
  },
  computed: {
    currentTheme() {
      return localStorage.getItem("theme") || "light";
    },
    currentSize() {
      return localStorage.getItem("size") || "auto";
    },
    currentLang() {
      return localStorage.getItem("lang") || "en";
    },
  },
  created() {
    document.documentElement.setAttribute("data-theme", this.currentTheme);
    this.theme.isDark = this.currentTheme === "light" ? "false" : true;
    document.documentElement.setAttribute("data-size", this.currentSize);
    this.sizeCards.isScreen = this.currentSize === "auto" ? "false" : true;
    document.documentElement.setAttribute("lang", this.currentLang);
    this.lang.isRus = this.currentLang === "en" ? "false" : true;
    this.$i18n.locale = this.currentLang;
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_vars.scss";
.header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    transition: background-color 0.15s ease, box-shadow 0.15s ease;
    padding: 0 $containerSpace;
    height: 50px;
    box-shadow: 0 1px 2px 1px rgba($color: #005a63, $alpha: 0.1),
      0 1.5px 1px rgba($color: #005a63, $alpha: 0.18),
      0 0 1px rgba($color: #005a63, $alpha: 0.1);
    position: relative;
    z-index: 99;
  }
}
.logo {
  display: inline-flex;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
}
.burger {
  cursor: pointer;
  width: 25px;
  height: 20px;
  position: relative;
  z-index: 3;
  .burger__line {
    background-color: #04cbdf;
    border-radius: 10px;
    display: block;
    height: 4px;
    width: 100%;
    &--1 {
      @extend .burger__line;
      animation: line--1 0.4s linear;
    }
    &--2 {
      @extend .burger__line;
      margin: 4px 0;
      animation: line--2 0.4s linear;
    }
    &--3 {
      @extend .burger__line;
      animation: line--3 0.4s linear;
    }
  }
  &.open {
    // position: fixed;
    // right: 15px;
    // top: 25px;
    .burger__line--2 {
      animation: line--2-open 0.4s linear forwards;
    }
    .burger__line--1 {
      animation: line--1-open 0.4s linear forwards;
    }
    .burger__line--3 {
      animation: line--3-open 0.4s linear forwards;
    }
  }
}
@keyframes line--1-open {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, 8px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 8px, 0) rotate(45deg);
  }
}
@keyframes line--2-open {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes line--3-open {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, -8px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, -8px, 0) rotate(135deg);
  }
}
@keyframes line--1 {
  0% {
    transform: translate3d(0, 8px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 8px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}
@keyframes line--2 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes line--3 {
  0% {
    transform: translate3d(0, -8px, 0) rotate(135deg);
  }
  50% {
    transform: translate3d(0, -8px, 0) rotate(0);
  }

  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}
.nav {
  position: fixed;
  top: 49px;
  right: 0;
  height: calc((var(--vh, 1vh) * 100) - 50px);
  width: 30%;
  min-width: 300px;
  background-color: #fff;
  z-index: 98;
  // font-size: 20px;
  font-size: 16px;
  overflow: auto;
  padding: 20px 0;
  &__item {
    // padding: 13px 26px;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    &-name {
      flex: 0 0 50%;
      max-width: calc(50% - 22.5px);
      word-break: break-word;
      text-align: center;
      &.active {
        text-decoration: underline;
      }
      &:first-of-type {
        text-align: left;
      }
      &:last-of-type {
        text-align: right;
      }
    }
  }
  &__title {
    width: 100%;
    flex: 1 1 100%;
    margin-bottom: 10px;
  }
  &__list {
    &--child {
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      height: calc(100% - 40px);
      z-index: 2;
      background-color: inherit;
    }
  }
}
.translate-enter-active,
.translate-leave-active {
  transition: transform 0.5s ease-in !important;
}

.translate-enter-from,
.translate-leave-to {
  // opacity: 0;
  transform: translateX(100%);
}
.arrow {
  width: 20px;
  fill: rgba(5, 101, 216, 1);
  transition: fill 0.15s ease;
  &--left {
    transform: rotate(180deg);
  }
}
</style>
