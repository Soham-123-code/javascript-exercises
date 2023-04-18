const repeatString = function(wordString, range) {
    if(range < 0){
        return 'ERROR'
    }
    let word = "";
    for(let i = 0; i<range; i++) {
        word += wordString
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
