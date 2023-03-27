Math.round = Math.ceil = Math.floor = Math.trunc = undefined

function round(number) {
    let decimal = number - Math.floor(number);
    if (decimal >= 0.5) {
        return Math.sign(number) * (Math.abs(Math.floor(number)) + 1);
    } else {
        return Math.floor(number);
    }
}
    
function ceil(number) {
    if (Number.isInteger(number)) {
        return number;
    } else if (number > 0) {
        return Math.floor(number) + 1;
    } else {
        return Math.floor(number);
    }
}
    
function floor(number) {
    return Math.floor(number);
}
    
function trunc(number) {
    if (number >= 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

console.log(round(1.5))