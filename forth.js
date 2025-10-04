// console.log("forth file");
//higher order functions - functions that take other functions as arguments or return functions as results
//array methods - map, filter, reduce
//map - creates a new array with the results of calling a provided function on every element in the calling array
//filter - creates a new array with all elements that pass the test implemented by the provided function
//reduce - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
const nums = [1,2,3,4,5];
console.log(nums);

// const doubleNums =  nums.map((num) => 2*num);
// console.log(doubleNums);

// const evenNums = nums.filter((num) => num%2===0);
// console.log(evenNums);

const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);