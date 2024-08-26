<template>
  <div class="wrapper">
    <div class="box" :style="{ backgroundColor: color }"></div>
  </div>
  <div class="slider-container">
    <label for="red" class="red-label">Red </label>
    <input type="range" id="red" v-model="red" min="0" max="255" @input="updateColor">
  </div>
  <div class="slider-container">
    <label for="green" class="green-label">Green </label>
    <input type="range" id="green" v-model="green" min="0" max="255" @input="updateColor">
  </div>
  <div class="slider-container">
    <label for="blue" class="blue-label">Blue </label>
    <input type="range" id="blue" v-model="blue" min="0" max="255" @input="updateColor">
  </div>
  <FontAwesomeIcon :icon="faArrowAltCircleLeft()" class="back-icon" @click="back()"/>
  <FontAwesomeIcon :icon="faCheck()" class="check-icon"/>
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
    };
  },
  mounted() {
    if (this.rgb.length === 3) {
      this.setColorValues(this.rgb);
    }
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
  background: red;
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
  width: 500px;
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
  margin-left: 80vh;
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
</style>
