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
      <div class="form-group">
        <label for="exampleInputPassword1">Repeat password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Repeat password" v-model="repeatPassword">
      </div>
      <button type="submit" class="btn btn-primary" @click="login">Back to Login</button>
      <button type="submit" class="btn btn-primary" @click="register" :disabled="registerIsDisabled">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {

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

</style>