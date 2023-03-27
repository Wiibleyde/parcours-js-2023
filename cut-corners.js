function round(number) {
    let integerPart = number >= 0 ? ~~number : ceil(number);
    let decimalPart = Math.abs(number - integerPart);
    
    if (decimalPart >= 0.5) {
        return integerPart + Math.sign(number);
    } else {
        return integerPart;
    }
}

function ceil(number) {
    let integerPart = ~~number;
    
    if (integerPart === number) {
        return integerPart;
    } else if (number > 0) {
        return integerPart + 1;
    } else {
        return integerPart;
    }
}
  
function floor(number) {
    let integerPart = ~~number;
    return integerPart;
}
  
function trunc(number) {
    if (number >= 0) {
        return ~~number;
    } else {
        return ~~(-number);
    }
}

console.log(round(1.1))