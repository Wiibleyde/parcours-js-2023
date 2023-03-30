function citiesOnly(mapVar) {
    let cities = []
    for (let i = 0; i < mapVar.length; i++) {
        cities.push(mapVar[i].city)
    }
    return cities
}

function upperCasingStates(arrayVar) {
    let upperCased = []
    for (let i = 0; i < arrayVar.length; i++) {
        upperCased.push(capitalize(arrayVar[i]))
    }
    return upperCased
}

function fahrenheitToCelsius(arrayVar) {
    let celsius = []
    for (let i = 0; i < arrayVar.length; i++) {
        let fahrenheit = arrayVar[i].slice(0, -2)
        let celsiusTemp = (fahrenheit - 32) * (5 / 9)
        celsius.push(round(celsiusTemp) + '°C')
    }
    return celsius
}

function trimTemp(arrayVar) {
    let trimmed = []
    for (let i = 0; i < arrayVar.length; i++) {
        let trimmedTemp = arrayVar[i].temperature.replace(/\s/g, '')
        trimmed.push({ city: arrayVar[i].city, temp: trimmedTemp })
    }
    return trimmed
}

function tempForecasts(arrayVar) {
    let toTrimTemp = [{
        city: arrayVar[0].city,
        temperature: arrayVar[0].temperature
    }]
    let trimmed = trimTemp(toTrimTemp)
    let celsius = fahrenheitToCelsius([trimmed[0].temp])
    let formatted = []
    for (let i = 0; i < arrayVar.length; i++) {
        formatted.push(`${celsius[i]} in ${trimmed[0].city}, ${capitalize(arrayVar[i].state)}`)
    }
    return formatted
}
    
    

function capitalize(stringVar) {
    let first_char = yell(stringVar[0])
    let rest = stringVar.slice(1).toLowerCase()
    return first_char + rest
}

function round(number) {
    return Math.round(number)
}

function yell(stringVar) {
    return stringVar.toUpperCase();
}

console.log(tempForecasts([
        {
          city: 'Pasadena',
          temperature: ' 101 °F',
          state: 'california',
          region: 'West',
        },
      ])) // -> ['38°Celsius in Pasadena, California']