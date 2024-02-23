<script>
import questions from "./quizezz.vue";

export default {
  components: {
    questions,
  },

  data() {
    return {
      hidden: false,
      runOnce: false,
      interval: null,
      chosenDiffi: '',
      timer: 120,
      gameOver: "Times up !"
    };
  },

  methods: {
    gameStart(diffi) {
      this.timer = 120
      this.chosenDiffi = diffi,
      this.hidden = !this.hidden;
      this.countdown()
    },

    countdown() {
      if(!this.runOnce) {
        this.runOnce = true;
      this.interval = setInterval(() => {
        if (this.timer > 0) {
          --this.timer;
        } else {
          clearInterval(this.interval);
          this.hidden = !this.hidden
        }
      }, 1000);
      }
    },
  }
};
</script>

<style scoped>
.bg-block-one {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(13, 13, 13, 1)),
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

<b-container  class="d-flex flex-align-row" fluid>
  <b-row class="bg-block-one">
    <b-col class="mt-5">
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
            <b-button id="Padawan" @click="gameStart('Padawan');" variant="success"
            >Padawan</b-button
            >
            <b-button :id="box" id="JediKnight" @click="gameStart('JediKnight')" variant="outline-primary" class="m-2"
            >Jedi Knight</b-button
            >
            <b-button id="Grandmaster" @click="gameStart('Grandmaster')" variant="danger">Grandmaster</b-button>
    </b-col>
    <b-col>
      <h1 v-if="hidden" class="text mt-3 d-flex justify-content-center">
        {{ this.timer  + ' seconds remaining'}}
      </h1>
      <h1 class="text mt-3 d-flex justify-content-center" v-if="this.timer === 0">{{ this.gameOver }}</h1>
      <questions class="" v-if="hidden" :chosenDiffi="chosenDiffi"/>
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
