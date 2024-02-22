<script>
import questions from "./quizezz.vue";

export default {
  components: {
    questions,
  },

  data() {
    return {
      hidden: false,
    };
  },

  methods: {
    gameStart() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style>
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
  <b-container fluid>
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
            <b-button id="Padawan" @click="gameStart" variant="success"
              >Padawan</b-button
            >
            <b-button id="JediKnight" variant="outline-primary" class="m-2"
              >Jedi Knight</b-button
            >
            <b-button id="Grandmaster" variant="danger">Grandmaster</b-button>
          </b-col>
          <b-col class="bg-block-two" cols="4" sm="6"></b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>

  <questions v-if="hidden" />

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
