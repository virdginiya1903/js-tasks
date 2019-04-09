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
  for (var i = 2; i < integer; i++) {
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
  for (var i = 2; i < integer; i++) {
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
  var vowelsCount = 0;

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
