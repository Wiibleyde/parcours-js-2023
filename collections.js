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
    } else if (Array.isArray(value)) {
        return 'Array';
    } else if (typeof value === 'string') {
        return 'String';
    } else if (typeof value === 'number') {
        return 'Number';
    } else if (typeof value === 'boolean') {
        return 'Boolean';
    } else if (typeof value === 'undefined') {
        return 'Undefined';
    } else if (typeof value === 'function') {
        return 'Function';
    } else if (value === null) {
        return 'null';
    } else {
        let valueToChange = typeof value;
        let firstChar = valueToChange[0].toUpperCase();
        let rest = valueToChange.slice(1);
        return firstChar + rest;
    }
};


console.log(superTypeOf(null));