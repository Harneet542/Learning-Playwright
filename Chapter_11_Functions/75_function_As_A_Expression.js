function greet1(name1){
    return `Hello.${name1}! Welcome to the world of functions as expressions.`;
}

// function expression - function is assigned to a variable
const greet = function(name){
    return `Hello, ${name}! Welcome to the world of functions as expressions.`;
}

console.log(greet1('Alice'));  // Hello, Alice! Welcome to the world of functions as expressions.
console.log(greet('Bob'));  // Hello, Bob! Welcome to the world of functions as expressions.
