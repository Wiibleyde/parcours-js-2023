function pick(obj, keys) {
    const pickVar = {}
    for (let key in obj) {
        let regexp = new RegExp(`^${key}$`)
        if (typeof keys === "string") {
            if (keys.match(regexp)) {
                pickVar[key] = obj[key]
            }
        } else {
            if (keys.includes(key)) {
                pickVar[key] = obj[key]
            }
        }
    }
    return pickVar
}

function omit(obj, keys) {
    const omitVar = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key) === false) {
            continue
        }
        let regexp = new RegExp(`^${key}$`)
        if (typeof keys === "string") {
            if (!keys.match(regexp)) {
                omitVar[key] = obj[key]
            }
        } else {
            if (!keys.includes(key)) {
                omitVar[key] = obj[key]
            }
        }
    }
    return omitVar
}