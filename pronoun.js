function pronoun(str) {
    const pronouns = ["i", "you", "he", "she", "it", "they", "we"]
    const pronounDict = new Map(pronouns.map((p) => [p, { count: 0, words: new Set() }]))
  
    str.split(/\s+/).forEach((word, i, arr) => {
        if (pronouns.includes(word.toLowerCase())) {
            const pronounObj = pronounDict.get(word.toLowerCase())
            pronounObj.count++
            const nextWord = findNextWord(arr.slice(i + 1))
            if (nextWord) {
                pronounObj.words.add(nextWord)
            }
        }
    })
  
    for (const [_, pronounObj] of pronounDict) {
        pronounObj.words = [...pronounObj.words]
    }
  
    return Object.fromEntries(pronounDict)
}
  
function findNextWord(arr) {
    const pronouns = /^(i|you|he|she|it|they|we)$/i
    for (let i = 0 ; i < arr.length ; i++) {
        if (pronouns.test(arr[i])) {
            return null
        } else {
            return arr[i].replace(/,$/, "")
        }
    }
}
  