<template>
  <div class="wrapper">
    <div class="box"  v-bind:style= "[color === 'rgb(0, 0, 0)' ? {'border' : 'white 1px solid', backgroundColor: color } : {'border': 'none', backgroundColor: color }]"></div>
  </div>
  <div class="wrapper" >
  <div class="input-box" v-bind:style= "[inputColor === 'rgb(0, 0, 0)' ? {'border' : 'white 1px solid', backgroundColor: inputColor } : {'border': 'none', backgroundColor: inputColor }]"></div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
      color: null,
      inputColor: null,
      similarity: null
    };
  },
  mounted() {
    if (this.$route.query.data) {
      try {
        this.data = JSON.parse(this.$route.query.data);
        this.color = this.data.color;
        this.inputColor = this.data.inputColor;

        this.similarity = this.calculateColorSimilarity(this.color, this.inputColor);
        this.saveGuess();
        console.log(this.similarity)
      } catch (e) {
        console.error("Failed to parse data from query:", e);
      }
    } else {
      console.log("No data found in route query");
    }
  },
  methods: {
    calculateColorSimilarity(rgb1, rgb2) {
      // Extrahiere die RGB-Werte
      let rgbArray1 = rgb1.match(/\d+/g).map(Number);
      let rgbArray2 = rgb2.match(/\d+/g).map(Number);

      const [r1, g1, b1] = rgbArray1;
      const [r2, g2, b2] = rgbArray2;

      // Berechne den euklidischen Abstand
      const distance = Math.sqrt(
          Math.pow(r2 - r1, 2) +
          Math.pow(g2 - g1, 2) +
          Math.pow(b2 - b1, 2)
      );

      // Maximaler Abstand im RGB-Farbraum
      const maxDistance = Math.sqrt(3 * Math.pow(255, 2));
      if (Math.round((1 - (distance / maxDistance)) * 100) > 100) {
        return 100;
      }
      return Math.round((1 - (distance / maxDistance)) * 100);
    },
    async saveGuess() {
      try {
        await axios.post('http://localhost:3000/api/game/saveGuess', {
          color: this.color,
          inputColor: this.inputColor,
          accuracy: this.similarity,
          userID: localStorage.getItem('userId')
        });
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
}

.box {
  margin-top: 100px;
  width: 30vh;
  height: 30vh;
}

.input-box {
  margin-top: 100px;
  width: 30vh;
  height: 30vh;
  margin-left: 500px;
}
</style>