const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = () => {
    let NewArray = drivers.slice(0,2);
    return NewArray
}
const returnLastTwoDrivers = () => {
    let NewArray = drivers.slice(2);
    return NewArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num){
    return function fareMultiplier(x){
        return  x * num;
    }
}

function fareDoubler(){
    return createFareMultiplier(2)(10);
}

function fareTripler(){
    return createFareMultiplier(3)(12);
}

function selectDifferentDrivers(arrayOfDrivers, functions){
    if(functions == returnFirstTwoDrivers){
        return returnFirstTwoDrivers();
        }
     else if(functions == returnLastTwoDrivers){
        return returnLastTwoDrivers();
        }
}