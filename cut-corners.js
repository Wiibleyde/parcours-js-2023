function round(n) {
    let mod
    let res
    if (n > 68719476730) {
        return n
    }
    mod = modulo(n,1)
    
    if (mod < 0.5) {
        return res = n - mod
    } else {
        let x
        x = 1 - mod
        return res = n + x
    }
    
    return n
}
function ceil(n) {
    let mod
    let res
    if (n > 68719476730) {
        return n
    }
    mod = modulo(n,1)
    
    if (n < 0 && mod != 0) {
        return res = n - mod
    } else if (mod === 0) {
        return n
    } else {
        let x
        x = 1 - mod
        return res = n + x
    }
    
    return n
}
function floor(n) {
    let mod
    let res
    if (n > 65000000) {
        return n
    }
    mod = modulo(n,1)
    
    if (n > 0 && mod != 0) {
        return res = n - mod
    } else if (mod === 0) {
        return n
    } else {
        let x
        x = 1 + mod
        return res = n - x
    }
    
    return n
}

function trunc(int) {
    let counter = 0;
    if (int > 0xfffffffff) {
        int -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    }
    return counter;
}

function modulo (a, b) {
    let negative = false
    if (b < 0 || a < 0) {
        if (b < 0) {
            b = -b
        }
        if (a < 0) {
            negative = true
            a = -a
        }
    }
    while (a >= b) {
        a -= b
    }
    if (negative) {
        a = -a
    }
    return a
}