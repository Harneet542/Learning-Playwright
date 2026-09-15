// String Conversion

// To string
(200).toString();   //"200"
true.toString(); // "true"

Number("42"); //42

console.log(parseInt("42px")); 
console.log(parseFloat("3.14rem")); 

//String Immutability in JavaScript ( does not get changed)
//Strings in JavaScript are immutable, which means individual - 
// characters cannot be changed directly after the string is created. To make a change, a new string must be created and reassigned.

let str = "hello"
str[0] = "H";
console.log(str);


// upper case

let upper = str.toUpperCase();
console.log(str);
console.log(upper);

