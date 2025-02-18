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
