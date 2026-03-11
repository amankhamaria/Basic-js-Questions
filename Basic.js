// Reverse a String
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("aman"));
// Output: nama

// Check Palindrome 2 //

// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

// Find Largest Number in Array 3 //

// function findLargest(arr) {
//   return Math.max(...arr);
// }

// console.log(findLargest([10, 5, 25, 8]));
// Output: 25

// Variable kaise declare karte hain? ///////////////
// var name = "Aman";
// let age = 25;
// const country = "India";

// console.log(name, age, country);

// If-Else Example /////////

// let age = 18;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// Loop Example (for loop) /////////
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// Prime Number Check //////////

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(9)); // true

// Callback Function -============================

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Aman", sayBye);

//else if questions js =================================

// let marks = 80;

// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 70) {
//   console.log("B");
// } else {
//   console.log("C");
// }

// What is a Closure in JavaScript? ==============

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// What is Promise in JavaScript? ================\

// const promise = new Promise((resolve, reject) => {

//   let success = true;

//   if(success){
//     resolve("Data received");
//   } else {
//     reject("Error occurred");
//   }

// });

// promise
// .then(result => console.log(result))
// .catch(error => console.log(error));
