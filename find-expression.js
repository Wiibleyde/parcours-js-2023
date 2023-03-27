const add4 = (x) => x + 4;
const mul2 = (x) => x * 2;

function findExpression(num) {
    const queue = [{ val: 1, expr: '1' }];

    while (queue.length) {
        const { val, expr } = queue.shift();
        if (val === num) {
            return expr;
        }
        if (val < num) {
            queue.push({ val: add4(val), expr: `${expr}+4` });
            queue.push({ val: mul2(val), expr: `${expr}*2` });
        }
    }

    return undefined;
}

console.log(findExpression(65));