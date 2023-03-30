function sunnySunday(date) {
    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let day = date.getDay()
    if (day === 0) {
        return weekdays[day]
    } else {
        return weekdays[day - 1]
    }
}

console.log(sunnySunday(new Date('0001-01-07')))