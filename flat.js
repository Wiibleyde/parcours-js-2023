Array.prototype.flat = undefined; // Remove the original Array.prototype.flat method

function flat(arr, depth = 1) {
    if (depth < 1) {
        return arr.slice();
    }

    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc.push(...flat(val, depth - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
}
