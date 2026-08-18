// immediately invoked expression (IIFE)

function name1(){
    console.log("Hi")
}
name1();


//IIFE - ananoymus fn - anonymous function syntax

(function () {
    console.log("Anonymous fun");
} )
();

//IIFE: define it and execute it immediately. arrow function syntax
// cannot call this function 

(() => {
    console.log("Setup complete");
})
();