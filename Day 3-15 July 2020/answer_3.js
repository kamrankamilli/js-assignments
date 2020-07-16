const mark = prompt("Enter a mark");
let grade = null;

switch (true) {
  case mark < 40:
    q;
    grade = "F";
    console.log("Mark is " + mark + " and grade is " + grade);
    break;
  case mark >= 40 && mark < 55:
    grade = "D";
    console.log("Mark is " + mark + " and grade is " + grade);
    break;
  case mark >= 55 && mark < 70:
    grade = "C";
    console.log("Mark is " + mark + " and grade is " + grade);
    break;
  case mark >= 70 && mark < 85:
    grade = "B";
    console.log("Mark is " + mark + " and grade is " + grade);
    break;
  case mark >= 85 && mark <= 100:
    grade = "F";
    console.log("Mark is " + mark + " and grade is " + grade);
    break;
  default:
    console.log("Wrong input! Check your input");
}

/*
if(mark<40)
{
    grade = "F";
    console.log("Mark is " + mark + " and grade is " + grade);
}
else if(mark >= 40 && mark < 55)
{
    grade = "D";
    console.log("Mark is " + mark + " and grade is " + grade);
}
else if( mark >= 55 && mark < 70)
{
    grade = "C";
    console.log("Mark is " + mark + " and grade is " + grade);
}
else if(mark >= 70 && mark < 85)
{
    grade = "B";
    console.log("Mark is " + mark + " and grade is " + grade);
}
else if(mark >= 85 && mark <= 100)
{
    grade = "F";
    console.log("Mark is " + mark + " and grade is " + grade);
}
else
{
    console.log("Wrong input! Check your input");
}
*/