function get(src,path) {
    if (src === undefined || path === undefined) return undefined;
    var path = path.split('.');
    for (var i = 0; i < path.length; i++) {
        src = src[path[i]];
    }
    return src;
}
