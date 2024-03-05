<script>
import { BNav } from "bootstrap-vue-next";
import { RouterLink } from "vue-router";

import songSrc from "/assets/Star Wars Cantina Band 1 2.mp3";

export default {
  data() {
    return {
      button: false,
      rotate: false,
      offCanvas: false,
      songSrc: songSrc,
      isPlaying: false, // musiken spelas öppning sida
      playerVisible: false, //spelaren icke synlig
    };
  },
  methods: {
    toggle() {
      this.button = !this.button;
    },

    displayCanvas() {
      this.offCanvas = !this.offCanvas;
    },

    rotating() {
      this.rotate = !this.rotate;
    },

    unRotate() {
      this.rotate = false;
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
.offcanvas-header {
  color: green !important;
}

#desk_menu {
  background-color: #0d0d0d;
  display: flex;
}
#canvas_menu {
  background-color: #0d0d0d;
  display: flex;
}
#canvas_logo {
  width: 70px;
  height: 80px;
  transition: transform 0.3s;
}
.canvas_logo_clicked {
  transform: rotate(90deg);
}
.navitem {
  font-family: Blanka, sans-serif;
  color: rgb(0, 79, 250) !important;
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

@media screen and (max-width: 450px) {
  #desk_menu {
    display: none;
  }
}

@media screen and (min-width: 450px) {
  #canvas_menu {
    display: none;
  }
}
</style>

<template>
  <!-- Offcanvas navbar, dyker enbart vid < 450px skärmbredd eller mindre. -->

  <div id="canvas_menu" style="background-color: #0d0d0d">
    <BButton
      style="background-color: #0d0d0d; border: none"
      @click="displayCanvas"
    >
      <img
        id="canvas_logo"
        @click="rotating()"
        :class="{ canvas_logo_clicked: rotate }"
        class="p-1"
        src="/assets/logo1.png"
        alt="logo"
        title="Menu"
      />
    </BButton>
    <BOffcanvas
      @hide="unRotate()"
      title="Menu"
      style="
        width: 200px;
        margin-top: 90px;
        height: auto;
        background-color: #0d0d0d;
      "
      v-model="offCanvas"
      variant="dark"
    >
      <BNavItem
        @click="
          this.offCanvas = false;
          this.rotate = false;
        "
        class="navitem"
        to="/"
        >Home</BNavItem
      >
      <BNavItem
        @click="
          this.offCanvas = false;
          this.rotate = false;
        "
        class="navitem"
        to="newExplore"
        >Explore</BNavItem
      >
      <BNavItem
        @click="
          this.offCanvas = false;
          this.rotate = false;
        "
        class="navitem"
        to="Quiz"
        >Quiz</BNavItem
      >
      <BNavItem
        @click="
          this.offCanvas = false;
          this.rotate = false;
        "
        class="navitem"
        to="Top"
        >Leaderboard</BNavItem
      >
      <BNavItem
        @click="
          this.offCanvas = false;
          this.rotate = false;
        "
        class="navitem"
        to="Contact"
        >Contact</BNavItem
      >
    </BOffcanvas>

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
    </div>
  </div>

  <!-- Vanling navbar, dyker upp vid skärmbredd > 450px -->

  <div id="desk_menu">
    <BButton
      @click="toggle"
      style="background-color: #0d0d0d; border-color: #0d0d0d"
      class="d-flex align-self-end"
    >
      <img id="logo" src="/assets/logo.png" alt="Logo" />
    </BButton>

    <Transition name="menuFade">
      <BNav type="dark" v-if="button">
        <BNavItem class="navitem" to="/">Home</BNavItem>
        <BNavItem class="navitem" to="newExplore">Explore</BNavItem>
        <BNavItem class="navitem" to="Quiz">Quiz</BNavItem>
        <BNavItem class="navitem" to="Top">Leaderboard</BNavItem>
        <BNavItem class="navitem" to="Contact">Contact</BNavItem>
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
