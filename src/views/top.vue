<script>
export default {
  created() {

    this.users = JSON.parse(localStorage.getItem('accounts'))
    console.log(this.users)
    this.loadUsers();
    // Hämtar lista med användare och tilldelar den till users.

  },

  data() {
    return {

      users: []
      // Här kommer användare synas.
    }
  },
  methods: {
    loadUsers() {
      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      this.users = accounts.sort((a, b) => b.score - a.score)
      // Hämtar accounts sorterar från högst till lägst poäng.
    }
  }



};







</script>

<style scoped>
#box {
  border: solid 10px rgb(86, 86, 87);
  border-radius: 20px;
  width: 50%;
  margin: auto;

  background-color: rgba(119, 136, 153, 0.781);
  text-decoration: underline;
}

.bgtop {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(13, 13, 13, 1)),
    url("assets/luke1.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 100%;

}
</style>

<template>
  <div class="bgtop">
    <BContainer id="box">
      <BRow align-h="between" v-for="(user, index) in users" :key="index">
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <img src="/assets/user-icon3.webp" alt="icon">
        </BCol>
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <h3>{{ index + 1 }} <!--Rank--></h3>
        </BCol>
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <h4>{{ user.name }} <!--Namn--></h4>
        </BCol>
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <h4>{{ user.score }} p <!--Poäng--></h4>

        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>
