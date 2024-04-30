let output = document.querySelector("#output");

async function hello() {
  try {
    let result = await fetch("https://v2.jokeapi.dev/joke/Dark?type=single");
    let data = await result.json();
    output.innerText += data.joke + "\n";
  } catch (e) {
    console.log(e);
  }
}

let button = document.querySelector("#new-joke");
button.addEventListener("click", () => {
  hello();
});

let myKey = "7eb63379005491f28d9aa149fb7393c6";
let city = "Taipei";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function weather() {
  try {
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

weather();
