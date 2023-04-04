function filterEntries(obj, filter) {
    let toReturn = {}
    for (let key in obj) {
        if (filter([key, obj[key]])) {
            toReturn[key] = obj[key]
        }
    }
    return toReturn
}

function mapEntries(entries, mapper) {
    let temporary = {}
    for (let key in entries) {
        temporary[key] = mapper([key, entries[key]])
    }
    let toReturn = {}
    for (let key in temporary) {
        toReturn[temporary[key][0]] = temporary[key][1]
    }
    return toReturn
}

function reduceEntries(entries, reducer, initialValue) {
    let acc = initialValue
    for (let key in entries) {
        acc = reducer(acc, [key, entries[key]])
    }
    return acc
}

function lowCarbs(entries) {
    return filterEntries(entries, (entry) => {
        let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1]
        return parseInt(value) <= 50
    })
}

function totalCalories(entries) {
    return Number(
        reduceEntries(entries,(acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1]
                return acc + value
        },
        0).toFixed(1)
    )
}

function cartTotal(entries) {
    let toReturn = {}
    for (let key in entries) {
        toReturn[key] = {}
        for (let dbKey in nutritionDB[key]) {
            toReturn[key][dbKey] = Math.round((entries[key] / 100) * nutritionDB[key][dbKey] * 1000) / 1000
        }
    }
    return toReturn
}