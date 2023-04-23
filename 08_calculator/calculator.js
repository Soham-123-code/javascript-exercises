const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	let sum=0
  if(arr === ['']){
    return 0;
  }
  for(let i=0; i<arr.length; i++){
    sum+=arr[i]
  }
  return sum
};

const multiply = function(a,b) {
  let c=a*b
  return parseInt(c)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return "number has to be positive."
  } 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
