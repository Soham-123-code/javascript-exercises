const convertToCelsius = function(f) {
  var c = (f-32)*(5/9);
  if(c===0.0){
    return 0
  }
  else{
    c = (Math.round(c * 10) / 10).toFixed(1)  
    return parseInt(c)
  }
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
