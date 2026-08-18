// arrow function is a short hand way of writing function in javascript. 
// It is also called as fat arrow function. It is introduced in ES6 version of javascript. It is also called as lambda function in other programming languages.


// arrow function 

const greet2 = (name) => `Hello, ${name}! Welcome to the world of arrow functions.`;

console.log(greet2('Alice'));  // Hello, Alice! Welcome to the world of arrow functions.




// 3 ways of writing function in javascript ----- important 

// 1st - Function Declaration
function greet1(name) {
    return `Hello, ${name}! Welcome to the world of functions.`;
}

// 2nd - Function Expression

// A function is stored inside a variable
const greet = function(name) {
    return `Hello, ${name}! Welcome to the world of functions as expressions.`;
};

// 3rd - Arrow Function
// Shorter syntax for writing a function
const greet2 = (name) =>
    `Hello, ${name}! Welcome to the world of arrow functions.`;



// calling the functions
console.log(greet1('Alice'));
console.log(greet('Bob'));
console.log(greet3('Charlie'));

