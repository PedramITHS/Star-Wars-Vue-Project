<script>
import { BNav } from "bootstrap-vue-next";
import { RouterLink } from "vue-router";

import songSrc from "/assets/star.mp3";

export default {
  data() {
    return {
      button: false,
      songSrc: songSrc,
    };
  },
  methods: {
    toggle() {
      this.button = !this.button;
    },
  },

  components: { BNav, songSrc },
};
</script>

<style scoped>


.navbar-dark .navbar-nav .nav-link{
      color:red!important
    }

#desk_menu {
  background-color: #0d0d0d;
}

.navitem {
  font-family: Blanka, sans-serif;
  color: white;
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

#logo {
  transition: transform 0.1s ease-in-out;
  height: 60px;
  width: 300px;
}

#logo:hover {
  transform: translateY(-3px);
}

#user-logo {
  height: 60px;
  width: 60px;
  transition: transform 0.1s ease-in-out;
}

#user-logo:hover {
  transform: translateY(-3px);
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

    <BButton
      @click="toggle"
      style="background-color: #0d0d0d; border-color: #0d0d0d"
      class="d-flex align-self-end"
    >
      <img id="logo" src="/assets/logo.png" alt="Logo" />
    </BButton>

    <!-- <BButton size="lg" @click="toggle" variant="primary">Menu</BButton> -->
    <Transition name="menuFade">
      <BNav v-if="button">
<<<<<<< HEAD
        <BNavItem  to="/">Home</BNavItem>
        <BNavItem to="Exp">Explore</BNavItem>
        <BNavItem to="Quiz">Quiz</BNavItem>
        <BNavItem to="Top">Leaderboard</BNavItem>
        <BNavItem to="Contact">Contact</BNavItem>
=======
        <BNavItem class="navitem" to="/">Home</BNavItem>
        <BNavItem class="navitem" to="newExplore">Explore</BNavItem>
        <BNavItem class="navitem" to="Quiz">Quiz</BNavItem>
        <BNavItem class="navitem" to="Top">Leaderboard</BNavItem>
        <BNavItem class="navitem" to="Contact">Contact</BNavItem>
>>>>>>> 9ca6b0f0a3e3da9787530ee0dc1f13c608dbb97f
        <!-- <BNavItem to="Thegame">frågor</BNavItem> -->
        <!-- <BNavItem to="Music">musik</BNavItem> -->
      </BNav>
    </Transition>

    <router-link
      to="/LogIn"
      class="d-flex align-self-end"
      style="margin-left: auto; margin-bottom: auto; margin-top: auto"
    >
      <img id="user-logo" src="/assets/user-icon3.webp" alt="Users" />
    </router-link>

    <div>
      <!-- Ljudspelaren -->
      <audio ref="audioPlayer" autoplay controls>
        <source :src="songSrc" type="audio/mpeg" />
        Din webbläsare stöder inte ljudfilen.
      </audio>
    </div>
  </div>
</template>
