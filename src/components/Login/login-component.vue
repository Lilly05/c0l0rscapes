<template>
  <div class="container">
    <form>
      <h1 id="login-title">Login</h1>
      <div class="form-group">
        <label for="name">Email address</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <div class="buttons">
        <b-button type="button" class="btn btn-primary login-button" :disabled="isLoginDisabled" @click="login">Login</b-button>
        <b-button type="button" class="btn btn-primary login-button" @click="switchToRegister">Register</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    switchToRegister() {
      this.$router.push('/register');
    },
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/user/login', {
          name: this.name,
          password: this.password
        },
            {
              withCredentials: true
            });
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('name', response.data.name);
        this.$router.push('/');
      } catch(error) {
        console.log(error)
      }
    }
  },
  computed: {
    isLoginDisabled() {
      if (this.name !== '' && this.password !== ''){
        return false;
      }
      return true;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Matemasie&display=swap');

.container {
  display: flex;
  justify-content: center;
}

form {
  margin-top: 50px;
  width: 50vh;
}

label {
  color: white;
  margin-bottom: 10px;
}

input {
  margin-bottom: 20px;
}

b-button {
  margin-right: 10px;
  width: 200px;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

#login-title{
  font-family: "Matemasie", sans-serif;
  font-style: normal;
  text-align: center;
  color: #AED9E0;
  font-size: 40px;
}

.login-button {
  background: #AED9E0;
  border: none;
}

.login-button:hover, .login-button:active, .login-button:focus {
  background: #C3F3C0;
}

@media screen and (max-width: 600px) {
  #login-title{
    font-size: 25px;
    margin-top: 10px;
  }

  input{
    width: 75% !important;
    margin-left: 10%;
  }

  label{
    margin-left: 10%;
  }

  .login-button{
    font-size: 20px !important;
    width: 50%;
  }
}

</style>
