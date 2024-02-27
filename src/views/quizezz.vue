<script>
export default {
  created() {
    fetch("/questions.json")
      .then((resp) => resp.json())
      .then((data) => {
        data[this.chosenDiffi].forEach((question) => {
          this.shuffle(question.allAnswers);
        });
        let qs = [];
        qs = qs.concat(data[this.chosenDiffi]);
        this.questions = qs;
        this.currentQuest = this.questions[0];
        console.log(this.questions);
      });
  },

  methods: {
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    },
    check(choice, correctAnswer) {
      if (!this.selected) {
        this.selected = true;
        if (choice === correctAnswer) {
          this.score = this.score + 10;
          console.log("You have choosen wisely");
          this.chosen = "Correct !";
          setTimeout(() => {
            this.chosen = "";
            this.nextQuest();
          }, 1900);
        } else {
          console.log("You chose...poorly");
          this.chosen = "Incorrect !";
          setTimeout(() => {
            this.chosen = "";
            this.nextQuest();
          }, 1900);
        }
      }
    },

    nextQuest() {
      if (this.currentQuestIndex < this.questions.length - 1) {
        this.currentQuestIndex++;
        this.currentQuest = this.questions[this.currentQuestIndex];
        this.selected = false;
      }
    },
  },

  props: {
    chosenDiffi: String,
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
      <h1 class="text mt-3 d-flex justify-content-center">
        {{ "Current score: " + this.score }}
      </h1>
      <BCol
        id="box"
        class="d-flex flex-column mt-2 align-items-center w-50 mx-auto mb-5 mt-5"
        style=""
      >
        <h2>{{ currentQuest.question }}</h2>
        <button
          v-for="a in currentQuest.allAnswers"
          @click="check(a, currentQuest.correctAnswer)"
          :disabled="selected"
          :class="{
            'btn-correct': selected && a === currentQuest.correctAnswer,
            'btn-incorrect': selected && a !== currentQuest.correctAnswer,
          }"
          class="btn-answer"
        >
          {{ a }}
        </button>
        <h4>{{ "Your answer: " + this.chosen }}</h4>
        <h4 v-if="selected">
          {{ "Correct answer: " + currentQuest.correctAnswer }}
        </h4>
      </BCol>
    </BContainer>
  </div>
</template>

<style scoped>
#box {
  border: 2px solid blue;
  border-radius: 20px;
  width: 100px;
  margin-bottom: 3000px;
  text-align: center;
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

@media screen and (max-width: 390px) {
  button {
    width: 150px;
    color: brown;
  }
}
</style>
