function cutFirst(stringVar) {
    let stringLength = stringVar.length
    let newString = stringVar.substring(2,stringLength)
    return newString
}

function cutLast(stringVar) {
    let stringLength = stringVar.length
    let newString = stringVar.substring(0,stringLength-2)
    return newString
}

function cutFirstLast(stringVar) {
    let newString = cutFirst(stringVar)
    return cutLast(newString)
}

function keepFirst(stringVar) {
    return stringVar.substring(0,2)
}

function keepLast(stringVar) {
    let stringLength = stringVar.length
    return stringVar.substring(stringLength-2,stringLength)
}

function keepFirstLast(stringVar) {
    let twoFirst = keepFirst(stringVar)
    let twoLast = keepLast(stringVar)
    return twoFirst + twoLast
}

console.log(keepFirstLast("Guillaume"))