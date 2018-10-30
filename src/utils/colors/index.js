const DEFAULT_COLOR = "rgba(255, 255, 255, 1)"

export const arrayToRgba = array => {
  if (array.length !== 4) return DEFAULT_COLOR
  const [r, g, b, a] = array
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export const hexToRgba = hex => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("")
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = "0x" + c.join("")
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255, 1]
  }
  return -1
}

const rgbToHex = rgb => {
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = "0" + hex
  }
  return hex
}

export const rgbaToHex = array => {
  const [r, g, b] = array
  const red = rgbToHex(r)
  const green = rgbToHex(g)
  const blue = rgbToHex(b)
  return red + green + blue
}
