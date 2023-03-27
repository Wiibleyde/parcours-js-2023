function pyramid(string,size) {
    let result = "";
    let stringLength = string.length;
    for (let i = 0; i < size; i++) {
        for (let j = i; j < size - 1; j++) {
            if (stringLength === 1) {
                result += " ";
            } else {
                for (let l = 0; l < stringLength; l++) {
                    result += " ";
                }
            }
        }
        for (let k = 0; k < (2 * i + 1); k++) {
            result += string;
        }
        if (i < size - 1) {
            result += "\n";
        }
    }
    return result;
}

console.log(pyramid("ඞ", 8));