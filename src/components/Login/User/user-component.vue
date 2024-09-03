<template>
  <h1 class="logout-title">Hello {{name}}!</h1>
  <div class="logout-container">
    <b-button class="btn btn-primary logout-button" @click="logout()">Logout</b-button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      name: localStorage.getItem('name')
    }
  },
  methods: {
    async logout() {
      try {
         await axios.post('http://localhost:3000/api/user/logout', {}, {
          withCredentials: true
        });
         localStorage.removeItem('userId');
         localStorage.removeItem('name');
        this.$router.push('/login');
      }catch(error) {
        console.log(error);
      }
    }
  }

}
</script>

<style>
.logout-button {
  background: #F07167;
  border: none;
  justify-content: center;
  margin: 20px;
}

.logout-container {
  display: flex;
  justify-content: center;
}

.logout-title{
  color: #AED9E0;
  font-size: 35px;
}

@media screen and (max-width: 600px) {
  .logout-title{
    font-size: 25px;
  }

  .logout-button{
    font-size: 15px !important;
  }
}
</style>