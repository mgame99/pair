<template>
  <li class="nav__item">
    <router-link :to="navLink" class="nav__link" v-if="isNavLink">
      {{ navItemName }}
    </router-link>
    <span class="nav__link" @click="$emit('navLinkClick', idx)" v-else>
      {{ navItemName }}
    </span>
  </li>
</template>

<script>
export default {
  name: "NavbarItem",
  props: {
    navItemName: String,
    navLink: null,
    isNavLink: Boolean,
  },
  emits: ["navLinkClick"],
  methods: {},
};
</script>

<style lang="scss"></style>
