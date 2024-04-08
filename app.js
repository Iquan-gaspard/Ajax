async function fetchProduct() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

fetchProduct();

async function my() {
  return 10;
}
let result = my();
result.then((data) => {
  console.log(data);
});
