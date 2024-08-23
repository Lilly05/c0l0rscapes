<template>
  <div class="button-container">
    <RouterLink to="/game">
      <b-button class="btn btn-primary start-button" size="lg">
        Start
      </b-button>
    </RouterLink>
    <b-button class="btn btn-primary analytics-button" size="lg">
      Get analytics
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Apples',
      message: 'I like apples'
    }
  }
};
</script>

<style>
.button-container {
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
  align-items: center;
}

b-button {
  width: 40vh;
  margin-top: 10px;
  text-align: center;
  font-size: 25px !important;
  color: black !important;
}

.start-button {
  background-color: #DBAFC1 !important;
  border: none !important;
}

.analytics-button {
  background-color: #AED9E0 !important;
  border: none !important;
}

</style>