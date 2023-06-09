function split(stringVar, separator) {
    var arrayVar = [];
    var word = '';
    var sepLen = separator.length;
    if (sepLen === 0) {
        for (var i = 0; i < stringVar.length; i++) {
            arrayVar.push(stringVar[i]);
        }
        return arrayVar;
    }
    for (var i = 0; i < stringVar.length; i++) {
        if (stringVar.slice(i, i + sepLen) === separator) {
            arrayVar.push(word);
            word = '';
            i += sepLen - 1;
        } else {
            word += stringVar[i];
        }
    }
    arrayVar.push(word);
    return arrayVar;
}

function join(arrayVar, separator) {
    var stringVar = '';
    for (var i = 0; i < arrayVar.length; i++) {
        if (i === arrayVar.length - 1) {
            stringVar += arrayVar[i];
        } else {
            stringVar += arrayVar[i] + separator;
        }
    }
    return stringVar;
}