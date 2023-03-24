function words(stringVar) {
    return stringVar.split(' ');
}

function sentence(arrayVar) {
    return arrayVar.join(' ');
}

function yell(stringVar) {
    return stringVar.toUpperCase();
}

function whisper(stringVar) {
    return `*${stringVar.toLowerCase()}*`;
}

function capitalize(stringVar) {
    let first_char = yell(stringVar[0])
    let rest = stringVar.slice(1).toLowerCase()
    return first_char + rest
}

console.log(capitalize('STR'))