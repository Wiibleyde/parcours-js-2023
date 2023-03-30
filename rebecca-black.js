function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0;
}

function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() === 1;
}

function isLastDayOfMonth(date) {
    return date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

console.log(isLeapYear(new Date('1993-02-01')));