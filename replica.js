var is = {}
is.arr = (n) => Array.isArray(n)
is.function = (n) => typeof n === 'function'
is.object = (n) => (typeof n === 'object' && !is.function(n) && !is.arr(n) && n !== null && !(n instanceof RegExp))

function replica(target, ...sources) {
    sources.forEach((source) => {
        Object.keys(source).forEach((key) => {
            if (is.object(source[key])) {
                if (!target.hasOwnProperty(key) || !is.object(target[key])) {
                    target[key] = {}
                }
                replica(target[key], source[key])
            } else {
                target[key] = source[key]
            }
        })
    })
    return target
}