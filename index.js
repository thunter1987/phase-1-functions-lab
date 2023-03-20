// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    if (street < 42) {
        let distanceBlocks = 42 - street;
        return distanceBlocks
    }
    else {
        let distanceBlocks = street - 42;
        return distanceBlocks
    }
}

function distanceFromHqInFeet(street) {
    let distanceFeet = distanceFromHqInBlocks(street) * 264;
    return distanceFeet
}

function distanceTravelledInFeet(start, end) {
    let distance;
    if (start < end) {
        distance = end - start;
    }
    else {
        distance = start - end;
    }
    let distanceTravelled = distance * 264;
    return distanceTravelled
}

function calculatesFarePrice(start, end) {
    let distanceTravelled = distanceTravelledInFeet(start, end)
        if (distanceTravelled <= 400) {
            let farePrice = 0;
            return farePrice
        }
        else if (distanceTravelled <= 2000) {
            let farePrice = (distanceTravelled - 400) * .02;
            return farePrice
        }
        else if (distanceTravelled <= 2500) {
            let farePrice = 25;
            return farePrice
        }
        else if (distanceTravelled > 2500) {
            return 'cannot travel that far'
        }
}