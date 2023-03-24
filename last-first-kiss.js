function first(arrayVar) {
    return arrayVar[0]
}

function last(arrayVar) {
    return parseInt(arrayVar.slice(-1))
}

function kiss(arg) {
    return [last(arg), first(arg)]
}