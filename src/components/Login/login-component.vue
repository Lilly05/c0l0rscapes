<template>
  <div class="container">
    <form>
      <h1>Login</h1>
      <div class="form-group">
        <label for="name">Email address</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <button type="button" class="btn btn-primary" :disabled="isLoginDisabled" @click="login">Login</button>
      <button type="button" class="btn btn-primary" @click="switchToRegister">Register</button>
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
        alert(response.data.message);
        this.$router.push('/login');
      } catch(error) {
        alert(error);
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

button {
  margin-right: 10px;
}

h1{
  font-family: "Matemasie", sans-serif;
  font-style: normal;
  text-align: center;
  color: #AED9E0;
  font-size: 40px;
}
</style>
