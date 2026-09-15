let env = "staging"; // global scope

function setupConfig() {
    let timeout = 3000; // local scope
    console.log(env);   // can access global
    console.log(timeout);  // can access local
}

setupConfig();
console.log(env);
console.log(timeout);  // reference error it is an local variable 

// another example 

let g_x = 10;

function outer () {
    let x =10;

    function inner(){
        let y = 20;
        console.log(x); // inner can access outer global fn
    }

inner();
console.log(y); // outer cannot access inner as let is blocked scope

}
