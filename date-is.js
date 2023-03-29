function isValid(date) {
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

console.log(isValid(Date.now())); // false