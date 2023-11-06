console.log("10" ==10); //lose equality
console.log("10" === 10);//strict equality
console.log("null vs 0");//strict equality
console.log(null>0);//strict equality
console.log(null == 0);//strict equality
console.log(null>=0)

//let year = prompt("Enter birth year");
//let age = 2023 - year
//if(year>18)
//{
//console.log("Adult")
//}
//else{
//  console.log("Baby")
//}
/*switch(value){
  case 1:
    console.log("This text is red" );
    break;
  case 2:
    console.log("This text is yellow" );
     break;
     case 3:
      console.log("This text is blue" );
       break;
  }
  */
  //OR Operator
  /*
  let hour = prompt("Enter hour of the day");
  let weekend = false;
  if( hour<9 || hour>18 || weekend ){
  console.log("Office closed");
  }
  else{
    console.log("Office open");
  }
*/
let firstname="";
let lastname="";
let nickname="Shambu";
let activename="";
activename = firstname || lastname || nickname || "Anon";
console.log(activename);

let activename2 = firstname && lastname && nickname && "Anon";
console.log(activename2);

console.log(!false)
console.log(!0);
console.log(!!0);

console.log("Z">"A");
console.log("Glee">"Glow");
//lexical
//lexicographical
console.log("a">"A");