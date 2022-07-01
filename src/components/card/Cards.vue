<template>
  <div
    class="cards"
    :class="{
      'cards--animate': isAnimate,
      'cards--stop-animate': isStopAnimate,
    }"
  >
    <!-- :style="{ '--count': items.length }" -->
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
  height: calc((var(--vh, 1vh) * 100) - 50px);
  overflow: auto;
  opacity: 0;
  transition: opacity 0.3s linear;
  will-change: opacity;
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
  margin: 5px;
  border-radius: 16px;
  cursor: pointer;
  // width: 110px;
  // height: 160px;
  transition: transform 0.2s linear;
  &:hover {
    // transform: translate(-1.5px, -5px);
    .card-hide:hover {
      // box-shadow: 2px 2px 2px 2px rgba($color: #5f3e3e, $alpha: 0.5);
    }
  }
  &--active,
  &--detected {
    cursor: default;
    &:hover {
      // transform: translateY(0px);
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
  transition: all 0.5s ease-in;
}
.card-move {
  transition: transform 0.5s ease-in;
}
[data-size="auto"] {
  .card__items {
    width: 110px;
    height: 157px;
  }
  .cards {
    opacity: 1;
    &__list {
      text-align: center;
    }
  }
}
[data-size="full"] {
  .cards {
    opacity: 1;
  }
  .cards__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    height: calc((var(--vh, 1vh) * 100) - 50px);
  }
  .card__items {
    // height: calc((var(--vh, 1vh) * 100) / 3 - 60px);
    // width: calc(100vw / 6 - 10px);
    width: 100%;
    height: 100%;
  }
}
@media screen and (min-width: 900px) {
  [data-size="full"] {
    .cards__list {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
}
@media screen and (min-width: 500px) {
  [data-size="auto"] {
    .card__items {
      // width: 166px;
      // height: 236px;
      width: 156px;
      height: 226px;
    }
  }
}
</style>
