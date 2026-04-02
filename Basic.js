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

// Callback function kya hai? =========

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function bye() {
//   console.log("Bye");
// }

// greet("Aman", bye);

// What does the map() method do? ======================
// let numbers = [1, 2, 3, 4];

// let result = numbers.map((num) => num * 2);

// console.log(result);

// Find sum of numbers from 1 to 10  ===========----------------------------
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log(sum);

// Reverse a number=============
// let num = 1234;
// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(reverse);

// Function me default parameter use karo==================================

// function greet(name = "Guest") {
//   return "Hello " + name;
// }

// console.log(greet()); // Hello Guest

// error ka code hai ==============================

// const hello = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       reject(new Error("this is error ghhhhhhhhhhhhhhhhhhhhhhh"));
//     }, 5000);
//   });
// };

// try {
//   const x = await hello();
// } catch (e) {
//   console.log("e.massege");
// }

// console.log("banana");

// Reverse a number==========================

// let num = 123;
// let rev = 0;

// while (num > 0) {
//   rev = rev * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(rev);

// Check karo string palindrome hai ya nahi=====================================
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  return str === rev;
}

console.log(isPalindrome("madam")); // true

// Count Vowels============================================
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(countVowels("Aman")); // 2
