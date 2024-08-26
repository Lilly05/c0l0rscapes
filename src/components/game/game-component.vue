<template>
  <ColorBoxComponent :rgb="rgb"></ColorBoxComponent>
</template>

<script>
import ColorBoxComponent from "@/components/game/color-box/color-box-component.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    ColorBoxComponent
  },
  data() {
    return {
      rgb: Array
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/color')
        .then(response => this.rgb = response.data)
  }
};
</script>

<style>


</style>
