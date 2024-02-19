<script>
export default {
  created() {
    fetch("/questions.json")
      .then((resp) => resp.json())
      .then((data) => {
        data.Padawan.forEach((question) => {
          this.shuffle(question.allAnswers);
        });
        let qs = [];
        qs = qs.concat(data.Padawan);
        this.questions = qs;
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
    check() {
      console.log(`Your current answer is:`);
    },
  },

  data() {
    return {
      questions: [],
      chosen: "",
    };
  },
};
</script>

<style scoped>
#box {
  border: 2px solid blue;
  border-radius: 20px;
  /* width: fit-content; */
}

button {
  width: 200px;
  border-radius: 20px;
}

#contain {
}
</style>

<template>
  <BContainer>
    <BRow class="mt-4" v-for="q in questions" id="box">
      <BCol class="d-flex flex-column mt-2 align-items-center">
        <h1>{{ q.question }}</h1>
        <button @click="check" v-for="a in q.allAnswers">{{ a }}</button>
      </BCol>
    </BRow>
  </BContainer>
</template>
