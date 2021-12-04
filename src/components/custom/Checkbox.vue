<template>
  <div class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :id="checkboxId"
      v-model="computedValue"
      :name="checkboxName"
      :value="value"
    />
    <div class="checkbox__ball">
      <div class="checkbox__ball-inner">
        <img class="checkbox__ball-1" :src="firstImage" alt="" />
        <img class="checkbox__ball-2" :src="secondImage" alt="" />
      </div>
    </div>
    <label
      :for="checkboxId"
      class="checkbox__bg"
      :class="{ 'checkbox__bg--theme': isTheme }"
    ></label>
  </div>
</template>
<script>
export default {
  name: "Checkbox",
  props: {
    modelValue: null,
    value: [String, Number],
    checked: Boolean,
    checkboxId: null,
    checkboxName: null,
    firstImage: {
      String,
    },
    secondImage: {
      String,
    },
    isTheme: {
      Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    computedValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>
<style lang="scss">
// .s {
// background-image: url();
// }
.checkbox {
  min-width: 45px;
  min-height: 25px;
  max-width: 45px;
  max-height: 25px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  &__input {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
    margin: 0;
    &:checked {
      + .checkbox__ball {
        .checkbox__ball-inner {
          right: 4px;
          // background-color: #a4aec1;
          // border-color: #adb6c7;
          .checkbox__ball-1 {
            display: none;
          }
          .checkbox__ball-2 {
            display: block;
          }
        }
      }
      ~ .checkbox__bg {
        &--theme {
          background: linear-gradient(#5e636c, #474b56);
          box-shadow: inset 0px 1px 6px 0px #2f3136;
        }
      }
    }
  }
  &__ball,
  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &__ball {
    z-index: 2;
    &-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 3.5px;
      right: 23px;
      width: 18px;
      height: 18px;
      // background-color: #fed230;
      // border: 1px solid #ffdb55;
      // box-shadow: 0 0 3px 0px rgba($color: #374f60, $alpha: 0.78);
      // border-radius: 50%;
      // transition: right 0.3s cubic-bezier(0.19, 0.9, 0.3, 1.5),
      //   background-color 0.3s linear, border-color 0.25s ease;
      border-radius: 50%;
      box-shadow: 0 0 3px 0px rgba($color: #374f60, $alpha: 0.78);
      transition: right 0.3s cubic-bezier(0.19, 0.9, 0.3, 1.5);
      img {
        width: 100%;
        height: auto;
        max-width: 100%;
      }
    }
    &-2 {
      display: none;
    }
  }
  &__bg {
    width: 100%;
    transition: background-color 0.3s ease-out;
    z-index: 1;
    border-radius: 30px;
    border: 1px solid #8ba9a9;
    background-color: #b9b9b9;
    &--theme {
      background: linear-gradient(#3794d7, #68b9f4);
      border-color: #566276;
      box-shadow: inset 0px 1px 6px 0px #3b6689;
    }
  }
}
</style>
