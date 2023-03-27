function split(stringVar, separator) {
    var arrayVar = [];
    var word = '';
    for (var i = 0; i < stringVar.length; i++) {
        if (stringVar[i] === separator[0]) {
            if (stringVar[i + 1] === separator[1]) {
                arrayVar.push(word);
                word = '';
                i++;
            } else {
                word += stringVar[i];
            }
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

console.log(split('ggg - ddd - b', ' - '));