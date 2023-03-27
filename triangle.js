function triangle(size) {
    var result = "";
    for (var i = 0; i < size; i++) {
        for (var j = 0; j <= i; j++) {
        result += "*";
        }
        result += "\n";
    }
    return result;
}
