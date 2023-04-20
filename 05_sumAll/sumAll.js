const sumAll = function(base, range) {
    var sum=0;
    if(base<0 || range<0){
        return "ERROR"
    }
    if(typeof(base)!=Number||typeof(range)!=Number){
        return "ERROR"
    }
    if(base<range){
        for(i=base; i<=range; i++) {
            sum+=i;
        }
    }
    else if(base>range){
        for(i=range; i<=base; i++){
            sum+=i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
