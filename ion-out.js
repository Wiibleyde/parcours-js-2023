function ionOut(stringVar) {
    let arr = stringVar.split(" ");
    let rexp = /tion/g;
    let res = [];
    arr.forEach((word) => {word.match(rexp) ? res.push(word.replace(/[.,?!]/g, "").slice(0, -3)): null});
    return res;
}

console.log(ionOut('attention, direction'));