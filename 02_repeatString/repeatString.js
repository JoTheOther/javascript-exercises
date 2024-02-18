const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        let addedString = ""
        for (let i = 0; i < num; i++) {
            addedString += string;
        }
        return addedString
    }
};

// Do not edit below this line
module.exports = repeatString;
