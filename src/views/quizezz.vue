<script>
export default {
  // created, en livscyckel metod. först när ett vue komponent har initialiseras.
  // Promise/Async/Await kanske vore en bättre lösninsg, men har blivit allt för van vid fetch api.

  // den fetchar ett json fil, objekt med frågor. Varje property, en array med objekt med tio olika frågor var.

  created() {
    fetch("/questions.json")
      .then((resp) => resp.json())
      .then((data) => {
        // kalla på ett objekts värde dynamiskt med [], i detta fall en prop som den förväntar sig, denna prop ändras beroende på vad för knapp som trycks från ett annat vue komponent.

        let questions = data[this.chosenDiffi];

        // blanda denna array med frågor med fisher yates algoritm.

        questions.forEach((question) => {
          this.shuffle(question.allAnswers);
        });

        // blanda denna array med svar med fisher yates algoritm.

        this.shuffle(questions);

        // den tomma array (questions) som deklarerats, är nu en array med blandade frågor.

        this.questions = questions;

        // Uppdatera poäng baserat på svårighetsgrad
        switch (this.chosenDiffi) {
          case "JediKnight":
            this.pointPerCorrectAnswer = 20;
            break;
          case "Grandmaster":
            this.pointPerCorrectAnswer = 30;
            break;
          case "Padawan":
            this.pointPerCorrectAnswer = 10;
            break;
        }

        // data variabel, vars värde startade med null, är en array med det första frågan i ledet.

        this.currentQuest = this.questions[0];
        console.log(this.questions);
      });
  },

  // I created() har vi inte access till DOM element ännu,
  // den får däremot tillgång till vue instanser (data, methods, computed etc..)
  // Då kan det vara bra att fetch:a API data med. Det är först när vi når mounted() vi
  // får tillgång till element som vi kan manipulera.

  mounted() {
    const returnScore = sessionStorage.getItem("score");
    this.score = parseInt(returnScore);
    if (isNaN(this.score)) {
      this.score = 0;
    }
  },

  methods: {
    saveUserScore() {
      const currentScore = parseInt(localStorage.getItem("score"), 10);
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!loggedInUser) {
        return;
      }

      const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username === loggedInUser.username) {
          accounts[i].score = currentScore;
          localStorage.setItem("accounts", JSON.stringify(accounts));
          break;
        }
      }
    },

    // Fisher-Yates shuffle, array blandare. Parametern är då i detta fall en array.

    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    },

    // En funktion för kontrollering av svar, med parameterarna där ena är möjliga svar och det andra det rätta svaret.
    // kontroll via strict equality, om rätt svar valts, ge poäng och hoppa till nästa fråga efter 1.9sek, om inte, inga poäng och hoppa till nästa svar.

    // Data variablen "selected" är bunden till disabled med v-bind för att göra knapparna disabled när ett val har gjorts.

    check(choice, correctAnswer) {
      if (!this.selected) {
        this.selected = true;
        if (choice === correctAnswer) {


          this.score += this.pointPerCorrectAnswer;
          localStorage.setItem("score", this.score.toString());


          // this.score = this.score + 10;

          // this.score += this.pointPerCorrectAnswer;
          // localStorage.setItem("score", this.score.toString());


          this.saveScore(this.score);


          // this.score += 10;
          // localStorage.setItem("score", this.score.toString());


          console.log("You have chosen wisely");
          this.chosen = "Correct!";
          setTimeout(() => {
            this.chosen = "";
            this.nextQuest();
          }, 1900);
        }

        // Hoppa till nästa fråga med nextQuest funktionen (mer om detta nedan)
        else {
          console.log("You chose...poorly");
          this.chosen = "Incorrect!";
          setTimeout(() => {
            this.chosen = "";
            this.nextQuest();
          }, 1900);
        }
      }
    },

    saveScore(newScore) {
      localStorage.setItem("score", newScore.toString());
      // localStorage.setItem("score", this.score.toString())
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!loggedInUser) {
        return;
      }

      const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username === loggedInUser.username) {
          accounts[i].score = newScore;
          localStorage.setItem("accounts", JSON.stringify(accounts));
          break;
        }
      }

      // const userIndex = accounts.findIndex(account => account.username === loggedInUser.username)

      // if (userIndex !== -1) {
      //   accounts[userIndex].score = newScore
      //   localStorage.setItem('accounts', JSON.stringify(accounts));
      // }
    },

    // Det blev lite för komplext med att flera frågor visades upp, att enbart ha en åt gången var lättare att hantera och personligen något jag tyckte passade ett quiz spel bättre.

    // En variabel med en siffra som startar på 0, som jämförs med längden med alla frågor i ledet, när jag vill ladda nästa fråga, öka denna siffra med increment, ta denna siffra och placera det inne i this.question, för nästa fråga i ledet. "selected" blev true tidigare, gör om det till false (gör det redo för nästa fråga att kunna välja med svar som sedan blir true på nytt)

    nextQuest() {
      if (this.currentQuestIndex < this.questions.length - 1) {
        this.currentQuestIndex++;
        this.currentQuest = this.questions[this.currentQuestIndex];
        this.selected = false;
      }
    },
  },

  clearScore() {
    this.score = 0;
  },

  // Prop:en i fråga, den förväntar sig en sträng, denna stränga ändras mellan tre olika värden, i och med att det är en objekt, vi kallar på dess värde dynamiskt med [].

  props: {
    chosenDiffi: String,
    bgColor: String,
  },

  data() {
    return {
      questions: [],
      selected: false,
      currentQuest: null,
      currentQuestIndex: 0,
      chosen: "",
      score: 0,
      timer: 90,
    };
  },
};
</script>

<template>
  <div v-if="currentQuest !== null">
    <BContainer>
      <h1 style="text-align: center" class="text mt-3 d-flex justify-content-center">
        {{
          "Current score: " +
          this.score +
          " | " +
          (this.currentQuestIndex + 1) +
          "/" +
          this.questions.length
        }}
      </h1>
      <BCol id="box" class="d-flex flex-column mt-2 align-items-center w-50 mx-auto mb-5 mt-5"
        :style="{ border: '5px outset ' + this.bgColor }">
        <div id="content">
          <h4>{{ currentQuest.question }}</h4>
          <button v-for="a in currentQuest.allAnswers" @click="check(a, currentQuest.correctAnswer)" :disabled="selected"
            :class="{
              'btn-correct': selected && a === currentQuest.correctAnswer,
              'btn-incorrect': selected && a !== currentQuest.correctAnswer,
            }" class="btn-answer">
            {{ a }}
          </button>
          <h4>{{ "Your answer: " + this.chosen }}</h4>
          <h4 v-if="selected">
            {{ "Correct answer: " + currentQuest.correctAnswer }}
          </h4>
        </div>
      </BCol>
    </BContainer>
  </div>
</template>

<style scoped>
#content {
  margin: auto;
}

#box {
  /* border: 2px solid black; */
  border-radius: 20px;
  width: 380px !important;
  height: 400px;
  margin-bottom: 3000px;
  text-align: center;
  background-color: #151313;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 200%;
}

button {
  height: 30px;
  margin: 4px;
  width: 200px;
  border-radius: 20px;
  color: black;
}

.btn-correct {
  background-color: green;
}

.btn-incorrect {
  background-color: red;
}

.btn-answer:disabled {
  color: black;
}

@media screen and (max-width: 700px) {
  #box {
    box-sizing: content-box;
    border-radius: 20px;
    width: 340px !important;
    height: 345px;
    text-align: center;
    background-color: #151313;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 200%;
  }
}

@media screen and (max-width: 450px) {
  #box {
    box-sizing: content-box;
    border-radius: 20px;
    width: 300px !important;
    height: 330px;
    text-align: center;
    background-color: #151313;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 200%;
  }

  button {
    height: 30px;
    margin: 4px;
    width: 200px;
    border-radius: 20px;
    color: black;
  }
}
</style>
