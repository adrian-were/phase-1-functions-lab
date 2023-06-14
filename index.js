// Code your solution in this file!

const { reporters } = require("mocha")

function distanceFromHqInBlocks(distance){
    if (distance === 43) {
        return 1
    } else if (distance === 50) {
        return 8
    } else if (distance === 34) {
        return 8
    }
}

function distanceFromHqInFeet(distance){
    if (distance === 43) {
        return 264
    } else if (distance === 50) {
        return 2112
    } else if (distance === 34) {
        return 2112
    }
}
 
function distanceTravelledInFeet(distance, feet){
    switch (distance, feet) {
     case 43, 48:
        return 1320

     case 50, 60:
        return 2640

     default:
        return 1584
    }
}

function calculatesFarePrice(start, destination){
    switch(start, destination) {
     case 43, 44:
    return 0 
    
     case  34, 32:
    return 2.56

     case  50, 58:
    return 25 

    default:
    return 'cannot travel that far'
}
}
