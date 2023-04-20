const convertToCelsius = function(f) {
  var c = (f-32)*0.55;
  return (Math.round(c * 10) / 10).toFixed(1)
};

const convertToFahrenheit = function(c) {
  var f = (c/0.55)+32;
  return f.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
