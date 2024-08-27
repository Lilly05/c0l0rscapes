<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <button type="button" class="btn btn-primary" :disabled="isLoginDisabled">Login</button>
      <button type="button" class="btn btn-primary" @click="switchToRegister">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    switchToRegister() {
      this.$router.push('/register');
    }
  },
  computed: {
    isLoginDisabled() {
      if (this.username !== '' && this.password !== ''){
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
</style>
