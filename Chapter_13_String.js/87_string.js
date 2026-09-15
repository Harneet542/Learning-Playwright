let url = "https://app.vwo.com"
let status = 'pass';
let message = `Test completed in ${320}ms`

// single Quotes
let a = 'hello';

//double quotes
let b = "world"

// Template literal (backticks) - allows expressions & multiline

let name1 = "Alice"
let msg = `Hello, ${name1}! 2+2 = ${2+2}`;
console.log(msg)


// multiline
let report = `
Test: Login
Status: Pass
Duration: 320ms`;

// convert anything to string 
//passing anything with string in an arugument it becomes string

console.log(string(200));
string(true);
string(null);
string([1,2]);

