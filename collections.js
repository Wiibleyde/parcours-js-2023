const arrToSet = (arr) => new Set(arr);

const arrToStr = (arr) => arr.join('');

const setToArr = (set) => [...set];

const setToStr = (set) => [...set].join('');

const strToArr = (str) => str.split('');

const strToSet = (str) => new Set(str.split(''));

const mapToObj = (map) => {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

const objToArr = (obj) => Object.values(obj);

const objToMap = (obj) => new Map(Object.entries(obj));

const arrToObj = (arr) => {
    const obj = {};
    arr.forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

const strToObj = (str) => {
    const obj = {};
    str.split('').forEach((char, index) => {
        obj[index] = char;
    });
    return obj;
}

const superTypeOf = (value) => {
    if (value instanceof Map) {
        return 'Map';
    } else if (value instanceof Set) {
        return 'Set';
    } else {
        return typeof capitalize(value);
    }
}

function capitalize(stringVar) {
    let first_char = yell(stringVar[0])
    let rest = stringVar.slice(1).toLowerCase()
    return first_char + rest
}

function yell(stringVar) {
    return stringVar.toUpperCase();
}