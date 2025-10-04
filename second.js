// console.log("second js file");

// let a = 10;
// const b = 20;
// var c = 30;

//functions - first class citizens
//can be stored in variables
//can be passed as arguments to other functions
//can be returned from other functions  
//higher order functions --> functions that take other functions as arguments or return functions as results
//anonymous functions - functions without a name
//arrow functions - shorter syntax for writing functions    
//function + lexical scope = closure

// function add(a,b){
//     return a+b;
// }

// console.log(add);
// console.log(add(2,3));

let sum = (a,b) => a+b;

// function sum(a,b){
//     return a+b;
// }
let diff = (a,b) =>{
    return a-b;
}
// function diff(a,b){
//     return a-b;
// }
function operate(operationfunc, a,b){
    return operationfunc(a,b);
}

console.log(operate(sum, 2,3));
console.log(operate(diff, 2,3));

// function outer(){
//     function inner(){
//         console.log("inner function");
//     }
//     return inner;
// }

// let returnedfuncVar = outer();
// console.log(returnedfuncVar);
// returnedfuncVar();

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count); 
    }
    return inner;
}

let incrementCounter = outer();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
   
