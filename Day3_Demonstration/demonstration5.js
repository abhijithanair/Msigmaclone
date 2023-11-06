//Async Await

async function myFunction(parameter1, parameter2) {
  //asynchromous code here
}
const myFunction = async (parameter1, parameter2) => {
  //asynchromous code here
};

async function fn() {
  console.log("Async Function.");
  return 1;
}
fn().then(v1).then(v2).catch(handleError);
