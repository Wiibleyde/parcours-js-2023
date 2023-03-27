function get(src,path) {
    var path = path.split('.');
    for (var i = 0; i < path.length; i++) {
        try {
            src = src[path[i]];
        } catch (e) {
            return undefined;
        }
    }
    return src;
}

console.log(get({ nested: { key: 'value' } }, 'nx.nx'));