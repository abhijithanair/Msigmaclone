//OBJECTS
/*
let user =new Objects(); //object constructor syntax

user.isAdmin = true; //add new key with value
delete user.isAdmin; //delete a key

let user2 = { //an object
  name: "John", //by key "name" store value "John"
  age: 30       //by key "age" store value 30
};


console.log(user2.name); //dot to access value

let key1 = "age";
console.log(user[key1]);

let user3 = { //an object
  name: "John",
  age: 30, 
  country: "India"
};

let key = prompt("Enter what you want to display name/age/country");
console.log(user3[key]);
*/
//destructuring
const person ={
  firstname : "a",
  lastname : "b",
  password : "xyz",
}

person.firstname;
person["firstname"];
const {firstname, lastname} = person;
console.log(firstname);
const{ firstname : fn , lastname : ln} = person2;//alias
console.log(fn);