<template>
  <h1>All your guesses</h1>
  <div class="analytics-container" v-if="analytics !== undefined">
    <div v-for="a in analytics.data" :key="a.userId">
      <div class="analytics-element">
        <div class="colored-squares">
          <div class="color" :style="{ backgroundColor: a.color, width: '75px', height: '75px' }"></div>
          <div class="color" :style="{ backgroundColor: a.guessedColor, width: '75px', height: '75px' }"></div>
        </div>
        <h3 class="accuracy">{{a.accuracy}}% accurate</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      analytics: undefined,
      colorProps: { blank: true, width: 75, height: 75, class: 'm1'}
    }
  },
  async mounted() {
    this.analytics = await axios.get('http://localhost:3000/api/game/history/'+ localStorage.getItem('userId'));
    console.log(localStorage.getItem('userId'));
    for (const a of this.analytics.data) {
      console.log(a.color)
      console.log(a.guessedColor)
      console.log(a.accuracy)
    }
  }
}

</script>

<style>
h1{
  margin-top: 30px;
  font-size: 40px;
}

.accuracy{
  margin: 10px;
  color: white;
}

.color{
  margin: 5px;
  border: white 0.5px solid;
}

.analytics-container {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;
  margin-left: 25%;
  margin-top: 50px;
}

.analytics-element {
  text-align: center;
}

.colored-squares {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

@media screen and (max-width: 600px) {
  h1{
    font-size: 25px;
  }
}
</style>