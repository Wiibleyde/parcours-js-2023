function round(number) {
    let integerPart = number >= 0 ? (number | 0) : (number / 1 | 0);
    let decimalPart = Math.abs(number - integerPart);
    
    if (decimalPart >= 0.5) {
        return integerPart + Math.sign(number);
    } else {
        return integerPart;
    }
}
  
function ceil(number) {
    let integerPart = (number | 0);
    
    if (integerPart === number) {
        return integerPart;
    } else if (number > 0) {
        return integerPart + 1;
    } else {
        return integerPart;
    }
}
  
function floor(number) {
    let integerPart = (number | 0);
    return integerPart;
}
  
function trunc(number) {
    if (number >= 0) {
        return (number | 0);
    } else {
        return ((number / 1) | 0);
    }
}



console.log(round(1.1))