function pyramid(string,size) {
    var result = "";
    for (var i = 0; i < size; i++) {
        for (var j = i; j < size - 1; j++) {
            result += " ";
        }
        for (var k = 0; k < (2 * i + 1); k++) {
            result += string;
        }
        if (i < size - 1) {
            result += "\n";
        }
    }
    return result;
}

console.log(pyramid("ඞ", 5));