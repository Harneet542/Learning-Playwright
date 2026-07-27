// multiple conditions can be checked using nested ternary operators. 
// However, it is important to note that using too many nested ternary operators can make the code less readable and harder to maintain. 
// In such cases, it may be better to use if-else statements or switch statements for better clarity.

let age = 26;

let will_pramod_enjoy =
    age > 18
        ? (age > 26 ? "drink" : "no")
        : false;
console.log(will_pramod_enjoy);