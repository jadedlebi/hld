// Round values to nearest whole integer and include thousand seperators.
function round(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  // console.log((typeof num).concat(', ', num))
  // return num
}
// // Round values to nearest second decimal and include thousand seperators.
function decimalRound(num) {
  return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
