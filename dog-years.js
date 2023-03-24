function dogYears(planetName, ageInSeconds) {
    const earthYearInSeconds = 31557600;
    let orbitalPeriod = 1;
    switch (planetName) {
        case 'mercury':
            orbitalPeriod = 0.2408467;
            break;
        case 'venus':
            orbitalPeriod = 0.61519726;
            break;
        case 'mars':
            orbitalPeriod = 1.8808158;
            break;
        case 'jupiter':
            orbitalPeriod = 11.862615;
            break;
        case 'saturn':
            orbitalPeriod = 29.447498;
            break;
        case 'uranus':
            orbitalPeriod = 84.016846;
            break;
        case 'neptune':
            orbitalPeriod = 164.79132;
            break;
        default:
            orbitalPeriod = 1;
            break;
    }
    const ageInYears = ageInSeconds / (earthYearInSeconds * orbitalPeriod * 7);
    return parseFloat(ageInYears.toFixed(2));
}