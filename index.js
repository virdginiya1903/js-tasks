// Create a function named divisors/Divisors that takes an integer n > 1
//  and returns an array with all of the integer's divisors(except for 1 and the number itself),
//  from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#)
//  (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  let newArr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      newArr.push(i);
    }
  }
  if (newArr.length === 0) {
    return `${integer} is prime`;
  } else {
    return newArr;
  }
}

divisors(14);
divisors(13);
divisors(25);

// Your task is to make a function that can take any non-negative integer
// as a argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221
function descendingOrder(n) {
  //...

  let a = n
    .toString()
    .split("")
    .sort()
    .reverse()
    .join("");
  let b = Number(a);
  console.log(n, a, b);
  return b;
}

descendingOrder(1012);
// Expected: 2110, instead got: 1201 -ура! тест прошел:)
// Create a function named divisors/Divisors that takes an integer n > 1
// and returns an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#)
// (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  let newArr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      newArr.push(i);
    }
  }
  if (newArr.length === 0) {
    return `${integer} is prime`;
  } else {
    return newArr;
  }
}

divisors(14);
divisors(13);
divisors(25);

// Your task is to make a function that can take any non-negative integer
// as a argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221
function descendingOrder(n) {
  //...

  let a = n
    .toString()
    .split("")
    .sort()
    .reverse()
    .join("");
  let b = Number(a);
  console.log(n, a, b);
  return b;
}

descendingOrder(1012);

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// // Notes:

// В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вы должны вернуть самое высокое и самое низкое число.

function highAndLow(numbers) {
  // ...
  arrNumbers = numbers.split(" ").map(Number);

  maxNumbers = Math.max(...arrNumbers);
  minNumbers = Math.min(...arrNumbers);
  result = `${maxNumbers} ${minNumbers}`;
  return result;
  console.log(result);
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

// Given two integers a and b, which can be positive or negative,
//  find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum(a, b) {
  //Good luck!
  if (a === b) {
    return a;
    console.log("a = b");
  }
  if (a < b) {
    let element = 0;
    console.log("a < b");

    for (index = a; index <= b; index++) {
      element = element + index;
    }
    return element;
    console.log(element);
    console.log("a < b");
  } else {
    console.log("a > b");

    let element = 0;
    for (index = b; index <= a; index++) {
      element = element + index;
      console.log(element, index);
    }
    return element;
    console.log("a > b");

    console.log(element);
  }
}

console.log(GetSum(-1, 2));
console.log(GetSum(5, 2));

function getCount(str) {
  let vowelsCount = 0;

  // enter your majic here

  return vowelsCount;
}

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, and u as vowels for this Kata.

//The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let vowelsCount = 0;
  let getCountArrA = ["a", "e", "i", "o", "u"];
  let getCountArrB = [...str];
  // enter your majic here
  // console.log(getCountArrB);
  let arrRes = getCountArrB.filter(it => getCountArrA.includes(it));
  // return vowelsCount;
  // console.log(arrRes);
  vowelsCount = arrRes.length;
  return vowelsCount;
  // console.log(vowelsCount);
}

getCount("abracadabra");

// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

function digitize(n) {
  //code here
  let digitizeStr = String(n);
  let digitizeArr = [...digitizeStr];
  // console.log(digitizeArr);
  let digitizeRes = digitizeArr.reverse().map(Number);
  // console.log(digitizeRes);
  return digitizeRes;
}
digitize(35231);

// второй вариант более продвинутый и легкий

function digitize2(n) {
  let digitizeRes = n
    .toString()
    .split("")
    .reverse()
    .map(Number);
  console.log(digitizeRes);
  return digitizeRes;
}
digitize2(35231);

// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

repeatStr(2, "ha ");
console.log(repeatStr(2, "ha "));

// Given the string representations of two integers, return the string representation of the sum of those integers.
function sumStrings(a, b) {
  let resSumStrings = (Number(a) + Number(b)).toFixed(0);
  return String(resSumStrings);
}

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  // your code here
  return string
    .replace(/5/g, "S")
    .replace(/0/g, "O")
    .replace(/1/g, "I");
}
correct("PAR15");
correct("51NGAP0RE");

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let positiveNum = arr
    .filter(el => el >= 0)
    .reduce((res, num) => {
      return res + num;
    }, 0);
  return positiveNum;
  console.log(positiveNum);
}

// Write a function that takes an integer as input, and returns the number of bits that are equal to one
//  in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

positiveSum([1, -2, 3, 4, 5]);
let countBits = n => {
  // Program Me
  let countBitsRes = n
    .toString(2)
    .split("")
    .map(Number)
    .filter(el => (el = 1))
    .reduce((res, num) => {
      return res + num;
    }, 0);
  console.log(countBitsRes);
  return countBitsRes;
};
countBits(4);
countBits(10);

function invert(array) {
  let invertRes = array.map(t => t * -1);
  return invertRes;
  console.log(invertRes);
}

invert([1, -2, 3, -4, 5]);


// Выведите на экран первую и последнюю букву предложения, записанные в константу text, в следующем формате:

// First: N
// Last: t
// Ваша задача извлечь эти символы из строки и вставить в console.log, не используя промежуточные переменные.
const text = 'Never forget what you are, for surely the world will not';

// BEGIN
console.log(`First: ${text[0]}
Last: ${text[text.length-1]}`)
// END

//Реализуйте функцию capitalize, которая приводит первую букву переданного слова к верхнему регистру:

const capitalize = (name)=>  `${name.slice(0,1).toUpperCase()}${name.slice(1)}`
// console.log(cocapitalize("bbde"))
// END
console.log(capitalize("guzel"))

// Реализуйте функцию getSentenceTone, которая принимает строку и определяет тон предложения. 
// Если все символы в верхнем регистре, то это вопль — 'scream'. В ином случае — нормальное предложение — 'normal'.

// BEGIN
const getSentenceTone = (str)=>{
  const strUp=str.toUpperCase()
  if (str===strUp) {
  return 'scream'
  }
  return 'normal'
  } 
getSentenceTone('Hello'); // normal
getSentenceTone('WOW');   // scream
  // END
  // Реализуйте функцию normalizeUrl, которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале.

// BEGIN
const normalizeUrl =(str)=>{
  const http = "http://"
if (
  str.startsWith(http)
){
    const a = str.substring(http.length)
    return `https://${a}`
  }
  else return `https://${str}`
}
console.log(normalizeUrl('google.com')); // 'https://google.com'
normalizeUrl('http://ai.fi'); // 'https://ai.fi'
// END

// Реализуйте функцию convertText, которая принимает на вход строку и, если первая буква не заглавная, 
// возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений.



const convertText = (str)=>{
  const firstLetter = str[0].toUpperCase()
  const str2 = str.split("").reverse().join("")
  console.log(firstLetter,str2 )
    return str[0]===firstLetter ? str : str2
  }
console.log(convertText('Hello') )
console.log(convertText('hello') )



const w =(num)=>{
  num1= num.replace(/^(.{6})([0-9, ]{8})/, '$1********')
  console.log(num2)
}
w("1234123412341234")
