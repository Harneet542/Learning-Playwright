// checking Array 

let result = Array.isArray([1, 2, 3]); // true
console.log(result); // Output: true

let result2 = Array.isArray("not an array"); // false       
console.log(result2); // Output: false


//every , sum - this is used in playwright alot 

[1, 2, 3, 4, 5].every((s) => s >= 70); // false
[70, 80, 90].every((s) => s >= 70); // true

// some - at least one element in the array passes the test implemented by the provided function.

[1, 2, 3, 4, 5].some((s) => s >= 70); // false
[1, 2, 70, 4, 5].some((s) => s >= 70); // true  