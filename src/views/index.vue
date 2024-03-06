<script></script>

<style>
@font-face {
  font-family: "Blanka";
  src: url("assets/Fonts/blanka-free-for-commercial-use/Blanka.otf")
    format("opentype");
}

.image-overlay {
  position: absolute;
  top: 20px;
  left: -210px;
  width: 300px;
  z-index: 2;
  overflow: hidden;
}

.image-overlay img {
  width: 180px;
  height: 360px;
  border-radius: 10px;
}

h1 {
  font-family: Blanka;
}

#quiz-button {
  background-color: #8c1111;
  border: #8c1111;
}

#expButton {
  margin-top: 20px;
  font-family: Blanka;
  background-color: #8c1111;
  border: #8c1111;
}

#expButtonmob {
  margin-top: 20px;
  font-family: Blanka;
  background-color: #8c1111;
  border: #8c1111;
  display: flex;
  width: 200px;
  margin: auto;
  justify-content: center;
}

#side-p-mob {
  color: white;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  padding: 20px;
  text-shadow: 5px 5px 4px rgba(245, 0, 0, 0.5);
  background: linear-gradient(
    to bottom,
    rgb(0, 0, 0),
    rgba(34, 34, 38, 0) 110%
  );
  /* background: #2222268e; */
  /* width: 500px;
  padding-top: 15px;
  padding-left: 40px;
  padding-right: 40px; */
}

#side-block-mob {
  /* top: -150px;
  left: 10px; */
  background-color: #222226;
  /* width: 75%; */
  margin: auto;
  /* border-radius: 10px; */
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 50%,
      #22222694 100%
    ),
    url("/assets/side-pic1.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  /* height: 450px;
  border-radius: 10px; */
}

.bg-block-one {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(13, 13, 13, 1)),
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
  font-size: 24px white;
  text-align: center;
}
.stage2mob {
  background-color: #0d0d0d;
  /* border-radius: 19px; */
  /* border: #222226 solid; */
}

#side-block {
  right: 8%;
  position: absolute;
  top: 590px;
  background-color: #222226;
  height: 400px;
  border-radius: 10px;
}

.stage3 {
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(20, 20, 20)),
    url("assets/home-background-2.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  div {
    @media (max-width: 425px) {
      width: 100%;
    }
  }
}

.bg-block-three {
  padding-top: 150px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 10px;
  color: white;
  margin: auto;
  padding-top: 100px;
  text-align: center;
}

#side-p {
  color: white;
  font-size: 16px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
}

#side-p-mob {
  /* background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 50%,
      #222226 100%
    ),
    url("/assets/side-pic.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
}

.stage3h1 {
  margin-top: 200px;
}

@media screen and (max-width: 825px) {
  .stage2 {
    display: none;
  }
  .image-overlay {
    display: none;
  }
  .stage3h1 {
    margin-top: 10px;
  }
}

@media screen and (min-width: 824px) {
  .stage2mob {
    display: none;
  }
}

#expButton {
  margin-top: 10px;
  background-color: #8c1111;
  border: #8c1111;
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

  <!--stage 2 vid större skärm bredd -->

  <div class="stage2">
    <div id="side-block">
      <p id="side-p">
        Dive into the galaxy's rich lore and uncover the stories behind iconic
        characters, planets, and more. From Jedi heroes to Sith villains,
        there's a wealth of information waiting to be discovered. Join us on an
        adventure through the Star Wars universe!
      </p>

      <div style="margin-top: 80px">
        <p
          style="
            color: white;
            display: inline-block;
            position: relative;
            margin-right: 30px;
          "
        >
          <sup style="position: absolute; top: -0.5em; left: 0; font-size: 23px"
            >12 000+</sup
          >
          Active Users
        </p>
        <p
          style="
            color: white;
            display: inline-block;
            position: relative;
            margin-right: 30px;
          "
        >
          <sup
            style="
              position: absolute;
              top: -0.5em;
              left: 0;
              font-size: 23px;
              margin-left: 50px;
            "
            >97%</sup
          >
          Learning Satisfaction
        </p>
        <p style="color: white; display: inline-block; position: relative">
          <sup style="position: absolute; top: -0.5em; left: 0; font-size: 23px"
            >130+</sup
          >
          Countries
        </p>
      </div>

      <div class="image-overlay">
        <img src="/assets/side-pic.jpeg" alt="" />
      </div>

      <b-button to="newExplore" id="expButton" size="lg">Explore!</b-button>
    </div>
  </div>

  <!--stage 2 vid mindre skärm bredd -->

  <div class="stage2mob">
    <div id="side-block-mob">
      <p id="side-p-mob">
        Dive into the galaxy's rich lore and uncover the stories behind iconic
        characters, planets, and more. From Jedi heroes to Sith villains,
        there's a wealth of information waiting to be discovered. Join us on an
        adventure through the Star Wars universe!
      </p>

      <div
        style="margin-top: 80px; display: flex; justify-content: space-evenly"
      >
        <p
          style="
            color: white;
            display: inline-block;
            position: relative;
            font-size: 16px;
          "
        >
          <sup
            style="
              position: absolute;
              top: -0.5em;
              left: 0;
              /* margin-left: 30px; */
              font-size: 20px;
            "
            >12 000+</sup
          >
          Active Users
        </p>
        <p
          style="
            color: white;
            display: inline-block;
            position: relative;
            /* margin-right: 30px; */
            font-size: 16px;
          "
        >
          <sup
            style="
              position: absolute;
              top: -0.5em;
              left: 0;
              font-size: 23px;
              margin-left: 50px;
            "
            >97%</sup
          >
          Learning Satisfaction
        </p>
        <p style="color: white; display: inline-block; position: relative">
          <sup style="position: absolute; top: -0.5em; left: 0; font-size: 23px"
            >130+</sup
          >
          Countries
        </p>
      </div>

      <div class="image-overlay">
        <img src="/assets/side-pic.jpeg" alt="" />
      </div>

      <b-button to="newExplore" id="expButtonmob" size="lg">Explore!</b-button>
    </div>
  </div>

  <div class="stage3">
    <b-col class="bg-block-three" cols="8" sm="5">
      <h1 class="stage3h1">About Us</h1>
      <p>
        Four frontend students unite their skills to construct an immersive Star
        Wars website. Armed with HTML, CSS, and JavaScript proficiency, they
        sculpt a digital masterpiece. Their collaborative efforts yield a
        visually stunning platform that transports users into the heart of the
        Star Wars galaxy. Through meticulous design and innovative
        functionalities, they deliver an engaging experience that resonates with
        fans far and wide. Their passion for frontend development fuels their
        endeavor, resulting in a website that captures the essence of the iconic
        saga.
      </p>
      <b-button to="Contact" id="quiz-button" size="lg">More About Us</b-button>
    </b-col>
  </div>
</template>
