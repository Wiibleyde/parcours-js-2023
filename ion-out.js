function ionOut(stringVar) {
    let rexp = /t\w*ion/g;
    let test = stringVar.match(rexp);
    if (test !== null) {
        for (let i = 0; i < test.length; i++) {
            test[i] = test[i].replace(/ion/g, "");
        }
    }
    return test;
}
