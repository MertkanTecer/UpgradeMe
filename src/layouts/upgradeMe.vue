<template>
  <section class="section upgrade2 container">
    <h2 class="section__title">Upgrade Me !</h2>
    <div class="upgrade__container">
      <upgrade-item></upgrade-item>
      <upgrade-inventory></upgrade-inventory>
      <upgrade-search></upgrade-search>
    </div>
  </section>
</template>

<script setup>
import upgradeInventory from "../pages/upgradeInventory.vue";
import upgradeItem from "../pages/upgradeItem.vue";
import upgradeSearch from "../pages/upgradeSearch.vue";
</script>

<style scoped>
.upgrade__container {
  margin-top: var(--mb-2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
}
</style>
