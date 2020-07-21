let name = prompt("Enter your name");

function welcome()
{
    document.getElementById("welcome").innerHTML = "Welcome     " + name;
}
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

welcome();
setInterval(clock,1000);

