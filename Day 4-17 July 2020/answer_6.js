let input = parseInt(prompt("Entern a number greater than 100"));

while(input<=100 || input == "")
{
    input = parseInt(prompt("ERROR! Enter ONLY a number greater than 100 or leave empty to cancel"));
}