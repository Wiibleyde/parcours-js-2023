function isObject(input) {
    return (typeof input === "object" && !(typeof input === "function") && !Array.isArray(input) && input !== null &&! (input instanceof RegExp))
}

function deepCopy(input) {
    if (Array.isArray(input)) {
        var output = []
        for (var i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i])
        }
        return output
    } else if (isObject(input)) {
        var output = {}
        for (var name in input) {
            output[name] = deepCopy(input[name])
        }
        return output
    } else {
        return input
    }
}