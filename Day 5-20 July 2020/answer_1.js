let number = parseInt(prompt("Enter a positive number"));

let array = [];

for (let i = 1; i < number; i++) {
  array.push(i);
}
console.log("Array of numbers" + array);

let odd = array.filter((el) => el % 2 != 0);
let oddCubes = array.filter((el) => el % 2 != 0).map((el) => el ** 2);
console.log("Odd numbers:" + odd);
console.log("Array of cubes:" + oddCubes);
