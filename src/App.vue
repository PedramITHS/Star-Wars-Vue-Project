<script setup>
import { BButton, vBTooltip } from 'bootstrap-vue-next';

import { ref, } from 'vue'

const show = ref(true)

function clickMe() {
  show.value = !show.value
}



</script>

<style>

* {
  /* margin: 0; */
  padding: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  background-color: black;
}

a {
  color: white;
}

nav {
  display: flex;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: columnrow;
}

li {
  margin-left: 10px;
}

img {
  height: 100px;
  width: 100px;
}

footer {
  margin-top: auto;
  height: 40px;
  background-color: black;
  color: antiquewhite;
  text-align: center;
}

</style>


<template>

<navMenu/>


<!-- <header>
  <nav>
    <navMenu @click="clickMe"/>
    <ul  v-if="show">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/Quiz">Quiz</RouterLink>
      </li>
      <li>
        <RouterLink to="/Top">Toplist</RouterLink>
      </li>
      <li>
        <RouterLink to="/Contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</header> -->



<main>
  <RouterView />
</main>



<footer>
  <p>©2023 The Force Academy Inc. All Rights Reserved</p>
</footer>
</template>


<!-- Vue mall som kommer vid installation (tas bort när vi är säkra) -->

<!-- <template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template> -->



<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
