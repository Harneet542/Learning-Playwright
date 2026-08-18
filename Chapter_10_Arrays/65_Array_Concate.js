//concatenate two arrays using concat() method

let a = [1,2]
let b = [ 3,4]
let c = a.concat(b)
console.log(c) // Output: [1, 2, 3, 4]


//spread operator is used to concatenate two arrays. It is a more modern way to concatenate two arrays. It is also more readable and easier to understand. It is also more efficient than the concat() method. It is also more flexible as it can be used to concatenate more than two arrays.

let d = [...a, ...b]
console.log(d) // Output: [1, 2, 3, 4]

//join two arrays using join() method
// array into bug string

let s = ["pass","fail","skip"].join("|");
console.log(s) // Output: pass|fail|skip