function debounce(func, waitTime) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {func.apply(context, args)}, waitTime)
    }
}

function opDebounce(func, waitTime, leading) {
    let timer = null
    let first = true
    return function () {
        let context = this
        let args = arguments
        if (first && leading) {
            func.apply(context, args)
            first = false
        }
        if (timer) {
            return
        }
        timer = setTimeout(function () {func.apply(context, args),timer = null}, waitTime)
    }
}

const debounceFunc = debounce(() => {
    console.log('debounce')
}, 1000)

const opDebounceFunc = opDebounce(() => {
    console.log('opDebounce')
}, 1000, true)

debounceFunc()
opDebounceFunc()


