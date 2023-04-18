const removeFromArray = function(arr, item) {
    for(let i=0; i<arr.length(); i++) {
        if(arr[i] === item){
            delete arr[i];
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
