const palindromes = function (pali) {
    let a = /\s+/g;
    let b = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/
    //string with removed spaces and punctuation
    let solution = pali.replace(a, '').replace(b, ' ')

    //string reversal
    let splitter = solution.split("")
    let reverser = splitter.reverse()
    let joiner = reverser.join("")

    //palindrome checker
    if(solution===joiner){
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
