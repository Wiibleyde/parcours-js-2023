function neuron(arr) {
    var toReturn = {}
    for (let i = 0 ; i < arr.length ; i++) {
        let str = arr[i].split(' ')
        if (/questions:/i.test(str[0])) {
            toReturn['questions'] ||= {}
            let [question, response] = parseQuestionOrder(str)
            let questionKey = question.replaceAll(' ', '_').replace('?', '').toLowerCase()
            toReturn['questions'][questionKey] ||= {}
            toReturn['questions'][questionKey]['question'] = question
            toReturn['questions'][questionKey]['responses'] ||= []
            toReturn['questions'][questionKey]['responses'].push(response)
        } else if (/orders:/i.test(str[0])) {
            let [order, response] = parseQuestionOrder(str)
            toReturn['orders'] ||= {}
            let orderKey = order.replaceAll(' ', '_').replace('!', '').toLowerCase()
            toReturn['orders'][orderKey] ||= {}
            toReturn['orders'][orderKey]['order'] = order
            toReturn['orders'][orderKey]['responses'] ||= []
            toReturn['orders'][orderKey]['responses'].push(response)
        } else if (/affirmations:/i.test(str[0])) {
            let [affirmation, response] = parseAffirmations(str)
            toReturn['affirmations'] ||= {}
            let affirmationKey = affirmation.replaceAll(' ', '_').toLowerCase()
            toReturn['affirmations'][affirmationKey] ||= {}
            toReturn['affirmations'][affirmationKey]['affirmation'] = affirmation
            toReturn['affirmations'][affirmationKey]['responses'] ||= []
            toReturn['affirmations'][affirmationKey]['responses'].push(response)
        }
    }
    return toReturn
}

function parseQuestionOrder(arr) {
    let statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1)
    let response = arr.join(' ').split('-').slice(1).join('-').slice(1).split(' ').slice(1).join(' ')
    return [statement, response]
}

function parseAffirmations(arr) {
    let statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1)
    let response = arr.join(' ').split('-')[1].slice(1).split(' ').slice(1).join(' ')
    return [statement, response]
}