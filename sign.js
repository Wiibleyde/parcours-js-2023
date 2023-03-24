function sign(number) {
    if (number === 0) {
        return 0;
    }
    if (number > 0) {
        return 1;
    }
    return -1;
}

function sameSign(number1,number2) {
    return sign(number1) === sign(number2);
}

console.log(sign(-2)); // true