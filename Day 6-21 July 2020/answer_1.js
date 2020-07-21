let colors = ["blue", "red", "green", "yellow", "purple"];

let i = 0;
function changeColor() {
  document.getElementById("background").style.backgroundColor = colors[i];
  i = (i+1)%colors.length;
}
setInterval(changeColor, 5000);
