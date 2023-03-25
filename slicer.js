function slice(element, start, end=element.length) {
    var result = "";
    if (start < 0) {
        start = element.length + start;
    }
    if (end < 0) {
        end = element.length + end;
    }
    for (var i = start; i < end; i++) {
        result += element[i];
    }
    return result;
}

console.log(slice('abcdef', 0, -2));