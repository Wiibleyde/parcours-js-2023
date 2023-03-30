function dayOfTheYear(date) {
    let year = date.getFullYear()
    let count = 0
    for (let i = 1; i < date.getMonth() + 1; i++) {
        count += new Date(year, i, 0).getDate()
    }
    return count + date.getDate()
}
