<template>
  <App>
    Enter the thresholds of each color inside each box
    <Palette/>
    <div>
      <Button :text="'Add a color'" @click.native="addColor()" />
      <Button :text="'Color legend'" @click.native="printColorLegend()" />
    </div>
    <ColorPicker />
    <div v-if="colorLegend !== ''">
      Result:<br />{{colorLegend}}
    </div>
  </App>
</template>

<script>
import styled from "vue-styled-components"
import { mapGetters } from "vuex"

import Button from "./components/Button.vue"
import ColorPicker from "./components/ColorPicker.vue"
import Palette from "./components/Palette/Palette.vue"

const App = styled.div`
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
`

export default {
  name: "app",
  components: {
    App,
    Palette,
    Button,
    ColorPicker
  },
  data() {
    return {
      colorLegend: ""
    }
  },
  computed: mapGetters({
    colors: "getColors"
  }),
  methods: {
    addColor() {
      this.$store.commit("addColor")
    },
    printColorLegend() {
      const sortedColors = [...this.colors]
      sortedColors.sort((a, b) => b.threshold - a.threshold)
      sortedColors.push({
        threshold: "negative-infinity",
        color: sortedColors[sortedColors.length - 1].color
      })
      this.colorLegend = JSON.stringify(sortedColors)
    }
  }
}
</script>
