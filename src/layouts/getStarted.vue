<template>
  <section class="getstarted section container">
    <h2 class="section__title">How To Play</h2>
    <div class="getstarted__container">
      <p class="getstarted__description">
        First you need to select an item from dropdown menu. <p>then you need to click an
        item to place it.</p> <p>you may also use Blessing Scroll for getting a higher chance to
        upgrade.</p> <p>then you need to click <span style="color:var(--scroll-bar-color)">"Upgrade !"</span> button to start proggress. </p>
      </p>
      <p>Item Upgrade Chances</p>
      <p>+1 >>>> +2 = %80</p>
      <p>+2 >>>> +3 = %50</p>
      <p>+3 >>>> +4 = %20</p>
      <p>+4 >>>> +5 = %4</p>
      <p> With Blessing Scroll Upgrade chances will raise by %20 </p>
      <div class="getstarted__buttons">
        <button v-if="!isStarted" class="button" @click="getStart">Get Started !</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineEmits , defineProps } from "vue";
const props = defineProps(["isStarted"])
const emits = defineEmits(["setStarted"]);
const getStart = () => {
  emits("setStarted");
};
</script>

<style scoped>
.getstarted {
  background-color: var(--body-color);
  margin-top: 2rem;
}
.getstarted__container {
  text-align: center;
}
.getstarted__container p {
  margin-top: 1rem;
}
.getstarted__buttons {
  display: flex;
  justify-content: center;
}
</style>
