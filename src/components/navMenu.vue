<script>
import { BNav } from "bootstrap-vue-next";
import { RouterLink } from "vue-router";

import songSrc from "/assets/Star Wars Cantina Band 1 2.mp3";

export default {
  data() {
    return {
      button: false,
      songSrc: songSrc,
      isPlaying: false, // musiken spelas öppning sida
      playerVisible: false, //spelaren icke synlig
    };
  },
  methods: {
    toggle() {
      this.button = !this.button;
    },
    // pauseAudio() {
    //   console.log("pauseAudio method called");
    //   this.isPlaying = false; // Sätt isPlaying till false för att dölja spelaren och visa bilden
    //   this.$refs.audioPlayer.pause(); // Pausa ljudet när bilden klickas
    // },
    // showPlayer() {
    //   this.playerVisible = true;
    // },

    toggleAudio() {
      const audioPlayer = this.$refs.audioPlayer;
      if (this.isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      this.isPlaying = !this.isPlaying;
    },

    hidePlayer() {
      this.playerVisible = false;
    },
  },

  components: { BNav, songSrc },
  mounted() {
    const audioPlayer = this.$refs.audioPlayer;
    audioPlayer.play();
  },
};
</script>

<style scoped>
#desk_menu {
  background-color: #0d0d0d;
}
.navitem {
  font-family: Blanka, sans-serif;
  color: rgb(0, 250, 21) !important;
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

#music-player {
  margin-top: auto;
  margin-bottom: auto;
  transition: transform 0.1s ease-in-out;
}

#music-player:hover {
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
      <BNav type="dark" v-if="button">
        <BNavItem class="navitem" to="/">Home</BNavItem>
        <BNavItem class="navitem" to="newExplore">Explore</BNavItem>
        <BNavItem class="navitem" to="Quiz">Quiz</BNavItem>
        <BNavItem class="navitem" to="Top">Leaderboard</BNavItem>
        <BNavItem class="navitem" to="Contact">Contact</BNavItem>
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

    <div id="music-player">
      <img
        v-if="!isPlaying"
        @click="toggleAudio"
        src="/assets/can_play.jpg"
        style="border-radius: 50%; height: 60px; width: 60px"
        alt="Play Button"
      />
      <img
        v-else
        @click="toggleAudio"
        src="/assets/cantina_pic.png"
        style="height: 50px"
        alt="Pause Button"
      />
      <audio ref="audioPlayer" loop autoplay>
        <source
          src="/assets/Star Wars Cantina Band 1 2.mp3"
          type="audio/mpeg"
        />
        Din webbläsare stöder inte ljudfilen.
      </audio>

      <!-- Ljudspelaren -->
      <!-- <audio ref="audioPlayer" autoplay controls>
        <source :src="songSrc" type="audio/mpeg" />
        Din webbläsare stöder inte ljudfilen.
      </audio> -->
    </div>
  </div>
</template>
