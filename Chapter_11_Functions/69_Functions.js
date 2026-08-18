//without fuctions - repeat logic

function getResult(score){
    return score >= 70 ? "pass" : "fail";
}

//calling the function
getResult(80); // pass

//with functions - reuse logic

function getResult(score){
    return score >= 70 ? "pass" : "fail";
}


//calling the function

function greet(message){
    console.log(message);
}

greet("hello");
