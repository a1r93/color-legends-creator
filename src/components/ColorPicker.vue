<template>
    <Wrapper>
      Current color: {{color}}
      <ColorWheelContainer>
        Pick from wheel
        <SketchContainer>
          <sketch-picker :value="selectedColor" @input="updateColor" />
        </SketchContainer>
      </ColorWheelContainer>
    </Wrapper>
</template>

<script>
import styled from "vue-styled-components"
import { mapGetters } from "vuex"
import sketch from "vue-color/src/components/Sketch.vue"

const Wrapper = styled("div")`
  margin: auto;
  width: 60%;
  min-width: 400px;
  background: white;
  border-radius: 5px;
  margin-top: 10px;
  padding: 15px;
`
const ColorWheelContainer = styled.div`
  margin-top: 20px;
`
const SketchContainer = styled("div")`
  width: 35%;
  margin: auto;
  margin-top: 15px;
`

export default {
  name: "ColorPicker",
  components: {
    ColorWheelContainer,
    "sketch-picker": sketch,
    SketchContainer,
    Wrapper
  },
  props: {
    color: Array,
    text: String
  },
  computed: mapGetters({
    colors: "getColors",
    selectedColor: "getSelectedColor",
    selectedIndex: "getSelectedIndex"
  }),
  methods: {
    updateColor(nextColor) {
      this.$store.commit("updateColor", { nextColor })
    }
  }
}
</script>
