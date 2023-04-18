const reverseString = function(string) {
    var splitter = string.split("");
    var reverser = splitter.reverse();
    var joiner = reverser.join("");

    return joiner;
};

// Do not edit below this line
module.exports = reverseString;
