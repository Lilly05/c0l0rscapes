<template>
  <div class="container">
    <form>
      <h1>Register</h1>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <div class="form-group">
        <label for="repeatPassword">Repeat password</label>
        <input type="password" class="form-control" id="repeatPassword" placeholder="Repeat password" v-model="repeatPassword">
      </div>
      <div class="buttons">
      <b-button type="button" class="btn btn-primary register-button" @click="register" :disabled="registerIsDisabled">Register</b-button>
      <b-button type="button" class="btn btn-primary register-button" @click="login">Back to Login</b-button>
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
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    async register() {
      try {
        const response = await axios.post('http://localhost:3000/api/user/register', {
          name: this.name,
          password: this.password
        });
        alert(response.data);
        this.$router.push('/login');
      } catch(error) {
        alert(error);
      }
    },
  },
  computed: {
    registerIsDisabled() {
      if (this.password !== '' && this.repeatPassword !== '') {
        if (this.password === this.repeatPassword) {
          return false;
        }
      }
      return true;
    }
  }
}
</script>

<style>
h1 {
  color: #DBAFC1;
  font-family: "Matemasie", sans-serif;
  font-style: normal;
  text-align: center;
  font-size: 40px;
}

.register-button {
  background: #DBAFC1;
  border: none;
}

.register-button:hover, .register-button:focus, .register-button:active{
  background: #C3F3C0;
}
</style>