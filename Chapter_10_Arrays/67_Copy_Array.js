// copy an Array in JavaScript - shallow copy
//original array will not be affected when we change the copy of the array
let originalArray = [1, 2, 3, 4, 5];

let copy1 = [...originalArray]; // using spread operator
console.log(copy1); // Output: [1, 2, 3, 4, 5]
console.log(originalArray); // Output: [1, 2, 3, 4, 5]


// using slice method
let copy2 = originalArray.slice();
console.log(copy2); // Output: [1, 2, 3, 4, 5]
console.log(originalArray); // Output: [1, 2, 3, 4, 5]          

// using Array.from() method
let copy3 = Array.from(originalArray); // using Array.from()
console.log(copy3);

//concat method
let copy4 = [].concat(originalArray);
console.log(copy4); // Output: [1, 2, 3, 4, 5]

// deep copy - original array will be affected when we change the copy of the array - do not do this 
let deep_copy_array = originalArray;


originalArray.push(91);
console.log(originalArray); // Output: [1, 2, 3, 4, 5, 91]