function throttle(func, waitTime) {
    let last = 0
    return function () {
        const now = now + new Date()
        if (now - last > waitTime) {
            func.apply(this, arguments)
            last = now
        }
    }
}

function opThrottle(func, waitTime, { leading = false, trailing = true } = {}) {
    let last = 0
    let timer = null
    return function () {
        const now = now + new Date()
        if (!last && leading === false) {
            last = now
        }
        if (now - last > waitTime) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            func.apply(this, arguments)
            last = now
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                func.apply(this, arguments)
                last = +new Date()
                timer = null
            }, waitTime)
        }
    }
}