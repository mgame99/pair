<template>
  <div class="card-open" :class="itemName"></div>
  <div class="card-hide" :class="{ ww: visible }"></div>
</template>

<script>
export default {
  name: "Card",
  props: {
    itemName: null,
    itemShow: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import url(../../assets/styles/g.css);
.card-open {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 1;
  transform: rotateY(180deg);
  background-color: #ffffff;
  border: 2px solid #f37777;
}
.card-hide {
  z-index: 2;
  background-color: #f37777;
  background-image: radial-gradient(
      closest-side,
      transparent 90%,
      rgba(212, 0, 0, 0.3) 99%
    ),
    radial-gradient(closest-side, transparent 98%, rgba(212, 0, 0, 0.3) 99%);
  background-size: 15px 16px;
  background-position: 0 0, 7.5px 8px;
  transition: box-shadow 0.2s cubic-bezier(0.2, 0.6, 0.4, 1);
  &:hover {
    box-shadow: 2px 2px 2px 2px rgba($color: #5f3e3e, $alpha: 0.5);
  }
}
.card-open,
.card-hide {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: inherit;
  backface-visibility: hidden;
}
</style>
