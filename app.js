const { response } = require("express");

let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(response);
  console.log(response.json());
  response.json().then((data) => {
    console.log(data); //response json data  json() is an async method
  });
}); // this is callback function hell

fetchPromise
  .then((response) => response.json)
  .then((data) => {
    console.log(data);
  });
