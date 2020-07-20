fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

async function fetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  console.log(data);
}
fetch();
