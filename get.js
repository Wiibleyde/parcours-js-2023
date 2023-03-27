function get(src,path) {
    var path = path.split('.');
    for (var i = 0; i < path.length; i++) {
        src = src[path[i]];
    }
    return src;
}

