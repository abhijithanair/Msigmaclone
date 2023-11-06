//Timer
/*
setTimeout(()=>{
  console.log("after 2 seconds")
}, 2000);
*/
//Constructor
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
//   //setTimeout(() => reject(new Error("Some error!")),1000);
// });
// console.log(promise);
// //executor
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));

// //https://dummyjson.com/

// const request = fetch("https://dummyjson.com/users");
// console.log(request);

// request
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});
async function asyncFunc() {
  let result = await promise;
  console.log(result);
  console.log("Hello");
}
async function asyncFunc() {
  try {
    let result = await promise;
    console.log(result);
  } catch {
    console.log(error);
  }
}
