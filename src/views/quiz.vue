<script>
import questions from "./quizezz.vue";

// import * as Tone from "tone";
export default {
  components: {
    questions,
  },

  data() {
    return {
      bgColor: "",
      hidden: false,
      hideRes: false,
      runOnce: false,
      cancel: true,
      interval: null,
      chosenDiffi: "",
      BGcolor: "",
      timer: 120,
      gameOver: "Times up !",
      myKey: 0,
      score: 0,
      audio: null,
      musicPlaying: false,
      music2Playing: false,
      // musicTimer: 120
    };
  },

  mounted() {
    const returnScore = localStorage.getItem("score");
    this.score = parseInt(returnScore);
    if (isNaN(this.score)) {
      this.score = 0;
    }
    console.log(this.score);
  },

  methods: {
    // Starta quiz efter vald svårighetgrad, "timer" är förinställd på 120, ska starta om till samma siffra vid ändring av svårighetsgrad, visa och dölj frågor med "hidden", men detta är inte en så bra lösninga med att man måste klicka två gånger för att visa frågorna.

    // refactor(?) krävs.

    // "diffi" är vår parameter, en sträng som ändras vi knapp tryck efter vald svårighetsgrad. Variabeln "chosenDiffi" värde blir strängen som valt vid knapptryck. Och denna är sedan tillgänglig som en prop till en annan komponent (quizezz) som i sin tur ändrar värdet och placeras dynamiskt med [] inuti en fetch.

    gameStart(diffi, color) {
      this.timer = 120;
      (this.chosenDiffi = diffi), (this.bgColor = color), (this.hidden = true);
      this.myKey += 1;
      this.cancel = false;
      this.countdown();
    },

    saveQuizResult() {
      const quizResult = {
        difficulty: this.chosenDiffi,
        userName: "user name",
        score: "user score",
      };

      let quizHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];

      quizHistory.push(quizResult);

      localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
    },
    clearScore() {
      this.$emit("clear-score");
    },

    quit() {
      this.hidden = false;
      this.cancel = true;
      this.timer = 0;
      const returnScore = localStorage.getItem("score");
      this.score = parseInt(returnScore);
    },

    // Våran nedräknings funktion. "runOnce" är false så "!runOnce" blir true, "interval" blir en setInterval. så länge timern är större än 0, fortsätt räkna ned. När den når noll, dölj frågorna (får ändra på detta). Jag tror det är här problemet uppstår, runOnce förblir 'true' vilket leder till att nedräkningen inte startar om på nytt när det väl har nått 0.

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
            this.runOnce = false;
            this.hidden = false;
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

        <div class="difficulty">
          <b-button
            v-b-tooltip.hover
            title="10 points for each question"
            id="Padawan"
            @click="gameStart('Padawan', 'green')"
            variant="outline-success"
            >Padawan</b-button
          >
          <b-button
            v-b-tooltip.hover
            title="20 points for each question"
            :id="box"
            id="JediKnight"
            @click="gameStart('JediKnight', 'blue')"
            variant="outline-info"
            class="m-2"
            >Jedi Knight</b-button
          >
          <b-button
            v-b-tooltip.hover
            title="30 points for each question"
            id="Grandmaster"
            @click="gameStart('Grandmaster', 'red')"
            variant="outline-danger"
            >Grandmaster</b-button
          >
          <b-button
            @click="quit()"
            variant="outline-warning"
            class="m-2"
            :disabled="cancel"
            >Quit game</b-button
          >
        </div>
      </b-col>

      <b-col>
        <h1
          style="text-align: center"
          v-if="hidden"
          class="text mt-3 d-flex justify-content-center"
          :style="{
            color: timer <= 60 ? 'PaleGreen' : 'white',
            'text-shadow': '0 0 5px black',
          }"
        >
          {{ this.timer + " seconds remaining" }}
        </h1>
        <h1
          class="text mt-3 d-flex justify-content-center"
          v-if="this.timer === 0"
        >
          {{ this.gameOver }}
        </h1>

        <!-- En lösning till att "ladda om" komponenten utan att behöva dölja och visa den med två klick på samma knapp för att byta ut frågorna som dyker per svårighetsgrad. Med ett så kallat "key changing technique". -->

        <questions
          class=""
          v-if="this.hidden"
          :chosenDiffi="chosenDiffi"
          :bgColor="bgColor"
          :key="myKey"
        />

        <BContainer v-if="!this.hidden && this.timer === 0">
          <BCol
            id="box"
            class="d-flex flex-column mt-2 align-items-center w-50 mx-auto mb-5 mt-5"
          >
            <div id="content">
              <h1>
                Final score: <br />
                {{ this.score }}
              </h1>
            </div>
          </BCol>
        </BContainer>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.bg-block-one {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(13, 13, 13, 1)),
    url("assets/darth.jpeg");

  background-repeat: no-repeat;
  background-position: top;
  height: 100vh;
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

#box {
  border: 5px solid orange;
  border-radius: 20px;
  min-width: 400px !important;
  height: 200px;
  margin-bottom: 3000px;
  text-align: center;
  background-color: #151313;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 200%;
}

#content {
  margin: auto;
}

@media screen and (max-width: 700px) and (min-width: 450px) {
  .bg-block-one {
    height: fit-content;
  }
}

@media screen and (max-width: 450px) {
  .bg-block-one {
    height: fit-content;
  }

  #box {
    border: 5px solid orange;
    border-radius: 20px;
    min-width: 300px !important;
    height: 200px;
    text-align: center;
    background-color: #151313;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 200%;
  }
}
</style>
