<script>
export default {
  data() {
    return {
      accounts: [],
      //accounts innehåller alla andvändare.
      username: '',
      password: '',
      loggedInUserName: ''
      //loggedInUserName sparar vem som är innloggad.
    }
  },
  created() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedInUserName = loggedInUser ? loggedInUser.username : '';
    this.accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    //Läser in alla accounts och loggedInUserName.
  },
  methods: {
    clearUsers() {
      this.accounts = [];
      localStorage.setItem('accounts', JSON.stringify(this.accounts));
      // Här rensas listan.
    },
    buttonUser(choose) {
      if (!this.username.trim() || !this.password.trim()) {
        alert("Username and password are required");
        return;
        // kollar att det inte är tomt efter att tagit bort onödiga mellanslag.
      }

      if (choose === 'register') {
        this.accounts.push({ username: this.username, password: this.password, name: this.username, score: 0 });
        localStorage.setItem('accounts', JSON.stringify(this.accounts));
        alert('You have created a new user: ' + this.username + '!');
        /* om "choose" är lika med register läggs det till ett användarnamn, lösenord och poäng. Poängen är även förinställt till 0.*/
      }
      else if (choose === 'login') {
        const user = this.accounts.find(account => account.username === this.username && account.password === this.password);
        /* Om det istället är login letar den efter ett konto som matchar både lösenord och användarnamn.*/

        if (user) {
          localStorage.setItem('loggedInUser', JSON.stringify({ username: this.username }));
          alert('Welcome: ' + this.username);
          /*Om användaren finns loggas den nu in och sparas som inloggad användare i  loggedInUser.*/
        }
        else {
          alert('Login fail');
          /* Om något går snett*/
        }
      }

      this.username = "";
      this.password = "";
      /* Rensas*/

    },
  }
};

</script>

<template>
  <div id="background">
    <div style="font-family: Blanka, sans-serif" class="section">
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div style="margin-bottom: 100px" class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 style="font-size: 24px; color: white" class="mb-0 pb-3">
                <span>Log In</span><span>Sign Up</span>
              </h6>
              <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 style="color: white" class="mb-4 pb-3">Log In</h4>
                        <div class="form-group">
                          <input type="username" name="username" class="form-style" placeholder="Username" id="logemail"
                            v-model="username" autocomplete="off" />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" name="logpass" class="form-style" placeholder="Password" id="logpass"
                            v-model="password" autocomplete="off" />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>

                        <button class="btn mt-4" @click="buttonUser('login')">Log In</button> <!--Logga in-->
                        <button class="btn mt-4" @click="clearUsers">Rensa listan</button>

                      </div>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 style="color: white" class="mb-4 pb-3">Sign Up</h4>
                        <div class="form-group mt-2">
                          <input type="username" name="username" class="form-style" placeholder="Username" id="logemail2"
                            v-model="username" autocomplete="off" />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" name="logpass" class="form-style" placeholder="Password" id="logpass2"
                            autocomplete="off" v-model="password" />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>

                        <button class="btn mt-4" @click="buttonUser('register')">Sign Up</button> <!--Sign in-->


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
  </div>
</template>

<style scoped>
#background {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(13, 13, 13, 0.1)),
    url("assets/user-background.jpg");
  background-size: cover;
}

@font-face {
  font-family: "Blanka";
  src: url("assets/Fonts/blanka-free-for-commercial-use/Blanka.otf") format("opentype");
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
  min-height: 100vh;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

.checkbox:checked+label,
.checkbox:not(:checked)+label {
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

.checkbox:checked+label:before,
.checkbox:not(:checked)+label:before {
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

.checkbox:checked+label:before {
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

.checkbox:checked~.card-3d-wrap .card-3d-wrapper {
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
  margin-right: 10px;
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
