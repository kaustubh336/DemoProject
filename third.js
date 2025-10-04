//console.log("third file");
//Non-blocking asynchronous behavior
// function fetchData(callback){
//     setTimeout(()=>{
//             let data = 'fetched data';  
//             callback(data,'server error');
//         },5000);
// }

//Callback
//event queue 
//event loop
// function fetchData(callback) {
//     setTimeout(() => {
//         let data = 'fetched data';
//         callback(data, null);
//     }, 5000);
// }

// function handleData(data, error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// }

// console.log("start");
// fetchData(handleData);
// console.log("end");

//problems with callback --> callback hell , pyramid of doom
//solution - promises
//promise - an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
//states - pending, fulfilled, rejected
//methods - then, catch, finally
//promises - object with two parameters - resolve, reject
// let promise = new Promise((resolve, reject)=>{

console.log("----------------------------------------------");
function getData() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
             resolve('data fetched');
            //reject('server error');
        }, 5000);
    });
}

// getData()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     })

//instead of then and catch we can use async await
//async - function that returns a promise
//await - wait for a promise to be resolved
//try catch - to handle errors  
//another definition of async function - a function that is declared with the async keyword and allows the use of await within it to pause execution until a promise is resolved or rejected

async function fetchData(){
    try{
        const result = await getData();
        console.log(result);
    }
    catch(error){
        console.error(error);
    }
}

fetchData();