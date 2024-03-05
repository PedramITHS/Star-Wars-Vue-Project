<script>

export default {

  created() {

    // fetch('/users.json')
    // .then(resp => resp.json())
    // .then(data =>
    // {
    //   this.users = data.Users
    //   console.log(this.users)
    // })
   this.users = JSON.parse(localStorage.getItem('accounts'))
    console.log(this.users)
  },

  data() {
    return {
      users: []
    }
  }




}



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

img {
  width: 60px;
  height: 60px;
}

.bgtop {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(13, 13, 13, 1)),
    url("assets/luke1.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
</style>

<template>
  <div class="bgtop">
    <BContainer id="box">
      <BRow align-h="between" v-for="user in users">
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <h3>{{ user.placement }}</h3>
        </BCol>
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <img src="/assets/user-icon3.webp" alt="icon">
        </BCol>
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <h4>{{ user.name }}</h4>
        </BCol>
        <BCol class="d-flex flex-direction-row justify-content-center align-items-center">
          <h4>{{ user.score }}</h4>
        </BCol>
      </BRow>
    </BContainer>

  </div>
</template>
