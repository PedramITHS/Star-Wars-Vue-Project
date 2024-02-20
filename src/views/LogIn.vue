<template>
    <h1>hej</h1>
    <div id="app">
    <form @submit.prevent="registerUser">
      <label style="margin-right: 5px;" for="username">Username:</label>
      <input style="margin-right: 20px;" type="text" id="username" v-model="username" required>
      
      <label style="margin-right: 5px;" for="password">Password:</label>
      <input style="margin-right: 20px;" type="password" id="password" v-model="password" required>
      
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style scoped>

#app{
    align-items: center;
}

</style>

<script>
// new Vue({
//       el: '#app',
//       data: {
//         username: '',
//         password: ''
//       },
//       methods: {
//         registerUser() {
//           localStorage.setItem('user', JSON.stringify({
//             username: this.username,
//             password: this.password
//           }));
          
//           this.username = '';
//           this.password = '';
          
//           alert('Användare registrerad!');
//         }
//       }
//     });

</script>