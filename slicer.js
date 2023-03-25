function slice(element, start, end=element.length) {
    var result = "";
    for (var i = start; i < end; i++) {
        result += element[i];
    }
    return result;
}

console.log(slice('abcdef', 2));