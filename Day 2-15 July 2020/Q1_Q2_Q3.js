//Question 1
let full_name = prompt("Enter your full name");
console.log(full_name);

//Question 3
let age = prompt("Enter your age");
if (age >= 21) {
  console.log("Can drink");
} else {
  console.log("Cannot drink");
}

// Question 2

//substring() is similar to slice().The difference is that substring() cannot accept negative indexes.

let str_1 = "Hello world";
let substring = str_1.substring(6, 11);
console.log(substring);

//The replace() method replaces a specified value with another value in a string

let str_2 = "I like to play football";
let replace = str_2.replace("football", "basketball");
console.log(replace);

// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
//The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

//The splice() method adds/removes items to/from an array, and returns the removed item(s).
let country = ["Azerbaijan", "Turkey", "Russia", "India"];
country.splice(2, 0, "USA", "Germany");
console.log(country);
