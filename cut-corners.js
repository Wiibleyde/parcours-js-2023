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

function trunc(n) {
    let mod = modulo(n, 1);
    let res = n - mod;
    
    if (n > 68719476730) {
        if (res < 0) {
            return ceil(res);
        } else {
            return floor(res);
        }
    } else {
      return res;
    }
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

console.log(trunc(6871.7));