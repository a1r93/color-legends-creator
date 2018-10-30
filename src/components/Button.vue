<template>
  <Container>
    {{text}}
  </Container>
</template>

<script>
import styled from "vue-styled-components"

const Container = styled("button")`
  position: relative;
  display: inline-block;
  padding: 1.2em 2em;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`

export default {
  name: "Button",
  components: {
    Container
  },
  props: {
    text: String
  }
}
</script>
