<script setup>
import { BButton, vBTooltip, useColorMode } from "bootstrap-vue-next";

import { ref } from "vue";

const show = ref(true);

function clickMe() {
  show.value = !show.value;
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

@media screen and (max-width: 450px) {
  footer {
    font-size: 15px;
  }
}
</style>

<template>
  <navMenu />

  <main>
    <RouterView />
  </main>

  <footer>
    <p>©2023 The Force Academy Inc. All Rights Reserved</p>
  </footer>
</template>
