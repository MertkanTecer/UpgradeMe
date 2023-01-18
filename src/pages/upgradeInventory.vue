<template>
  <div class="inventory">
    <div class="row">
      <div class="itemInfo" v-if="isHovered">
        <div class="inventory__item">
          <img :src="hoveredItem.img" alt="" />
        </div>
        <div class="item__info-wrapper">
          <h3 class="item__name">{{ hoveredItem.name }}</h3>
          <h4>Attack Power : {{ hoveredItem.damage }}</h4>
          <h4>Weapon Type : {{ hoveredItem.type }}</h4>
          <h4>Weapon Class : {{ hoveredItem.class }}</h4>
        </div>
      </div>
      <div
        @mouseleave="isHovered = false"
        @mouseenter="showInformation(item)"
        @click="showinfo(item)"
        v-for="item in inventory"
        :key="item.id"
        class="inventory__item"
      >
        <img :src="item.img" alt="" />
      </div>
      <div @click="addScroll" class="inventory__item">
        <img src="/upgradeMe/upgradeScroll.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const isHovered = ref(false);
const hoveredItem = ref({});
const store = useStore();
const showinfo = (item) => {
  if (getItem.value == null && getUpgradedItem.value == null) {
    store.dispatch("removeItem", item);
    store.dispatch("placeItem", item);
    isHovered.value = false;
  } else {
    return;
  }
};
const showInformation = (item) => {
  hoveredItem.value = item;
  isHovered.value = true;
};

const addScroll = () => {
  if (store.state.isScrollSlotted == false && progressing.value == false) {
    store.dispatch("addScroll");
  }
};
const progressing = computed(() => {
  return store.getters.progressing;
});

const inventory = computed(() => {
  const items = store.getters.getInventory;
  return items;
});
const getItem = computed(() => {
  return store.getters.getItem;
});
const getUpgradedItem = computed(() => {
  return store.getters.getNewItem;
});
</script>

<style scoped>
.inventory {
  margin-top: 2rem;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.itemInfo {
  position: absolute;
  bottom: 105%;
  transform: translateX(50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgb(100, 97, 97);
  border: 3px solid black;
  box-shadow: 1px 1px 1px 1px rgb(31, 30, 30, 0.5);
}
.item__info-wrapper {
  margin-top: 1rem;
  text-align: center;
}
.row {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  width: 325px;
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
