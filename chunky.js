function chunk(arrayVar, integerVar) {
    var chunkedArray = [];
    var chunk = [];
    for (var i = 0; i < arrayVar.length; i++) {
        if (chunk.length === integerVar) {
            chunkedArray.push(chunk);
            chunk = [];
        }
        chunk.push(arrayVar[i]);
    }
    if (chunk.length > 0) {
        chunkedArray.push(chunk);
    }
    return chunkedArray;
}