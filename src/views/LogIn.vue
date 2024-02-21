<template>
    <div id="background">
    <h1>Create New User</h1>
    <div id="app">
      <form @submit.prevent="registerUser">
        <label style="margin-right: 5px;" for="username">Username:</label>
        <input style="margin-right: 20px;" type="text" id="username" v-model="username" required>
        
        <label style="margin-right: 5px;" for="password">Password:</label>
        <input style="margin-right: 20px;" type="password" id="password" v-model="password" required>
        
        <button id="register" type="submit">Register</button>
      </form>
    </div>
    </div>
  </template>
  
  <style scoped>

  #app {
    align-items: center;
    border-radius: 0.4em;
  }

  #background{
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(13, 13, 13, 1)),
    url("assets/user-background.jpeg");
    background-size: cover;
  }
  
  #register {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid black;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.3em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'StarJedi', sans-serif;
    font-weight: 300;
    color: black;
    text-align: center;
    transition: all 0.2s;
  }
  
  #register:hover {
    color: #000000;
    background-color: white;
  }

  @font-face {
  font-family: 'StarJedi';
  src: url('./assets/star_jedi.woff2') format('woff2'),
       url('./assets/star_jedi.woff') format('woff');
  }


  h1{
    font-family: 'StarJedi', sans-serif;
    padding: 15px;
    text-align: center;
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