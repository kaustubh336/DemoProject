// console.log('This is the first file.');
// console.log(23+34);
// console.log("Hello kk");

//primitive / value types
//string,number,boolean,undefined,null,symbol(bigint)
//js - dynamically typed language
let firstName = "John";
console.log(firstName);
console.log(typeof firstName);
x=null;
console.log(x);
console.log(typeof x);
x=5;
console.log(x);

//number
let y = 1;
console.log(y);
console.log(typeof y);

let z = 1.5;
console.log(z);
console.log(typeof z);

//boolean
let p = true;
console.log(p);
console.log(typeof p);
//undefined
let w;
console.log(w);
w =8;
console.log(typeof w);

//reference types
//array,object,functions
//object - group all the types together
//arrays and functions are objects
let arr = [1,2,3,4];
console.log(arr);
console.log(typeof arr);

let course = {
    title: "JavaScript",
    description : "This is a JS course",
    duration : 30
};
console.log(course);
console.log(typeof course);

//notation
console.log(course.title);
console.log(course['title']);

let a = "kaustubh";
let b = a;

a = "kk";
console.log(a);
console.log(b);

let j = {name: "kaustubh"};
let k = j;

j.name = "kk";
console.log(j);
console.log(k);

let courses = ['js','java','python',50,true,null];
console.log(courses.length);
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]); 
console.log(courses[3]);
console.log(courses[4]);
console.log(courses[5]);
console.log(courses);

//Executipon context
//1. memory phase - variable environment
//2. code execution phase - line by line execution
//hoisting - var and function declarations are hoisted
//when you try to acces these variables or function before they are declared/intialized is called hoisting
//when you try to access let and const before they are declared/intialized - temporal dead zone
//lexical scope it basically tells you what all you can access from a particular part of the code
createCourse("Python");
console.log(x);

function createCourse(coursename){
    console.log("Creating course: " + coursename);      
}
var x = 10;
console.log(x);
createCourse("JavaScript");
createCourse("Java");

//window and this
console.log(j);

// console.log(l);
// console.log(this.l);
// console.log(window.l);
// let and const are more strict
//temporal dead zone
//const,let - block scoped --> { }
//var - function scoped
// const l = 10;
// l =200;
var l = 10;
console.log(l);
console.log(this.l);
console.log(window.l);
console.log(window);
console.log(this === window);
console.log(this);

function Hello(){
    let q =10;
}

console.log(q);
//let q = 100;
Hello();
