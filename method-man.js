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
    return stringVar.toLowerCase();
}

function capitalize(stringVar) {
    return stringVar[0].toUpperCase() + stringVar.slice(1);
}
