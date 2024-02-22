<script></script>

<style>
@font-face {
  font-family: "Blanka";
  src: url("assets/Fonts/blanka-free-for-commercial-use/Blanka.otf")
    format("opentype");
}

h1 {
  font-family: Blanka;
}

#quiz-button {
  background-color: #8c1111;
  border: #8c1111;
}

.bg-block-one {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(13, 13, 13, 1)),
    url("assets/darth.jpeg");

  background-repeat: no-repeat;
  background-position: top;
  height: 700px;
  color: #ffff;
}
.bg-block-two {
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
.stage2 {
  background-color: #0d0d0d;
  height: 400vh;
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
              Tired of confusing Chewbacca with Yoda? Worry no more!
            </p>
            <b-button to="Quiz" id="quiz-button" size="lg"
              >Take me to the Quiz</b-button
            >
          </b-col>
          <b-col class="bg-block" cols="4" sm="6"></b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  <div class="stage2"></div>
</template>
