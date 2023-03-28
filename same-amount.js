function sameAmount(str, regex1, regex2) {
    const match1 = str.match(regex1);
    const match2 = str.match(regex2);
    return match1 !== null && match2 !== null && match1.length === match2.length;
}
