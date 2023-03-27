function split(stringVar) {
    var splitArray = [];
    for (var i = 0; i < stringVar.length; i++) {
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