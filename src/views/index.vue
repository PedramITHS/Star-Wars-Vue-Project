<script>

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
.stage2{
  background-color: #0d0d0d;
  height: 400vh;
}

</style>



<template>
  <b-container fluid>
    <b-row>
      <b-col class="bg-block-one" sm="12">
        <b-row>
          <b-col class="bg-block-two" cols="8" sm="5" >
            <h1>The Force Academy Unlimited Knowledge.</h1>
            <p>
              Welcome to TheForceAcademy - your ultimate destination for
              mastering the names of all your beloved Star Wars characters!
              Tired of confusing Chewbacca with Yoda? Worry no more!
            </p>
            <b-button style="background-color: #8C1111; border: #8C1111;" size="lg">Take me to the Quiz</b-button>
          </b-col>
          <b-col class="bg-block" cols="4" sm="6"></b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  <div class="stage2">

  </div>

</template>
