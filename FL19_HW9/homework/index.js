// #1
function calculateSum(arr) {
	let sum = 0;
  for (const val of arr) {
		sum += val;
  }
	return sum;
}

console.log(calculateSum([1,2,3,4,5])); //15

// #2
function isTriangle(a, b, c) {
	if(a + b > c && a + c > b && c + b > a){
		return true;
	}
	return false;
}

console.log(isTriangle(5,6,7)); //true
console.log(isTriangle(2,9,3)); //false

// #3
function isIsogram(word) {
	const arrWords = word.split('');
	let isSecondWord = true;
	arrWords.forEach((element, index) => {
		for (let key = index + 1; key < arrWords.length; key++) {
			if(element === arrWords[key]){
				isSecondWord = false;
			}
		}
	});
	return isSecondWord;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
	const arrWords = word.split('');
	const arrWordsRev = word.split('').reverse();
	let isPalindromeWord = true;
	arrWords.forEach((element, index) => {
		if(element !== arrWordsRev[index]){
			isPalindromeWord = false;
		}
	});
	return isPalindromeWord;
}

console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
	const dateYear = dateObj.toLocaleString("en", {year: 'numeric'});
	const dateMonth = dateObj.toLocaleString("en", {month: 'long'});
	const dateDay = dateObj.toLocaleString("en", {day: 'numeric'});
	return `${dateDay} of ${dateMonth}, ${dateYear}`;
}

console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
	let counterLetter = 0;
	const arrStr = str.split('');
	arrStr.forEach(element => {
		if(element === letter){
			counterLetter++;
		}
	});
	return counterLetter;
}

console.log(letterCount('abbaba', 'b')); //3

// #7
function countRepetitions(arr) {
	const countObj = {};
	for (const iterator of arr) {
		countObj[iterator] ? countObj[iterator]++ : countObj[iterator] = 1;
	}
	return countObj;
}

console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
	return parseInt(arr.join(''), 2);
}

console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9
