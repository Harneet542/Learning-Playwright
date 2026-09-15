let scores = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]    
];

let rowSum = scores.map(row => row.reduce((a,b) => a + b));
console.log(rowSum); // [60, 150, 240]


// another example 

let suiteResults = [
    ["login-passed", "login-failed", "login-passed"],
    ["signup-passed", "signup-passed", "signup-failed"],
    ["checkout-passed", "checkout-failed", "checkout-passed"]
];

for(let i = 0; i < suiteResults.length; i++) {
  for(let j = 0; j < suiteResults[i].length; j++) {
    if (suiteResults[i][j].includes("failed")) {
      console.log(`Test failed at row ${i}, column ${j}: ${suiteResults[i][j]}`);
    } 
  }
}