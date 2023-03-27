function reverse(arrayVar) {
    var reversedArray = [];
    for (var i = arrayVar.length - 1; i >= 0; i--) {
        reversedArray.push(arrayVar[i]);
    }
    if (typeof arrayVar === 'string') {
        return reversedArray.join('');
    } else {
        return reversedArray;
    }
}

console.log(reverse("OUI"));