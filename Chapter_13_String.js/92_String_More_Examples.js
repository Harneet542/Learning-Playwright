let str = "Hello, World!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespace

console.log(str.trim());

str.trimStart();
str.trimEnd();


// Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS");
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/G, "PASS"); 

// Concatenation 

"Hello" + " " +"World";
"Hello".concat(" ","World");
`${"Hello"} ${"World"}`;

// replacing 

let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));



// spliting & joining 

console.log("pass,fail,skip".split(",")) // [ "Pass", "fail", "skip"])
"hello".split(""); //["h","e","l","l,"o]

// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);
