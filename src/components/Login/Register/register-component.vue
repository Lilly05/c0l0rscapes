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
      <button type="button" class="btn btn-primary" @click="register" :disabled="registerIsDisabled">Register</button>
      <button type="button" class="btn btn-primary" @click="login">Back to Login</button>
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
}
</style>