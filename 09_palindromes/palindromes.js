const palindromes = function (string) {
    const cleanedString = string.replace(/[^a-z0-9]/gi, "").toLowerCase();

    const reversedString = cleanedString.split("").reverse().join("");

    return cleanedString == reversedString;
}

// Do not edit below this line
module.exports = palindromes;
