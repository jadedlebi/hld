function round(num) {
  var number = parseFloat(num);
  if (!isNaN(number)) {
    return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    console.error("Invalid number for rounding: ", num);
    return num; // Or handle the error as appropriate
  }
}
function decimalRound(num) {
  var number = parseFloat(num);
  if (!isNaN(number)) {
    return number.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    console.error("Invalid number for rounding: ", num);
    return num; // Or handle the error as appropriate
  }
}
