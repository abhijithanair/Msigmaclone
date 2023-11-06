let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let add = (a,b)=>console.log(a+b);
let sub= (a,b)=>console.log(a-b);
let mul= (a,b)=>console.log(a*b);
let div= (a,b)=>console.log(a/b);
let rem= (a,b)=>console.log(a%b);
let exp= (a,b)=>console.log(a**b);
let op = prompt("Enter operation you want to perform - +,-,/,*,%,**");
let num3=0;
console.log("Result=");
switch(op){
    case '+':
        add(+num1,+num2);
        break;
    case '-':
        sub(+num1,+num2);
        break;
    case '*':
        mul(+num1,+num2);
    break;
    case '/':
        div(+num1,+num2);
        break;
    case '%':
        rem(+num1,+num2);
        break;
    case '**':
        exp(+num1,+num2);
        break;
    default:
        console.log("Invalid operation");
}