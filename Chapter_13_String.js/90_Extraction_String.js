//Extracting Substring

let str = "Login_Test_Pass_001";

// slice(start, end) - negative indexes supported ( start. end -1)

console.log(str.slice(0,5));
console.log(str.slice(11));
console.log(str.slice(-3));

let testNumber = str.slice(-3);


//substring(start, end) - no negative ( treat as 0)

String.substring(6,10);

// at() for single char
str.at(0);
str.at(-1);