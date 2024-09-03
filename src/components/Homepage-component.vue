<template>
  <div class="button-container">
    <RouterLink to="/game">
      <b-button class="btn btn-primary start-button button" size="lg">
        Start
      </b-button>
    </RouterLink>
    <RouterLink to="/analytics">
      <b-button class="btn btn-primary analytics-button button" size="lg">
        Get analytics
      </b-button>
    </RouterLink>
  </div>
</template>

<script>

</script>

<style>
.button-container {
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
  align-items: center;
}

.button {
  width: 40vh;
  margin-top: 10px;
}

b-button {
  text-align: center;
  font-size: 25px !important;
  color: black !important;
}

b-button:hover {
  transform: scale(0.98);
  background: #C3F3C0 !important;
}

b-button:active {
  transform: scale(0.95);
  background: #C3F3C0 !important;
}

.start-button {
  background-color: #DBAFC1 !important;
  border: none !important;
}

.analytics-button {
  background-color: #AED9E0 !important;
  border: none !important;
}

@media screen and (max-width: 600px) {
  .button {
    font-size: 20px !important;
    width: 30vh;
  }

  .button-container{
    margin-top: 5vh;
  }

  b-button {
    font-size: 10px !important;
  }
}
</style>