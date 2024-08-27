<template>
  <div class="wrapper">
    <div class="box"  v-bind:style= "[color === 'rgb(0, 0, 0)' ? {'border' : 'white 1px solid', backgroundColor: color } : {'border': 'none', backgroundColor: color }]"></div>
  </div>
  <div class="wrapper" >
  <div class="input-box" v-bind:style= "[inputColor === 'rgb(0, 0, 0)' ? {'border' : 'white 1px solid', backgroundColor: inputColor } : {'border': 'none', backgroundColor: inputColor }]"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      color: null,
      inputColor: null
    };
  },
  mounted() {
    if (this.$route.query.data) {
      try {
        this.data = JSON.parse(this.$route.query.data);
        this.color = this.data.color;
        this.inputColor = this.data.inputColor;
        console.log("Data received from query and parsed:", this.data);
      } catch (e) {
        console.error("Failed to parse data from query:", e);
      }
    } else {
      console.log("No data found in route query");
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
  border: white solid 1px;
}

.input-box {
  margin-top: 100px;
  width: 30vh;
  height: 30vh;
  margin-left: 500px;
  border: white solid 1px;
}
</style>