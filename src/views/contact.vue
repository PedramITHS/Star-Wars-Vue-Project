<template>
  <div
    id="page"
    class="bg-black d-flex flex-column align-items-center justify-content-center"
  >
    <b-container id="main" fluid class="gradient-background">
      <h1 style="text-align: center" class="contact-header mt-0 mb-3">
        Contact Us:
      </h1>
      <div style="font-family: Blanka, sans-serif" class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 style="color: white" class="mb-4 pb-3">Email</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              name="name"
                              v-model="name"
                              class="form-style"
                              placeholder="Name"
                              id="sender-email"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              name="email"
                              type="email"
                              v-model="email"
                              class="form-style"
                              placeholder="E-mail"
                              id="sender-password"
                              autocomplete="off"
                            />
                          </div>
                          <div class="form-group mt-2">
                            <textarea
                              type="text"
                              name="message"
                              v-model="message"
                              class="form-style"
                              placeholder="Message"
                              id="message"
                              autocomplete="off"
                            ></textarea>
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a
                            href="#"
                            class="btn mt-4"
                            @click.prevent="sendEmail"
                            >Send</a
                          >
                          <!-- @click.prevent används för att inte skicka tillbaka användaren till första sidan när man klickar ok utan man stannar på contact sidan. -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 style="text-align: center">Creators:</h1>
      <p style="text-align: center; font-size: 25px">
        Oliver Käll, Elly Olivebring, Pedram Hejazi Kenari, Jonas Hultberg
      </p>
    </b-container>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      //Kontrollerar så det är i rätt email format
      if (!this.isValidEmail(this.email)) {
        alert("Please enter a valid E-mail address.");
        return;
      }

      // Kontrollerar om alla fält är ifyllda
      if (!this.name || !this.email || !this.message) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        console.log(this.name, this.email, this.message);
        emailjs
          .send(
            "service_g5vtt9n",
            "template_76ncdsj",
            {
              name: this.name,
              email: this.email,
              message: this.message,
            },
            "JEMOJH_JYUPKffVMc"
          )
          .then(() => {
            alert("Your E-mail has been sent\n\n" + this.message);
            this.name = "";
            this.email = "";
            this.message = "";
          })
          .catch((error) => {
            console.log({ error });
            alert("Failed to send E-mail. Please try again later.");
          });
      } catch (error) {
        console.log({ error });
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("assets/background-contact.jpeg");
  color: white;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

.form-group input::placeholder {
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.form-group textarea::placeholder {
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.form-style {
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.form-group textarea,
.form-group input[type="text"] {
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.contact-header {
  color: white;
}

@font-face {
  font-family: "Blanka";
  src: url("assets/Fonts/blanka-free-for-commercial-use/Blanka.otf")
    format("opentype");
}

body {
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #c4c3ca;
  background-color: #1f2029;
  overflow-x: hidden;
}

p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}

h4 {
  font-weight: 600;
}

h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.section {
  position: relative;
  width: 100%;
  display: block;
}
.full-height {
  min-height: 0vh;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #2e67f8;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: white;
  background-color: #2e67f8;
  font-family: "unicons";
  content: "\eb4f";
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}

.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #151313;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 40px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}

.form-group {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}
.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}
.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}
.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #285bd2;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:-ms-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input::-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input::-webkit-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus:-ms-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus::-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus:-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.btn {
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #2e67f8;
  color: white;
  box-shadow: 10px 10px 50px 0 rgba(46, 103, 248, 0.5);
}
.btn:active,
.btn:focus {
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 10px 10px 50px 0 rgba(16, 39, 112, 0.5);
}
.btn:hover {
  background-color: #eb212e;
  color: black;
  box-shadow: 10px 10px 50px 0 rgba(235, 33, 46, 0.5);
}
</style>
