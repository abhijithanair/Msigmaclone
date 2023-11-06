//REST
const numbers =[1,2,3,4,5];
/*
const sum =(args) => {
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum += args[i];
    }
  console.log(args);
}
sum(numbers);
*/
//Map
/*
const sum =(args) => {
  let sum = 0;
  args.map((elements)=>sum+=element);   //like CallByReference - can change values
  args.map((elements,idx)=>sum+=element); 
console.log(sum);
}
sum(numbers);


//For Each
/*
const sum =(args) => {
  let sum = 0;
  args.forEach((elements)=>sum+=element); //like callByValue - cant change values
console.log(sum);
}
*/
//SORT

console.log(["z","b","c","a"].sort());
console.log([10,3,1,5]).sort((a,b)=>a-b);
