function slice(element, start, end=element.length) {
    if (typeof element === "object") {
        let result = [];
        if (start < 0) {
            start = element.length + start;
        }
        if (end < 0) {
            end = element.length + end;
        }
        for (let i = start; i < end; i++) {
            result.push(element[i]);
        }
        return result;
    } else if (typeof element === "string") {
        var result = "";
        if (start < 0) {
            start = element.length + start;
        }
        if (end < 0) {
            end = element.length + end;
        }
        for (var i = start; i < end; i++) {
            result += element[i];
        }
        return result;
    }
    return [];
}

console.log(slice([1, 2, 3, 4, 5, 6], 2));