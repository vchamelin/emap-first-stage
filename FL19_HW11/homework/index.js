// 1.Date/timestamp

getWeekDay(Date.now()); // "Thursday" (if today is the 22nd October)
getWeekDay(new Date(2020, 9, 22)); // "Thursday"


function getWeekDay(date){
  const day = new Date(date);
  return day.toLocaleString("en", {weekday: 'long'});
}

// 2.Days New Year

getAmountDaysToNewYear(); // 124 (if today is the 30th August)

function getAmountDaysToNewYear(){
  const today = new Date();
  const todayYear = new Date().getFullYear();
  const nextDaysYear = new Date(`January 1, ${todayYear + 1}`);
  const hour = 24,
        min = 60,
        sec = 60,
        ms = 1000;
  const msDay = hour * min * sec * ms; //hour, min, sec, ms
  const days = Math.round((nextDaysYear.getTime() - today.getTime())/msDay);
  return days;
}

//3.Age 18

const birthday17 = new Date(2004, 12, 29);
const birthday15 = new Date(2006, 12, 29);
const birthday22 = new Date(2000, 11, 22);
getApproveToPass(birthday17); // Hello adventurer, you are to yang for this quest wait for few more months!
getApproveToPass(birthday15); // Hello adventurer, you are to yang for this quest wait for 3 years more!
getApproveToPass(birthday22); // Hello adventurer, you may pass!

function getApproveToPass(date){
  const today = new Date();
  const birthday = new Date(date);
  const ageFull = 18;

  let years = today.getFullYear() - birthday.getFullYear();
  const months = birthday.getMonth() - today.getMonth();
  if(months > 0 || months === 0 && today.getDate() < birthday.getDate()){
    years -= 1;
  }
  if(years >= ageFull) {
    return 'Hello adventurer, you may pass!';
  } else if(years >= ageFull - 1) {
    return 'Hello adventurer, you are to yang for this quest wait for few more months!';
  } else {
    return `Hello adventurer, you are to yang for this quest wait for ${ageFull - years} years more!`;
  }
}

//4.Given string

const elementP = 'tag="p" class="text" style={color: #aeaeae;} value="Aloha!"';
transformStringToHtml(elementP);// ‘<p class=”text” style=”color: #aeaeae;”>Hello World!</p>’

function transformStringToHtml(elem){
  const arr = elem.match(new RegExp('(?<==["{]).*?(?=["}])', 'gi'));
  return `<${arr[0]} class=”${arr[1]}” style=”${arr[2]}”>${arr[3]}</${arr[0]}>`;
}

//5.Valid Identifier

isValidIdentifier('myVar!'); // false
isValidIdentifier('myVar$'); // true
isValidIdentifier('myVar_1'); // true
isValidIdentifier('1_myVar'); // false

function isValidIdentifier(str){
  return /^[A-z_$][A-z_\d$]*$/g.test(str);
}

//6.capitalize

const testStr = "My name is John Smith. I am 27.";
capitalize(testStr); // "My Name Is John Smith. I Am 27."

function capitalize(str){
  return str.replace(/(^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
}

//7.Valid Password

isValidPassword('agent007'); // false (no uppercase letter)
isValidPassword('AGENT007'); // false (no lowercase letter)
isValidPassword('AgentOOO'); // false (no numbers)
isValidPassword('Age_007'); // false (too short)
isValidPassword('Agent007'); // true

function isValidPassword(pass){
  return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g.test(pass);
}

//8.bubbleSort

console.log(bubbleSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]

function bubbleSort(arr){
  const len = arr.length;

  for (let i = 0; i < len ; i++) {
    for(let j = 0 ; j < len - i - 1; j++){
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j + 1] = temp;
    }
    }
  }
  return arr;
}

//9.sortByltem
const inventory = [
  { name: 'milk', brand: 'happyCow', price: 2.1 },
  { name: 'chocolate', brand: 'milka', price: 3 },
  { name: 'beer', brand: 'hineken', price: 2.2 },
  { name: 'soda', brand: 'coca-cola', price: 1 }
];

console.log(sortByItem({item: 'name', array: inventory}));
  // will return [
  // { "name": "beer", "brand": "hineken", "price": 2.2 },
  // { "name": "chocolate", "brand": "milka", "price": 3 },
  // { "name": "milk", "brand": "happyCow", "price": 2.1 },
  // { "name": "soda", "brand": "coca-cola", "price": 1 } ]

function sortByItem({item, array}){
  let sortedArray = array.sort(function(a, b){
    if(a[item] > b[item]){
      return 1;
    }
    return -1;
  });
  return sortedArray;
}