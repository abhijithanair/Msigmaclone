//while loop
/*
let i=0;
while(i<10){
  console.log(i);
  i++;
}
*/
/*
let count=0;
let currentRoll = 0;
let six=false
while(!six){
  count++;
  currentRoll=Math.floor(Math.random()*6)+1;
  if(currentRoll==6)
  {
    console.log(count);
    six=true;
    break;
  }
}
*/
let num = Math.floor(Math.random()*100) + 1;
do{
if(num%2==0){
  num = num/2;
}
else{
  num= num*3 +1;
}
console.log(num);
}while(num!=1);

//loop from 1 to 20
//if cur num = even continue
//if no is divisible by 3 display number is divisble by 3
//if number divisible by 5 display no divisible by 5 in console
//if number divisible by both 3&5, exit