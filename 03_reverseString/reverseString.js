const reverseString = function(string) {
    //splits the string into individual alphabets in an array
    var splitter = string.split(""); 
    //reverses the contents of the array
    var reverser = splitter.reverse();
    //joins the reversed content back into a single string
    var joiner = reverser.join("");

    return joiner;
};

// Do not edit below this line
module.exports = reverseString;
