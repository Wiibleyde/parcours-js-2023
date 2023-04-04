function filterValues(obj, callback) {
    let toReturn = {}
    for (let name in obj) {
        if (callback(obj[name])) {
            toReturn[name] = obj[name]
        }
    }
    return toReturn
}

function mapValues(obj, callback) {
    let toReturn = {}
    for (let name in obj) {
        toReturn[name] = callback(obj[name])
    }
    return toReturn
}

function reduceValues(obj, callback, acc) {
    if (acc === undefined) {
        acc = 0
    }
    for (let name in obj) {
        acc = callback(acc, obj[name])
    }
    return acc
}