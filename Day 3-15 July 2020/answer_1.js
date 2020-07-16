let inputNumber = prompt("Enter a number");
let checkNumber = function checkNumber()
{
    if(inputNumber%2==0)
    {
        console.log("The number entered is "+inputNumber+ " and Number is even");
    }
    else
    {
        console.log("The number entered is "+ inputNumber+ " and Number is odd");
    }
}
checkNumber()