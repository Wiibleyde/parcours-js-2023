const hashCode = (s) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
        h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return h.toString(16);
};
  
const blockChain = (data, prev = { index: 0, hash: '0' }) => {
    const index = prev.index + 1;
    const hash = hashCode(`${index}${prev.hash}${JSON.stringify(data)}`);
    return {
        index,
        hash,
        data,
        prev,
        chain: (newData) => blockChain(newData, { index, hash }),
    };
};
  