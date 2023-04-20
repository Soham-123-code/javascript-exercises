const sumAll = function(base, range) {
    var sum=0;
    if(base<0 || range<0){
        return "ERROR"
    }
    else if(typeof(base)!=Number){
        return "ERROR"
    }
    else {
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
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
