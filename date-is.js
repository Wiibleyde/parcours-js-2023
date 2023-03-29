function isValid(date) {
    return date instanceof Date && !isNaN(date);
}

function isAfter(date, date2) {
    return isValid(date) && isValid(date2) && date > date2;
}

function isBefore(date, date2) {
    return isValid(date) && isValid(date2) && date < date2;
}

function isFuture(date) {
    return isValid(date) && date > new Date();
}

function isPast(date) {
    return isValid(date) && date < new Date();
}

