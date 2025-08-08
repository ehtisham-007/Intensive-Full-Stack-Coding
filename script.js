// // Exercise 1:Create a const variable called city with value "Karachi". Then try to change it to "Lahore". What happens?
// const city = "karachi";
// city = "lahore";
// console.log(city);


// Exercise 2: Create a let variable called score with value 100. Then add 50 to it and print the result.
let score = 100;
score = score + 50 ;
console.log(score);


// Exercise 3:Convert this old function to arrow function:
// function multiply(x, y) {
//     return x * y;
// }
// New way
const multiply = (x , y) => x * y;
console.log(multiply(2, 3));


//Exercise 4 Use destructuring to get title and price from this object:
const book = {title: "JavaScript Guide", price: 500, author: "Ali"};
console.log(`Book name is : ${book.title} , Book price is: ${book.price}`);

//Exercise 5: Create a template literal with your name and age: "My name is [your name] and I am [your age] years old"
const name = "Ehtisham";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old`);


// Exercise 6:Destructure first and third elements from this array (skip the second):
const colors = ["red", "blue", "green", "yellow"];
const [first,third] = colors;
console.log(first);
console.log(third);