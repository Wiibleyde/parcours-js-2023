function getWeekday(date) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const timeDiff = date.getTime() - new Date('0001-01-01').getTime()
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1
    const weekdayIndex = (dayDiff - 1) % 6
    return days[weekdayIndex]
}

console.log(getWeekday(new Date('2020-05-30')))