let inputString  = prompt("Enter OS name and version separated by a space");
let res = inputString.split(" ",2);

console.log("The OS name is " + res[0] + " and version is " + res[1]);