const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item))
    /*for(let i=0; i<arr.length; i++) {
        if(arr[i] === item){
            const x = arr.splice(i,1);
        }
    }
    for(let j=0; j<arr.length; j++) {
        return arr;
    }*/
};

// Do not edit below this line
module.exports = removeFromArray;
