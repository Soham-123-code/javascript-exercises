const palindromes = function (pali) {
    const sol = pali.toLowerCase().replace(/[^a-z]/g, "")
    return sol.split("").reverse().join("")==sol
};

// Do not edit below this line
module.exports = palindromes;
