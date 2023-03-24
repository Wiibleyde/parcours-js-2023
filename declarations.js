const escapeStr = "`, \\, /, \" and '";
const arr = [4, '2'];
const obj = Object.freeze({
    str: "some string",
    num: 42,
    bool: true,
    undef: undefined,
    nested: Object.freeze({
        arr: Object.freeze([4, undefined, '2']),
        obj: Object.freeze({
            str: "another string",
            num: 3.14,
            bool: false
        })
    })
});
