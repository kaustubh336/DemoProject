//console.log("this is my function file");

class myFunc{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }   

    view(){
        console.log(`this is view function created by ${this.name}`);  
    }

     add = (a,b) => a+b;
     

}

class child extends myFunc{
    constructor(name,age,college){
        super(name,age);
        //super.display();
        this.college = college;
    }
}
// let obj = new myFunc("John", 30);
// obj.display();
// obj.view();

// let obj2 = new myFunc();
// obj2.name = "Alice";
// obj2.age = 25;
// obj2.display();
// obj2.view();

let obj3 = new child("kaustubh", 22, "Mumbai University");
console.log(`My name is ${obj3.name}, my age is ${obj3.age} and I study at ${obj3.college}`);
obj3.view();
console.log('adition of a and b is :' + obj3.add(5,6));

  const p = document.querySelector(".greeting");
  console.log(p.textContent); // "Hello"

  var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };

  console.log(person.firstName + " " + person.lastName + " : " + person.id); // John Doe

console.log("--------------------------");

  // Store data
localStorage.setItem("username", "Kaustubh");

localStorage.setItem("age", "22");

// Retrieve data
const username = localStorage.getItem("username");
const age = localStorage.getItem("age");
console.log(username); // Kaustubh
console.log(age); // 22
// Remove data
localStorage.removeItem("age");
const ageAfterRemoval = localStorage.getItem("age");
console.log(ageAfterRemoval); // null
localStorage.getItem("name"); 
console.log(username); // null
localStorage.setItem("password", "myPassword123");
const password = localStorage.getItem("password");
console.log(password); // myPassword123
localStorage.clear();
console.log(localStorage.length); // 0
localStorage.setItem("city", "New York");
const city = localStorage.getItem("city");
console.log(city); // New York
localStorage.setItem("country", "USA");
const country = localStorage.getItem("country");
console.log(country); // USA
console.log(localStorage.length); // 2
localStorage.clear();
console.log(localStorage.length); // 0
console.log(username); 
console.log(age);
localStorage.clear();
console.log(localStorage.length); // 0
console.log(username);
localStorage.removeItem("username");
console.log(username);
