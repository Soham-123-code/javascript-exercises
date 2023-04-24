const palindromes = function (pali) {
    let a = /\s+/g;
    let b = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/
    let solution = pali.replace(a, '').replace(b, ' ')
    let splitter = solution.split()
    let reverser = splitter.reverse()
    let joiner = reverser.join()
    if(solution===joiner){
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
