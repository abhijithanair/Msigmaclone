//callbacks
/*
function greet(name,callback){
    console.log('Hi' + ' ' + name);
    callback();
}
function alpha(){
    console.log('I am the alpha function');
}
function beta(){
    console.log('I am the beta function');
}

greet('Peter',alpha);
greet('Tom',beta);
*/
//filtering
function arrayOps(arr, callback) {
  const result = arr.filter(callback);
  return result;
}
function isPositive(value) {
  return value >= 0;
}
const arr = [12, -18, 25, 13, -20];
const filtered = arrayOps(arr, isPositive);
console.log(arr);
console.log(filtered);

//
setTimeout(function () {
  myFunction("Hello World");
}, 3000);
function myFunction(value) {
  document.getElementsById("demo").innerHTML = value;
}
//or
setTimeout =
  (() => {
    myFunction("Hello World");
  },
  3000);
function myFunction(value) {
  document.getElementsById("demo").innerHTML = value;
}
