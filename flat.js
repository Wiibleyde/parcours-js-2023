function flat(arrayVar) {
    var flatArray = [];
    for (var i = 0; i < arrayVar.length; i++) {
        if (Array.isArray(arrayVar[i])) {
            flatArray = flatArray.concat(flat(arrayVar[i]));
        } else {
            flatArray.push(arrayVar[i]);
        }
    }
    return flatArray;
}

console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));