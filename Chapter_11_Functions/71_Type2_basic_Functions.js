// Type 2 functions

//TYpe 2 - has param and argument but no return value

function greetbyName(name){
    console.log("hi " + name);
}

greetbyName("harne");  // hi harne  
greetbyName("sachin");  // hi sachin
greetbyName("sachin tendulkar");  // hi sachin tendulkar
greetbyName("sachin tendulkar is a great player");  // hi sachin tendulkar is a great player


let name1 = greetbyName("sachin tendulkar is a great player");  // hi sachin tendulkar is a great player
console.log(name1);  // undefined