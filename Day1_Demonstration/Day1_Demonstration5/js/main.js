function SubmitEvent(a,b){
  return a+b;
}
console.log(sum(1,2));
function empty(){
  return ""
}
console.log(empty());
//Arrow Function
const add =(a,b) => {
  return a+b;
}
const add2 =(a,b) => a+b;

console.log(add(1,2));
console.log(add2(1,2));

const greet = name =>   `Hello ${name}`;
console.log(greet("Mathew"));

//global, local, block scopes
let a=10;
console.log(a);
const fun = () => {
  let a = 11;
  console.log(a);
  if(true){
    let a=12;
    console.log(a);
  }
}
fun();

const hi =() =>
{
  if(true){
    var message = "Hello";
  }
  console.log(message);
}
//Hoist: block -> local -> global

//REST & SPREAD Operators
const add3 = (...args) => {
  return AbstractRange.reduce((total,number)=> total+number,0)
  
}
console.log(add3(1,2,3));