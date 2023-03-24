function first(arrayVar) {
    return arrayVar[0]
}

function last(arrayVar) {
    return arrayVar[arrayVar.length - 1]
}

function kiss(arg) {
    return [last(arg), first(arg)]
}