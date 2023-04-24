const fibonacci = function(count) {
    if(count<0){
        return "OOPS"
    }
    
    let n1=0
    let n2=1

    for(let i=1; i<count; i++){
        let next=n2
        n2=n1+n2
        n1=next
    }
    return n2
};

// Do not edit below this line
module.exports = fibonacci;
