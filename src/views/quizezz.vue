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
          }, 1500);
        } else {
          console.log("You chose...poorly");
          this.chosen = "Incorrect !";
          setTimeout(() => {
            this.chosen = "";
            this.nextQuest();
          }, 1500);
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
    chosenDiffi: String
  },

  data() {
    return {
      questions: [],
      selected: false,
      currentQuest: null,
      currentQuestIndex: 0,
      chosen: "",
      score: 0,
    };
  },
};
</script>

<style scoped>

#box {
  border: 2px solid blue;
  border-radius: 20px;
}



button {
  height: 50px;
  margin: 10px;
  width: 200px;
  border-radius: 20px;
}

@media screen and (max-width: 390px) {
  button {
    width: 150px;
    color: brown;
  }
}
</style>

<template>
  <div v-if="currentQuest !== null">
    <BContainer>
      <h1 class="mt-3 d-flex justify-content-center">
        {{ "Current score: " + this.score }}
      </h1>
      <BCol
        id="box"
        class="d-flex flex-column mt-2 align-items-center w-50 mx-auto mb-5 mt-5"
        style=""
      >
        <h1>{{ currentQuest.question }}</h1>
        <button
          v-for="a in currentQuest.allAnswers"
          @click="check(a, currentQuest.correctAnswer)"
          :disabled="selected"
        >
          {{ a }}
        </button>
        <h4>{{ "The answer is: " + this.chosen }}</h4>
      </BCol>
    </BContainer>
  </div>
</template>
