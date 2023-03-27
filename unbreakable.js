function split(stringVar) {
    var splitArray = [];
    for (var i = 0; i < stringVar.length; i++) {
        if (stringVar[i] === ' ') {
            continue;
        }
        splitArray.push(stringVar[i]);
    }
    return splitArray;
}

function join(arrayVar) {
    var joinedArray = '';
    for (var i = 0; i < arrayVar.length; i++) {
        joinedArray += arrayVar[i];
    }
    return joinedArray;
}

console.log(split('a b c', ' '));