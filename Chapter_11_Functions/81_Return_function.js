// return function 

function getStatus(code){
    if (code>= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

console.log(getStatus(200));

// return nothing --- undefined 

function logTest(name) {
    console.log(`running: ${name}`);
    // no return statement 
}

logTest("Hi this is a log");

// return {"name: xyz"}; - object 

function aaa(){
    return [ 2,2,3,5,4];
}