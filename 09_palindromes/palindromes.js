const palindromes = function (pali) {
    let a = /\s+/g;
    let b = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/
    const sol = pali.toLowerCase().replace(a, "").replace(b, "")
    return pali.split("").reverse().join("")==sol
};

// Do not edit below this line
module.exports = palindromes;
