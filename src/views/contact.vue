<template>
  <div
    id="page"
    class="bg-black d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="contact-header mt-0 mb-3">Contact:</h1>
    <b-container id="main" fluid class="gradient-background">
      <b-row class="justify-content-center">
        <b-col cols="12" md="6">
          <b-button @click="sendEmail" variant="primary" class="mb-3"
            >Send Email</b-button
          >
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" md="6">
          <div class="mt-3" id="inputs">
            <b-form-input
              v-model="name"
              placeholder="Name"
              autocomplete="off"
              class="custom-input mb-3"
            />
            <b-form-input
              type="email"
              v-model="email"
              placeholder="Email"
              autocomplete="off"
              class="custom-input mb-3"
            />
            <b-form-textarea
              v-model="message"
              placeholder="Message"
              autocomplete="off"
              rows="4"
              class="custom-input mb-3"
            ></b-form-textarea>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" md="6" class="text-center">
          <b-button @click="sendEmail" variant="primary" class="mb-3"
            >Send Email</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    sendEmail() {
      // Här kan du implementera logiken för att skicka e-post
      // Använd `this.name` och `this.email` för att få användarinputen
    },
  },
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url("assets/contact.jpeg");
  color: white;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

.contact-header {
  color: white;
}

.custom-input {
  border: 1px solid red; /* Ändra färgen på gränsen för input-fältet */
  border-radius: 10px; /* Lägg till en rundad kant på input-fältet */
  padding: 10px; /* Lägg till padding för att göra fälten längre */
  margin-bottom: 10px; /* Lägg till ett mellanrum mellan input-fälten */
}

.custom-button {
  background-color: red; /* Ändra bakgrundsfärgen på knappen */
  border-color: red; /* Ändra färgen på knappens kant */
  border-radius: 5px; /* Lägg till en rundad kant på knappen */
}

.bg-black {
  background-color: black;
}

body {
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #ffffff;
  /* background-image: url("assets/contact.jpeg"); */
  /* background-color: #1f2029; */
  overflow-x: hidden;
}
h1 {
  color: blue;
}

h2 {
  text-align: center;
}
#inputs {
  background-color: rgb(140, 17, 17);
}
#page {
  background-color: transparent;
}
</style>
