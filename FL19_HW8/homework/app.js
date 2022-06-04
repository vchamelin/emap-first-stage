// #1

function extractCurrencyValue(param) {
    let num = parseInt(param.match(/\d+/));
    const lenMaxBigInt = 16;
    if(param.length >= lenMaxBigInt) {
        return BigInt(num);
    } else {
        return num;
    }
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) {
    let obj2 = {};
    for(key in obj){
        if(obj[key] !== null && obj[key] !== undefined && obj[key] !== false){
           obj2[key] = obj[key];
        }
    }
    return obj2;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }


// #3

function getUnique(param) {
    return Symbol(param);
}

console.log(getUnique('Test')) // Symbol('Test')


// #4

function countBetweenTwoDays(startDate, endDate) {
    const sec = 1000;
    const min = 60;
    const hour = 24;
    const week = 7;
    let dif = new Date(new Date(endDate).getTime() - new Date(startDate).getTime()).getTime();
    let days = Math.ceil(dif/(sec * min * min * hour));
    let weeks = Math.ceil(parseInt(days / week));
    let months = Math.ceil(parseInt(days / hour));
    return `The difference between dates is: ${days} day(-s), ${weeks} week(-s), ${months} month(-s)`;
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)


// #5

function filterArray(arr) {
    let sortArr = new Set();
    let newArr = [];

    for(let elem of arr) {
        sortArr.add(elem);
    }

    for(let elem of sortArr){
        newArr.push(elem);
    }
    return newArr;
}

function filterArrayWithoutSet(arr) {
    arr.forEach((elem, index) => {
        for(let i = index + 1; i <= arr.length; i++){
            if(elem === arr[i] ){
                arr.splice(i, 1);
                i--;
            }
        }
    });
    return arr;
}

console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(filterArrayWithoutSet([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


