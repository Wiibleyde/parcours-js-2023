function triangle(string,size) {
    var result = "";
    for (var i = 0; i < size; i++) {
        for (var j = 0; j <= i; j++) {
        result += string;
        }
        result += "\n";
    }
    return result;
}

console.log(triangle("ඞ", 5));