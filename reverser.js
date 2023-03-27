function reverse(arrayVar) {
    var reversedArray = [];
    for (var i = arrayVar.length - 1; i >= 0; i--) {
        reversedArray.push(arrayVar[i]);
    }
    return reversedArray.join('');
}

console.log(reverse('pouet'));