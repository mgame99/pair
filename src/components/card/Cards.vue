<template>
  <div
    class="cards"
    :class="{
      'cards--animate': isAnimate,
      'cards--stop-animate': isStopAnimate,
    }"
  >
    <transition-group name="card" tag="ul" class="cards__list">
      <li
        v-for="(item, idx) in items"
        :key="item.id"
        class="card"
        @click="$emit('showCard', idx)"
        :class="{
          'card--active': item.isActive,
          'card--detected': item.isDetected,
        }"
      >
        <div class="card__items">
          <Card :itemName="item.name" />
        </div>
      </li>
    </transition-group>
    <!-- <button @click="$emit('changePosition', 1)">Change position</button> -->
    <div class="crads__block"></div>
  </div>
</template>
<script>
import Card from "../card/Card";
// import _ from "lodash";

export default {
  name: "Cards",
  props: {
    items: Object,
    // modelValue: null,
    // title: String,
    isAnimate: Boolean,
    isStopAnimate: Boolean,
  },
  // emits: ["changePosition", "showCard", "update:title"],
  emits: ["changePosition", "showCard"],
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {},
  // computed: {
  //   value: {
  //     get() {
  //       return this.modelValue;
  //     },
  //     set(value) {
  //       this.$emit("update:modelValue", value);
  //     },
  //   },
  // },
};
</script>

<style lang="scss">
.cards {
  position: relative;
  &--animate {
    pointer-events: none;
    .crads__block {
      z-index: 66;
      display: block;
    }
  }
  &--stop-animate {
    .card__items {
      transition: transform 0s ease-in;
    }
  }
}
.crads__block {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.card {
  display: inline-block;
  perspective: 1000px;
  margin: 10px;
  border-radius: 16px;
  cursor: pointer;
  // width: 110px;
  // height: 160px;
  transition: transform 0.2s linear;
  &:hover {
    transform: translate(-1.5px, -5px);
  }
  &--active,
  &--detected {
    cursor: default;
    &:hover {
      transform: translateY(0px);
    }
    .card__items {
      transform: rotateY(-180deg);
    }
  }
}
.card__items {
  position: relative;
  transform-style: preserve-3d;
  border-radius: inherit;
  transition: transform 0.5s ease-in;
  width: 166px;
  height: 236px;
}
.card-move {
  transition: transform 0.5s ease-in;
}
// .card--active {
//   opacity: 0.2;
// }
// .flip-enter-active,
// .flip-leave-active {
//   transition: all 1s ease;
// }
// .flip-enter-from,
// .flip-leave-to {
//   opacity: 0;
//   transform: translateY(30px);
// }
// .ss {
//   backface-visibility: visible;
//   animation-name: flip;
//   animation-duration: 2s;
//   animation-timing-function: ease-out;
//   animation-delay: 0s;
//   animation-iteration-count: 1;
//   animation-fill-mode: forwards;
// }
// @keyframes flip {
//   0% {
//     -webkit-transform: perspective(200px) scaleX(1) translateZ(0)
//       rotateY(-1turn);
//     transform: perspective(200px) scaleX(1) translateZ(0) rotateY(-1turn);
//   }
//   40% {
//     -webkit-transform: perspective(200px) scaleX(1) translateZ(150px)
//       rotateY(-190deg);
//     transform: perspective(200px) scaleX(1) translateZ(150px) rotateY(-190deg);
//   }
//   100% {
//     -webkit-transform: perspective(200px) scaleX(1) translateZ(150px)
//       rotateY(-190deg);
//     transform: perspective(200px) scaleX(1) translateZ(150px) rotateY(-190deg);
//   }
//   // 50% {
//   //   -webkit-transform: perspective(200px) scaleX(1) translateZ(150px)
//   //     rotateY(-170deg);
//   //   transform: perspective(200px) scaleX(1) translateZ(150px) rotateY(-170deg);
//   //   -webkit-animation-timing-function: ease-in;
//   //   animation-timing-function: ease-in;
//   // }
//   // 80% {
//   //   -webkit-transform: perspective(200px) scale3d(0.95, 0.95, 0.95)
//   //     translateZ(0) rotateY(0deg);
//   //   transform: perspective(200px) scale3d(0.95, 0.95, 0.95) translateZ(0)
//   //     rotateY(0deg);
//   //   -webkit-animation-timing-function: ease-in;
//   //   animation-timing-function: ease-in;
//   // }
//   // 100% {
//   //   -webkit-transform: perspective(200px) scaleX(1) translateZ(0) rotateY(0deg);
//   //   transform: perspective(200px) scaleX(1) translateZ(0) rotateY(0deg);
//   //   -webkit-animation-timing-function: ease-in;
//   //   animation-timing-function: ease-in;
//   // }
// }
</style>
