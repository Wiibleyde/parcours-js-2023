function slice(element, start, end) {
    var result = "";
    for (var i = start; i < end; i++) {
        result += element[i];
    }
    return result;
}