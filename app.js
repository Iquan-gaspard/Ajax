const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

//return promise object
//pending delay second =>fulfill
//if delay < 0 => reject

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("delay can't upper zero");
    } else {
      setTimeout(() => {
        resolve(person + "get up");
      }, delay);
    }
  });
}

button.addEventListener("click", (e) => {
  let promiseObject = alarm(name.value, delay.value);
  promiseObject
    .then((message) => {
      output.innerHTML = message;
    })
    .catch((e) => {
      output.innerHTML = e;
    });
});

button.addEventListener("click", async () => {
  try {
    let result = await alarm(name.value, delay.value);
    output.innerHTML = result;
  } catch (e) {
    output.innerHTML = e;
  }
});
