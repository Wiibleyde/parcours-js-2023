function multiply(a, b) {
    let result = 0;
    let negative = false;
    if (b < 0 || a < 0) {
        if (b < 0 && a < 0) {
            b = -b;
            a = -a;
        } else {
            negative = true;        
        }
        if (b < 0) {
            b = -b;
        }
        if (a < 0) {
            a = -a;
        }
    } 
    for (let i = 0; i < b; i++) {
        result += a;
    }
    if (negative) {
        result = -result;
    }
    return result;
}

function divide(a, b) {
    let result = 0;
    let negative = false;
    if (b < 0 || a < 0) {
        negative = true;
        if (b < 0) {
            b = -b;
        }
        if (a < 0) {
            a = -a;
        }
    }
    while (a >= b) {
        a -= b;
        result++;
    }
    if (negative) {
        result = -result;
    }
    return result;
}

function modulo (a, b) {
    let negative = false;
    if (b < 0 || a < 0) {
        negative = true;
        if (b < 0) {
            b = -b;
        }
        if (a < 0) {
            a = -a;
        }
    }
    while (a >= b) {
        a -= b;
    }
    if (negative) {
        a = -a;
    }
    return a;
}

console.log(multiply(-22, -123));