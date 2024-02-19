<script>
export default {
  data() {
    return {
      button: false,
    };
  },

  methods: {
    toggle() {
      this.button = !this.button;
    },
  },
};
</script>

<style scoped>
#desk_menu {
  background-color: black;
}

a {
  font-weight: 900;
  color: rgb(255, 255, 255);
}

.menuFade-enter-active {
  transition: opacity 0.7s ease;
}
.menuFade-leave-active {
  transition: opacity 0.7s ease;
}

.menuFade-enter-from,
.menuFade-leave-to {
  opacity: 0;
}

/* .menuFade-leave-from,
.menuFade-leave-to {
    opacity: 1;
} */

/* @media screen and (max-width: 480px) {

    #desk_menu {
        display: none;
    }

} */
</style>

<template>
  <div class="d-flex p-4" id="desk_menu">
    <!-- <BImg @click="toggle" src="../../assets/imageedit_4_7991310453.png" rounded="circle" alt="hello ?" /> -->

    <BButton size="lg" @click="toggle" variant="primary">Menu</BButton>
    <Transition name="menuFade">
      <BNav v-if="button">
        <BNavItem to="/">Home</BNavItem>
        <BNavItem to="Exp">Explore</BNavItem>
        <BNavItem to="Quiz">Quiz</BNavItem>
        <BNavItem to="Top">Leaderboard</BNavItem>
        <BNavItem to="Contact">Contact</BNavItem>
        <BNavItem to="Thegame">frågor</BNavItem>
      </BNav>
    </Transition>
  </div>
</template>
