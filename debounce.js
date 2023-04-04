function debounce(func, waitTime) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {func.apply(context, args)}, waitTime)
    }
}

function opDebounce(func, waitTime, options) {
    let timer = null
    let first = true
    let leading
    if (typeof options === 'object') {
        leading = !!options.leading
    }
    return function () {
        let context = this
        let args = arguments
        if (first && leading) {
            func.apply(context, args)
            first = false
        }
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {func.apply(context, args)}, waitTime)
    }
}


const debounceFunc = debounce(() => {
    console.log('debounce')
}, 500)

const opDebounceFunc = opDebounce(() => {
    console.log('opDebounce')
}, 1000, {leading: false})

debounceFunc()
opDebounceFunc()


