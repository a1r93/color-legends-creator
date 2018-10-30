<template>
  <Container :colors="colors">
    <Cell 
      v-for="(color, index) in colors"
      :key="index"
      :index="index"
      :threshold="color.threshold"
      :color="color.color"
    />
  </Container>
</template>

<script>
import styled from "vue-styled-components"
import { mapGetters } from "vuex"

import Cell from "./Cell"

const containerProps = {
  colors: Array
}
const Container = styled("div", containerProps)`
  width: 100%;
  height: 120px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(
    ${props => props.colors.length},
    ${props => 100 / props.colors.length}%
  );
  margin-bottom: 15px;
`

export default {
  name: "Palette",
  components: {
    Cell,
    Container
  },
  computed: mapGetters({
    colors: "getColors"
  })
}
</script>
