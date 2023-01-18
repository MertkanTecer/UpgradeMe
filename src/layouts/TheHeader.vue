<template>
  <header>
    <nav class="navigation container">
      <a href="/" class="navigation__name">Upgrade Me</a>
      <ul class="navigation__list">
        <li class="navigation__item">
          <a class="navigation__link" href="/"> Home </a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="https://mertkantecer.vercel.app">
            Portfolio
          </a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="https://mertkantecer.vercel.app/#contact">
            Contact
          </a>
        </li>
      </ul>
      <div class="nav__btns">
        <!-- Theme Change Button -->
        <i
          class="uil uil-moon change-theme"
          v-if="!setTheme"
          @click="changeTheme((setTheme = true))"
          id="theme-button"
        ></i>
        <i
          class="uil uil-sun change-theme"
          v-else
          @click="changeTheme((setTheme = false))"
          id="theme-button"
        ></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const setTheme = ref(true);
const changeTheme = (theme) => {
  const el = document.body.classList;
  if (theme == false) {
    el.add("dark-theme");
  } else {
    el.remove("dark-theme");
  }
};
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
}
.change-theme {
  font-size: 1.25rem;
  color: var(--title-color);
  cursor: pointer;
}
.change-theme:hover {
  color: var(--first-color);
}
.navigation__name {
  color: var(--text-color);
  font-size: var(--h2-font-size);
  font-weight: bolder;
}
header {
  width: 100%;
  background-color: var(--body-color);
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  border-bottom: 0.1rem solid rgb(var(--body-color));
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
}
.navigation__list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.navigation__link {
  color: var(--text-color-light);
  font-size: var(--medium-font-size);
  font-weight: bold;
}
.navigation__link:hover {
  color: var(--first-color-alt);
}
@media screen and (min-width: 968px) {
  .navigation__list {
    width: 50%;
    justify-content: space-between;
  }
}
</style>
