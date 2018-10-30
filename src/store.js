import Vue from "vue"
import Vuex from "vuex"

import { rgbaToHex } from "./utils/colors"

Vue.use(Vuex)

const initialColors = [
  { threshold: 60, color: [28, 0, 112, 1] },
  { threshold: 55, color: [56, 0, 112, 1] },
  { threshold: 50, color: [77, 0, 112, 1] },
  { threshold: 45, color: [152, 0, 150, 1] },
  { threshold: 40, color: [148, 0, 0, 1] },
  { threshold: 35, color: [180, 0, 0, 1] },
  { threshold: 30, color: [230, 139, 11, 1] },
  { threshold: 25, color: [218, 169, 0, 1] },
  { threshold: 20, color: [182, 231, 0, 1] },
  { threshold: 18, color: [172, 230, 0, 1] },
  { threshold: 17, color: [0, 230, 0, 1] },
  { threshold: 16, color: [0, 229, 21, 1] },
  { threshold: 14, color: [0, 230, 115, 1] },
  { threshold: 12, color: [0, 230, 172, 1] },
  { threshold: 10, color: [0, 227, 175, 1] },
  { threshold: 8, color: [0, 133, 133, 1] },
  { threshold: 6, color: [0, 116, 132, 1] },
  { threshold: 4, color: [33, 92, 99, 1] },
  { threshold: 2, color: [60, 71, 73, 1] },
  { threshold: 1, color: [57, 68, 70, 1] }
]

const getRandomNumber = (min, max) => Math.floor(Math.random() * max + min)

// setup store
export const store = new Vuex.Store({
  state: {
    colors: initialColors.sort((a, b) => a.threshold - b.threshold),
    color: [255, 255, 0, 1],
    selectedIndex: 0
  },
  getters: {
    getColors(state) {
      return state.colors
    },
    getSelectedColor(state) {
      const colors = state.colors
      const selectedIndex = state.selectedIndex
      const current = colors[selectedIndex].color
      return rgbaToHex(current)
    },
    getSelectedIndex(state) {
      return state.selectedIndex
    }
  },
  mutations: {
    setSelectedIndex(state, { index }) {
      state.selectedIndex = index
    },
    updateThreshold(state, { index, threshold }) {
      const nextColors = [...state.colors]
      nextColors[index].threshold = parseInt(threshold, 10)
      state.colors = nextColors
    },
    addColor(state) {
      const r = getRandomNumber(0, 255)
      const g = getRandomNumber(0, 255)
      const b = getRandomNumber(0, 255)
      const nextColor = [r, g, b, 1]
      const latestThreshold = state.colors[state.colors.length - 1].threshold
      state.colors.push({
        threshold: latestThreshold + 1,
        color: nextColor
      })
    },
    updateColor(state, { nextColor }) {
      const { r, g, b, a } = nextColor.rgba
      const newColor = [r, g, b, a].map(val => parseFloat(val, 10))
      state.color = newColor

      const nextColors = [...state.colors]
      nextColors[state.selectedIndex].color = newColor
      state.colors = nextColors
    },
    deleteThreshold(state, { index }) {
      state.colors.splice(index, 1)
    }
  }
})
