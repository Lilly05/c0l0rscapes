<template>
  <div class="wrapper">
    <div class="box" v-bind:style= "[color === 'rgb(0, 0, 0)' ? {'border' : 'white 1px solid', backgroundColor: color} : {'border': 'none', backgroundColor: color}]"></div>
  </div>
  <div class="slider-container">
    <label for="red" class="red-label">Red </label>
    <input type="range" id="red" min="0" max="255" @input="updateColor" v-model="inputRed">
  </div>
  <div class="slider-container">
    <label for="green" class="green-label">Green </label>
    <input type="range" id="green" min="0" max="255" @input="updateColor" v-model="inputGreen">
  </div>
  <div class="slider-container">
    <label for="blue" class="blue-label">Blue </label>
    <input type="range" id="blue" min="0" max="255" @input="updateColor" v-model="inputBlue">
  </div>
  <div class="icon-container">
    <FontAwesomeIcon :icon="faArrowAltCircleLeft()" class="back-icon" @click="back()"/>
    <FontAwesomeIcon :icon="faCheck()" class="check-icon" @click="checkColor()"/>
  </div>
</template>

<script>
import { faArrowAltCircleLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
      color: 'rgb(0, 0, 0)',
      inputRed: 0,
      inputGreen: 0,
      inputBlue: 0,
    };
  },
  props: {
    rgb: {
      type: Array,
      required: true,
    }
  },
  watch: {
    rgb(value) {
      if (value.length === 3) {
        this.setColorValues(value);
      }
    }
  },
  methods: {
    faCheck() {
      return faCheck;
    },
    faArrowAltCircleLeft() {
      return faArrowAltCircleLeft;
    },
    setColorValues([r, g, b]) {
      this.red = r;
      this.green = g;
      this.blue = b;
      this.updateColor();
    },
    updateColor() {
      this.color = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
    back() {
      this.$router.push('/');
    },
    checkColor() {
      let data = {
        color: this.color,
        inputColor: `rgb(${this.inputRed}, ${this.inputGreen}, ${this.inputBlue})`
      };
      this.$router.push({
        name: "result",
        query: { data: JSON.stringify(data) }
      });
    }

  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Matemasie&display=swap');

.wrapper {
  display: flex;
  justify-content: center;
}

.box {
  margin-top: 100px;
  width: 30vh;
  height: 30vh;
}

label {
  font-family: "Matemasie", sans-serif;
  font-style: normal;
  font-size: 30px;
  color: #AED9E0;
}

.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 25%;
}

.red-label {
  padding-top: 50px;
  color: #F07167;
}

.blue-label {
  color: #92DCE5;
}

.green-label {
  color: #C3F3C0;
}

.back-icon {
  color: white;
  cursor: pointer;
  margin-top: 50px;
  font-size: 40px;
}

.check-icon {
  color: white;
  cursor: pointer;
  margin-left: 28vh;
  margin-top: 50px;
  font-size: 40px;
}

.icon-container {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .box {
    margin-top: 50px;
    width: 15vh;
    height: 15vh;
  }

  label {
    font-size: 20px;
  }

  input {
    width: 75%;
  }

  .icon-container {
    margin-left: 10%;
  }
}
</style>
