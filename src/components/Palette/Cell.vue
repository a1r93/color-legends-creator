<template>
  <div>
    <StyledInput type="number" :value="threshold" @input="updateThreshold" />
    <Container :color="color" :selected="selectedIndex === index" @click="setSelectedIndex">
    </Container>
    <DeleteIcon @click="deleteThreshold"><RelativeX>x</RelativeX></DeleteIcon>
  </div>
</template>

<script>
import styled from "vue-styled-components"
import { mapGetters } from "vuex"

import { arrayToRgba } from "../../utils/colors"

const containerProps = {
  color: Array,
  selected: Boolean
}
const Container = styled("div", containerProps)`
  background: ${props => arrayToRgba(props.color)};
  width: 100%;
  height: ${props => (props.selected ? 43 : 40)}%;
  cursor: pointer;
`
const StyledInput = styled("input")`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
`
const DeleteIcon = styled("div")`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: tomato;
  margin: auto;
  color: white;
  margin-top: 5px;
  padding: 2px;
  cursor: pointer;
`
const RelativeX = styled("div")`
  position: relative;
  margin-top: -1px;
  margin-left: 1px;
`

export default {
  name: "Button",
  components: {
    Container,
    StyledInput,
    DeleteIcon,
    RelativeX
  },
  props: {
    color: Array,
    index: Number,
    threshold: Number
  },
  computed: mapGetters({
    colors: "getColors",
    selectedIndex: "getSelectedIndex"
  }),
  methods: {
    setSelectedIndex() {
      this.$store.commit("setSelectedIndex", { index: this.index })
    },
    updateThreshold(threshold) {
      this.$store.commit("updateThreshold", { index: this.index, threshold })
    },
    deleteThreshold() {
      this.$store.commit("deleteThreshold", { index: this.index })
    }
  }
}
</script>
