<template>
  <h1>hello {{name}}</h1>
  <b-button class="btn btn-primary logout-button" @click="logout()">Logout</b-button>
</template>

<script>
import AuthService from "@/services/authService";
import axios from "axios";

export default {
  data() {
    return {
      name: AuthService.getName(),
    }
  },
  methods: {
    async logout() {
      try {
        const response = await axios.post('http://localhost:3000/api/user/logout', {}, {
          withCredentials: true
        });
        alert(response.data.message);
        this.$router.push('/login');
      }catch(error) {
        alert(error.message);
      }
    }
  }

}
</script>

<style>
.logout-button {
  background: #F07167;
  border: none;
}
</style>