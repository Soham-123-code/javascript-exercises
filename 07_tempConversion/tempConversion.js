const convertToCelsius = function(f) {
  var c = (f-32)*(5/9);
  if(c===0.0){
    return 0
  }
  else{
    return parseFloat((Math.round(c * 10) / 10).toFixed(1))  
    
  }
};

const convertToFahrenheit = function(c) {
  var f = (c*(9/5))+32;
  if(f===0.0){
    return 0;
  }
  else{
    return parseFloat((Math.round(f*10)/10).toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
