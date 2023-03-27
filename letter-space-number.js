function letterSpaceNumber(str) {
    const regex = /[a-z] \b\d\b/g;
    return str.match(regex) || [];
}
