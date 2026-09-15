//objects

let a = { status: "Pass"};
console.log(a.status);
console.log(a["status"]);


//key are sensitive in nature


let a22 = {status: "pass", Status: "fail"};
    console.log(a22["status"]);
    console.log(a22["Status"]);


// tHEY COPY THE REFERENCE 
let b = a;
b.status = "fail";
console.log(a.status);


//Object Comparison by Reference in JavaScript
//Two separate object literals are different objects, even when their contents are identical.

let c = { status: "pass" };
let d = { status: "pass" };

console.log(c === d); // false