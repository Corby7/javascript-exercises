const reverseString = function(string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
};

// return string.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
