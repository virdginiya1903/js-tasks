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

