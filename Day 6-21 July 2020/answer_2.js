let input = parseInt(prompt("Enter a number"));

let res = 0;
function multiply() {
  for (let i = 10; i >= 0; i--) {
    res = input * i;
    let table = document.getElementById("multiplication");
    let row = table.insertRow(0);
    let cell_1 = row.insertCell(0);
    let cell_2 = row.insertCell(1);
    let cell_3 = row.insertCell(2);
    let cell_4 = row.insertCell(3);
    let cell_5 = row.insertCell(4);
    cell_1.innerHTML = " " + input + " ";
    cell_2.innerHTML = " * ";
    cell_3.innerHTML = i;
    cell_4.innerHTML = " = ";
    cell_5.innerHTML = " " + res + " ";
  }
}
multiply();
