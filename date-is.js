function isValid(date) {
    if (typeof date === 'number') {
        if (isNaN(date)) {
            return false;
        }
        return true;
    } 
    return date instanceof Date && !isNaN(date);
}

function isAfter(date, date2) {
    return date > date2;
}

function isBefore(date, date2) {
    return date < date2;
}

function isFuture(date) {
    return date > Date.now();
}

function isPast(date) {
    if (typeof date === 'number') {
        if (isNaN(date)) {
            return false;
        }
        return date < Date.now();
    }
    return date < Date.now();
}

console.log(isValid(NaN)); // false