// console.log('Everything is working under the hood...');

// SECTION - Section 1:

// What is the difference between a parameter and an argument?
  // Function parameters are the names listed in a function definition, while function arguments are the real values/input passed tothe function.

//Within a function, what is the difference between return and console.log?
  // The return function ends the function execution and returns and specifies a value to be returned to the function caller. Meanwhile, a console.log merely prints a value in the console. A console.log does not properly define a function because it does not cease function execution when it fires.


//What are the implications of the ability of a function to return a value?
  // A function can be called to return a new value to then be used as an argument in another function.



// SECTION - Section 2:

// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.

// function checkPalindrome(inputString) {
//   let reversedString = inputString.split('').reverse().join('').toLowerCase();
//   if (inputString.toLowerCase() === reversedString) return true;
//   return false;
// }



// SECTION - Section 3:
// Write a function sumDigits that accepts a number and returns the sum of its digits.

// function sumDigits(inputNum) {
//   let numString = inputNum.toString().split('');
//   let sumOfNums = 0;
//   for (let i = 0; i < numString.length; i++) {
//     sumOfNums += Number(numString[i]);
//   }
//   return sumOfNums;
// }



// SECTION - Section 4:

// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

// function calculateSide(sideA, sideB) {
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }



// SECTION - Section 5:

// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Do not use .reduce().

// function sumArray(inputArray) {
//   let sumOfNums = 0;
//   for (let i = 0; i < inputArray.length; i++) {
//     sumOfNums += inputArray[i];
//   }
//   return sumOfNums;
// }



// SECTION - Section 6:

// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

// function checkPrime(inputNum) {
//   if (inputNum <= 1) return false;
//   if (inputNum === 2) return true;
//   let theSqrt = Math.sqrt(inputNum);
//   for (let i = 2; i <= theSqrt; i++) {
//     if (inputNum % i === 0) return false;
//   }
//   return true;
// }


// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

// function printPrimes(inputNum) {
//   let primeNumArray = [];
//   for (let i = 0; i < inputNum; i++) {
//     if (checkPrime(i)) primeNumArray.push(i)
//   }
//   return primeNumArray;
// }

// console.log(printPrimes(100));



// SECTION - Section 7:

// Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.

function insertDash(inputNum) {
  let numString = inputNum.toString().split('');
  let finalString = [];
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] % 2 !== 0) finalString.push(numString[i] + '-')
    else finalString.push(numString[i]);
  }
  return finalString.join('');
}

