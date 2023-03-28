function groupPrice(str) {
    const regex = /(\d+)\s*x\s*(.+?)\s*(?:=|each)\s*(\d+(?:\.\d+)?)/g
    const matches = []
    let match
    while ((match = regex.exec(str))) {
        matches.push([match[1], match[2], match[3]])
    }
    return matches
}
  