<template>
  <Header />
  <Cards
    :items="cards"
    @showCard="showCard"
    :isAnimate="isAnimate"
    :isStopAnimate="isStopAnimate"
  />
  <!-- <button @click="next()">sa</button> -->
</template>

<script>
import Header from "./components/header/Header.vue";
import Cards from "./components/card/Cards.vue";

export default {
  name: "App",
  components: {
    Header,
    Cards,
  },
  data() {
    return {
      fruits: [
        {
          id: 1,
          name: "g1",
        },
        {
          id: 2,
          name: "g2",
        },
        {
          id: 3,
          name: "g3",
        },
        {
          id: 4,
          name: "g4",
        },
        {
          id: 5,
          name: "g5",
        },
        {
          id: 6,
          name: "g6",
        },
        {
          id: 7,
          name: "g7",
        },
        {
          id: 8,
          name: "g8",
        },
        {
          id: 9,
          name: "g9",
        },
      ],
      cards: [],
      lvl: 1,
      detectedCards: 0,
      activeCards: 0,
      prevCard: "",
      animateShow: 499,
      isAnimate: false,
      isStopAnimate: false,
    };
  },
  mounted() {
    this.clone(this.fruits);
  },
  methods: {
    shuffle(arr) {
      let curIdx = arr.length;
      let randIdx;

      // While there remain elements to shuffle...
      while (curIdx != 0) {
        // Pick a remaining element...
        randIdx = Math.floor(Math.random() * curIdx);
        curIdx--;

        // And swap it with the current element.
        [arr[curIdx], arr[randIdx]] = [arr[randIdx], arr[curIdx]];
      }

      return arr;
    },
    clone(arr) {
      let lvl = this.lvl;
      this.cards = [];
      if (lvl <= 4) {
        lvl += 1;
      } else if (lvl >= 9) {
        lvl = 9;
      }
      for (let i = 0; i < lvl; i++) {
        const el = arr[i];
        this.cards.push(
          { id: el.id, name: el.name, isActive: false, isDetected: false },
          { id: el.id + 0.1, name: el.name, isActive: false, isDetected: false }
        );
      }
      this.shuffle(this.cards);
    },
    async next() {
      this.isAnimate = true;
      this.isStopAnimate = true;
      this.lvl += 1;
      this.clone(this.fruits);
      this.detectedCards = 0;
      this.shuffle(this.cards);
      await this.wait(this.animateShow);
      this.isAnimate = false;
      this.isStopAnimate = false;
    },
    wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async showCard(idx) {
      if (!this.cards[idx].isActive && !this.cards[idx].isDetected) {
        this.cards[idx].isActive = true;
        this.isAnimate = true;
        await this.wait(this.animateShow);
        if (this.activeCards !== 1) {
          this.activeCards += 1;
          this.prevCard = idx;
          console.log(2);
        } else if (this.cards[this.prevCard].name === this.cards[idx].name) {
          // await this.wait(this.animateShow);
          this.cards[idx].isActive = false;
          this.cards[idx].isDetected = true;
          this.cards[this.prevCard].isActive = false;
          this.cards[this.prevCard].isDetected = true;
          this.activeCards = 0;
          this.detectedCards += 2;
          if (this.detectedCards === this.cards.length) {
            this.next();
          }
        } else {
          // await this.wait(this.animateShow);
          this.cards[idx].isActive = false;
          this.cards[this.prevCard].isActive = false;
          this.activeCards = 0;
          this.prevCard = "";
        }
        this.isAnimate = false;
      }
      // console.log(this.prevCard);
    },
  },
};
</script>

<style lang="scss">
@import "/assets/styles/base.scss";
// @import url(./assets/styles/base.scss);
</style>
