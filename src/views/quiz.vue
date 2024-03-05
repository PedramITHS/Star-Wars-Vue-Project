<script>
import questions from "./quizezz.vue";
// import * as Tone from "tone";
export default {
  components: {
    questions,
  },
  computed() {},
  data() {
    return {
      hidden: false,
      runOnce: false,
      interval: null,
      chosenDiffi: "",
      timer: 120,
      gameOver: "Times up !",
      audio: null,
      musicPlaying: false,
      music2Playing: false,
      // musicTimer: 120
    };
  },

  methods: {
    gameStart(diffi) {
      this.timer = 120;
      (this.chosenDiffi = diffi), (this.hidden = !this.hidden);
      this.countdown();
    },

    countdown() {
      console.log(this.timer);
      if (!this.runOnce) {
        this.runOnce = true;
        this.interval = setInterval(() => {
          if (this.timer > 0) {
            --this.timer;

            // this.timer === 118
            //   ? this.playCountDownMusic()
            //   : this.timer === 100 && this.timer > 0
            //     ? this.playCountDownMusic20()
            //     : null;
            if (this.timer <= 30 && this.timer > 20) {
              // console.log(musicPlaying);
              console.log("spela vanlig musik");
              console.log(`kolla om  > 100 ${this.timer}`);
              // lägg till musik när det är 100 kvar
              this.playCountDownMusic();
            }
            if (this.timer <= 20 && this.musicPlaying) {
              this.stopMusic();
              console.log("musiken är pausad");
              this.musicPlaying = false;
              // this.music2Playing = true;
            }
            if (this.timer <= 20 && this.audio.playbackRate !== 1.5) {
              console.log("play20");
              this.playCountDownMusic20();
            }
            // && !this.musicStarted) {
            //   console.log(`if  <= 100 ${this.timer}`);
            //   this.stopMusic();
            //   console.log("musiken stoppas");
            //   this.playCountDownMusic20();
            // }
          } else {
            clearInterval(this.interval);
            this.hidden = !this.hidden;
            this.stopMusic();
          }
        }, 1000);
      }
    },

    playCountDownMusic() {
      if (!this.musicPlaying) {
        this.audio = new Audio("/assets/countdown.mp3");
        this.audio.playbackRate = 1.0;
        this.audio.play();
        this.musicPlaying = true;
        console.log("Musiken spelas");
        console.log(this.timer);
      }
    },
    playCountDownMusic20() {
      console.log("starta 20");
      if (!this.musicPlaying && this.timer < 20) {
        // if (this.audio) {
        //   this.audio.pause();
        // }

        this.audio = new Audio("/assets/countdown.mp3");
        this.audio.playbackRate = 1.5;
        this.audio.play();
        this.music2Playing = true;
        console.log("Musiken spelas snabbare");

        // const player = new Tone.Player("/assets/countdown.mp3").toDestination();
        // player.set({ playbackRate: 1.5 });
        // player.playbackRate = 1.5;
        // player.start();

        // this.audio.play((playbackspeed = 1.5));
      }
    },

    stopMusic() {
      if (this.musicPlaying) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.musicPlaying = false;
        console.log("Musiken pausas");
      }
    },
  },
};
</script>

<style scoped>
.bg-block-one {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(13, 13, 13, 1)),
    url("assets/darth.jpeg");

  background-repeat: no-repeat;
  background-position: top;
  height: 700px;
}
.bg-block-two {
  color: #ffff;
  height: 700px;

  padding-top: 150px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}
.bg-block-3 {
  background-color: #0d0d0d;
  height: 700px;
}
</style>

<template>
  <b-container class="d-flex flex-align-row" fluid>
    <b-row class="bg-block-one">
      <b-col class="mt-5">
        <h1>The Force Academy Unlimited Knowledge.</h1>
        <p>
          Welcome to TheForceAcademy - your ultimate destination for mastering
          the names of all your beloved Star Wars characters! Tired of confusing
          Chewbacca with Yoda? Worry no more! We offer an interactive and
          entertaining platform where you can explore the Star Wars universe and
          memorize the names of iconic heroes and villains.
        </p>
        <h1>Choose Your Difficulty</h1>
        <b-button id="Padawan" @click="gameStart('Padawan')" variant="success"
          >Padawan</b-button
        >
        <b-button
          :id="box"
          id="JediKnight"
          @click="gameStart('JediKnight')"
          variant="outline-primary"
          class="m-2"
          >Jedi Knight</b-button
        >
        <b-button
          id="Grandmaster"
          @click="gameStart('Grandmaster')"
          variant="danger"
          >Grandmaster</b-button
        >
      </b-col>
      <b-col>
        <h1
          :style="{
            color: timer <= 60 ? 'PaleGreen' : 'white',
            'text-shadow': '0 0 9px black',
          }"
          v-if="hidden"
          class="text mt-3 d-flex justify-content-center"
        >
          {{ this.timer + " seconds remaining" }}
        </h1>
        <!-- <BButton variant="danger" @click="gameStart" class="text mt-3 d-flex justify-content-center align-self-center" v-if="hidden">Quit Game</BButton> -->

        <!-- <h1
          class="text mt-3 d-flex justify-content-center"
          v-if="this.timer === 60"
          style="color: red"
        >
          {{ this.timer + " seconds remaining" }}
        </h1> -->

        <h1
          class="text mt-3 d-flex justify-content-center"
          v-if="this.timer === 0"
        >
          {{ this.gameOver }}
        </h1>
        <questions class="" v-if="hidden" :chosenDiffi="chosenDiffi" />
      </b-col>
    </b-row>
  </b-container>

  <!-- <b-container class="d-flex flex-align-row" fluid>
    <b-row>
      <b-col class="bg-block-one" sm="12">
        <b-row>
          <b-col class="bg-block-two" cols="8" sm="5">
            <h1>The Force Academy Unlimited Knowledge.</h1>
            <p>
              Welcome to TheForceAcademy - your ultimate destination for
              mastering the names of all your beloved Star Wars characters!
              Tired of confusing Chewbacca with Yoda? Worry no more! We offer an
              interactive and entertaining platform where you can explore the
              Star Wars universe and memorize the names of iconic heroes and
              villains.
            </p>
            <h1>Choose Your Difficulty</h1>
            <b-button id="Padawan" @click="gameStart('Padawan')" variant="success"
            >Padawan</b-button
            >
            <b-button :id="box" id="JediKnight" @click="gameStart('JediKnight')" variant="outline-primary" class="m-2"
            >Jedi Knight</b-button
            >
            <b-button id="Grandmaster" @click="gameStart('Grandmaster')" variant="danger">Grandmaster</b-button>
          </b-col>
          <b-col class="bg-block-two h-100" cols="8" sm="7" >
            <questions class="" v-if="hidden" :chosenDiffi="chosenDiffi"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container> -->

  <!-- <questions v-if="hidden" :chosenDiffi="chosenDiffi"/> -->

  <!-- <b-container fluid class="bv-example-row">
    <b-row>
      <b-col class="bg-block-3" sm="12">
        Level 1: sm="9"
        <b-row>
          <b-col class="bg-block-4" cols="8" sm="6"
            >Level 2: cols="8" sm="6"</b-col
          >
          <b-col class="bg-block-4" cols="4" sm="6"
            >Level 2: cols="4" sm="6"</b-col
          >
        </b-row>
      </b-col>
    </b-row>
  </b-container> -->
</template>
