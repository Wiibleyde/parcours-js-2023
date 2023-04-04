function defaultCurry(obj1) {
    return function (obj2) {
        let toReturn = {}
        for (let name in obj1) {
            toReturn[name] = obj1[name]
        }
        for (let name in obj2) {
            toReturn[name] = obj2[name]
        }
        return toReturn
    }
}

function mapCurry(func) {
    return function (obj2) {
        let toReturn = {}
        for (let name in obj2) {
            toReturn[func([name, obj2[name]])[0]] = func([name, obj2[name]])[1]
        }
        return toReturn
    }
}

function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let toReturn = obj3
        for (let name in obj2) {
            toReturn = obj1(toReturn, [name, obj2[name]])
        }
        return toReturn
    }
}

function filterCurry(obj1) {
    return function (obj2) {
        let toReturn = {}
        for (let name in obj2) {
            if (obj1([name, obj2[name]])) {
                toReturn[name] = obj2[name]
            }
        }
        return toReturn
    }
}

function reduceScore(obj1, obj2) {
    return reduceCurry((acc, [, v]) => v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc)(obj1, obj2)
}

function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj)
}

function mapAverage(obj) {
    let avgScoreToReturn = mapCurry(([k, v]) => [k, (v.pilotingScore + v.shootingScore) / 2,])(obj)
    for (let name in avgScoreToReturn) {
        obj[name].averageScore = avgScoreToReturn[name]
    }
    return obj
}