// const count = true;
// let countValue = new Promise((resolve, reject) => {
//   if (count) {
//     resolve("There is a count value.");
//   } else {
//     reject("There is no value");
//   }
// });

// console.log(countValue);
//

// let countValue = new Promise((resolve) => {
//   resolve("Promise resolved");
// });

// const v1 = (res) => {
//   console.log(res);
//   return res;
// };
// const v2 = (data) => {
//   console.log(data);
//   console.log("You can call multiple fucntions this way.");
// };

// countValue.then(v1).then(v2);

const v1 =(res) => {
    return new Promise((resolve, ) =>{
        console.log(res);
        setTimeout(() => {
            resolve("Result from v1");
        }, 1000);
        }
    });
);

countValue.finally(
    function greet(){
        comsole.log('THis code is executed. ');
    }
);
