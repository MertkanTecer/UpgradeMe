<template>
  <div class="upgrade__search">
    <div class="item__search">
      <div class="item__search--wrapper">
        <div class="item__name--search">
          <label for="items"> Select Your Weapon </label>
          <select v-model="selectedItem" id="items" style="width: 100%" name="items">
            <option
              :selected="item"
              v-for="item in itemList"
              :value="item"
              :key="item.id"
            >
              {{ item.name }}
            </option>
          </select>
          <button class="button submit__search" @click="addItem">Add item</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const selectedItem = ref(store.state.items[0]);
const itemList = computed(() => {
  const items = store.getters.getItems;
  return items;
});
const addItem = () => {
  const newItem = selectedItem.value;
  store.dispatch("addItem", newItem);
};
</script>

<style scoped>
.upgrade__search {
  width: 100%;
}
.submit__search {
  width: 75%;
  padding: 0.6rem;
  font-size: var(--h3-font-size);
}
.item__search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item__search--wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
.item__name--search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.item__name--search select {
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
  background-color: var(--first-color-second);
  color: #fff;
  font-size: var(--h3-font-size);
}

@media screen and (max-width: 378px) {
  .item__name--search {
    width: 100%;
  }
}
</style>
