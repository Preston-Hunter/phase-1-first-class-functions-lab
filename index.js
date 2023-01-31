// Code your solution in this file!
function returnFirstTwoDrivers(d){
    if (d.length >= 2){
        return d.slice(0,2);
    }
    else{
        return d;
    }
}

function returnLastTwoDrivers(d){
    if (d.length >= 2){
        return d.slice(-2);
    }
    else{
        return d;
    }
}

let selectingDrivers = [(returnFirstTwoDrivers), returnLastTwoDrivers];

function createFareMultiplier(int){
    return function (fare){return fare * int};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(names, twoDrivers){
    return twoDrivers(names);
}

fareDoubler(10)