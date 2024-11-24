const NUM_REG = /\B(?=(\d{3})+$)/g

export function formatNum(num: number) {
  return String(num).replace(NUM_REG, ",")
}
