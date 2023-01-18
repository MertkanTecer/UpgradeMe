<template>
  <div class="upgrade__item">
    <div
      class="upgrade__progressbar"
      :class="{ 'upgrade__progressbar--active': isActive }"
    ></div>
    <div class="upgrade__slot">
      <div class="item__container">
        <div class="itemInfo" v-if="!isUpgraded && isHovered">
          <div class="inventory__item">
            <img v-if="item" :src="item.img" alt="" />
          </div>
          <div class="item__info-wrapper">
            <h3 class="item__name">{{ item.name }}</h3>
            <h4>Attack Power : {{ item.damage }}</h4>
            <h4>Weapon Type : {{ item.type }}</h4>
            <h4>Weapon Class : {{ item.class }}</h4>
          </div>
        </div>
        <h3 class="section__subtitle">Place Your Item Here</h3>
        <div
          @mouseleave="isHovered = false"
          @mouseenter="showInformation"
          @click="removeItem(item)"
          class="item__slot"
        >
          <img v-if="item" :src="item.img" alt="" />
        </div>
      </div>
      <div class="item__container">
        <h3 class="section__subtitle">Place Your Scroll Here</h3>
        <div @click="removeScroll" class="scroll__slot">
          <img v-if="getScroll" src="/upgradeMe/upgradeScroll.png" alt="" />
        </div>
      </div>
    </div>
    <div class="item__container">
      <h3 class="section__subtitle">Upgraded New Item Slot</h3>
      <div class="itemInfo2" v-if="isUpgraded && isnewItemHovered">
        <div class="inventory__item">
          <img v-if="upgradedItem" :src="upgradedItem.img" alt="" />
        </div>
        <div class="item__info-wrapper">
          <h3 class="item__name">{{ upgradedItem.name }}</h3>
          <h4>Attack Power : {{ upgradedItem.damage }}</h4>
          <h4>Weapon Type : {{ upgradedItem.type }}</h4>
          <h4>Weapon Class : {{ upgradedItem.class }}</h4>
        </div>
      </div>
      <div
        @mouseleave="isnewItemHovered = false"
        @mouseenter="isnewItemHovered = true"
        @click="sendToInventory"
        class="upgradeitem__slot"
      >
        <img v-if="upgradedItem" :src="upgradedItem.img" alt="" />
      </div>
    </div>
    <button @click="upgradeItem(item)" class="upgrade__button">Upgrade !</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const isActive = ref(false);
const isHovered = ref(false);
const isnewItemHovered = ref(false);
const store = useStore();

const upgradeItem = (item) => {
  if (item && item.rate < 5 && progressing.value == false) {
    isActive.value = true;
    store.state.progressing = true;
    setTimeout(() => {
      store.dispatch("removeItemSlot");
      store.dispatch("upgradeItem", item);
      store.dispatch("removeScroll");
      isActive.value = false;
      store.state.progressing = false;
    }, 3000);
  }
};

const sendToInventory = () => {
  if (upgradedItem.value != null && item.value == null && progressing.value == false) {
    store.dispatch("addItem", upgradedItem.value);
    store.dispatch("removeItemSlot");
  }
};

const showInformation = () => {
  if (store.state.item) {
    isHovered.value = true;
  }
};

const removeItem = (item) => {
  if (item && progressing.value == false) {
    store.dispatch("addItem", item);
    store.dispatch("removeItemSlot", item);
    isHovered.value = false;
  } else {
    return;
  }
};

const removeScroll = () => {
  if (store.state.isScrollSlotted && progressing.value == false) {
    store.dispatch("removeScroll");
  }
};

const upgradedItem = computed(() => {
  return store.getters.getNewItem;
});

const getScroll = computed(() => {
  return store.getters.getScroll;
});

const item = computed(() => {
  return store.getters.getItem;
});
const isUpgraded = computed(() => {
  return store.getters.isUpgraded;
});
const progressing = computed(() => {
  return store.getters.progressing;
});
</script>

<style scoped>
.item__container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.upgrade__item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  width: 100%;
  gap: 2rem;
}
.item__slot {
  width: 75px;
  height: 75px;
  background-color: rgb(100, 97, 97);
  border: 3px solid black;
  box-shadow: 1px 1px 1px 1px rgba(31, 30, 30, 0.5);
  overflow: hidden;
}
.upgradeitem__slot {
  width: 75px;
  height: 75px;
  background-color: rgb(100, 97, 97);
  border: 3px solid black;
  box-shadow: 1px 1px 1px 1px rgba(31, 30, 30, 0.5);
  overflow: hidden;
}
.upgrade__slot {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5rem;
  padding: 2.5rem;
}
.scroll__slot {
  width: 75px;
  height: 75px;
  background-color: rgb(100, 97, 97);
  border: 3px solid black;
  box-shadow: 1px 1px 1px 1px rgb(31, 30, 30, 0.5);
  overflow: hidden;
}
.upgrade__button {
  width: 50%;
  padding: 0.6rem;
  font-size: var(--h3-font-size);
}
.upgrade__button {
  display: inline-block;
  background-color: var(--first-color-second);
  color: #fff;
  cursor: pointer;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
}
.upgrade__progressbar {
  width: 350px;
  height: 220px;
  position: absolute;

  top: 30%;
  border: 5px solid transparent;
}
.upgrade__progressbar--active {
  transition: all 3s ease-in-out;
  border-color: var(--first-color);
}
.itemInfo {
  position: absolute;
  bottom: 65%;
  transform: translateX(50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 275px;
  background-color: rgb(100, 97, 97);
  border: 3px solid black;
  box-shadow: 1px 1px 1px 1px rgb(31, 30, 30, 0.5);
}
.itemInfo2 {
  position: absolute;
  bottom: 105%;
  transform: translateX(50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 275px;
  background-color: rgb(100, 97, 97);
  border: 3px solid black;
  box-shadow: 1px 1px 1px 1px rgb(31, 30, 30, 0.5);
}
.item__info-wrapper {
  margin-top: 1rem;
  text-align: center;
}
.inventory__item {
  background-color: rgb(100, 97, 97);
  border: 3px solid black;
  box-shadow: 1px 1px 1px 1px rgb(31, 30, 30, 0.5);
  overflow: hidden;
  flex-basis: 75px;
  width: 75px;
  height: 75px;
}
</style>
