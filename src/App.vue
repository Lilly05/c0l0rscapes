<template>
  <div class="container">
    <RouterLink to="/" id="routerlink">
    <div class="title-container">
      <h1 class="title">C</h1>
      <h1 class="title colored-text">0</h1>
      <h1 class="title">l</h1>
      <h1 class="title colored-text">0</h1>
      <h1 class="title">r</h1>
      <h1 class="title colored-text">S</h1>
      <h1 class="title">c</h1>
      <h1 class="title colored-text">a</h1>
      <h1 class="title">p</h1>
      <h1 class="title colored-text">e</h1>
      <h1 class="title">s</h1>
    </div>
    </RouterLink>
      <FontAwesomeIcon :icon="faUser()" class="icon" @click="login()"/>
  </div>
  <RouterView></RouterView>
</template>

<script>
import {faArrowAltCircleLeft, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'App',
  methods: {
    faArrowAltCircleLeft() {
      return faArrowAltCircleLeft
    },
    faUser() {
      return faUser
    },

    login() {
      this.$router.push('/login');
    },
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Matemasie&display=swap');
@import 'bootstrap/dist/css/bootstrap.min.css';

body {
  background-color: black !important;
}

.container {
  display: flex;
  justify-content: center;
}

.title-container {
  display: flex;
  justify-content: center;
}

.title {
  font-family: "Matemasie", sans-serif;
  font-style: normal;
  font-size: 70px;
  text-align: center;
  margin: 0;
  color: #AED9E0;
}

.colored-text {
  color: #DBAFC1;
}

.icon {
  color: white;
  font-size: 40px;
  position: absolute;
  cursor: pointer;
  margin-left: 75%;
  margin-top: 4vh;
}

#routerlink {
  text-decoration: none;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 35px;
  }

  .title-container{
    margin-left: -10%;
  }

  .icon {
    font-size: 25px;
    margin-top: 1.5vh;
    margin-right: 2vh;
  }
}

</style>
