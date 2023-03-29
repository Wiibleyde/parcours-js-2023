function isValid(date) {
    if (date === NaN) {
        return false;
    } 
    if (typeof date === 'number') {
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
    return date < Date.now();
}

console.log(isValid(NaN)); // false