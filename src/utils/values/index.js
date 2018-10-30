export const shiftIntoValidRange = (value, range) => {
  const nShifts = Math.floor(value / range)
  return value - nShifts * range
}
