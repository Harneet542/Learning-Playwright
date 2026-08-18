//slicing & combining arrays
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ["banana", "cherry", "date"]

//slice(Start,end) - returns new array containing the selected elements. ( start, end-1)
//does not mutate the original array. It returns a new array containing the selected elements. ( start, end-1)
// don't give the end, it will automatically take the length of the array as the end. It will return all the elements from the start index to the end of the array.

// if there is no end then it will take the length of the array as the end. It will return all the elements from the start index to the end of the array.
let slicedFruits2 = fruits.slice(2);
console.log(slicedFruits2); // Output: ["cherry", "date", "elderberry"]

// if we take negative index then it will start from the end of the array. It will return all the elements from the start index to the end of the array.
let slicedFruits3 = fruits.slice(-3);
console.log(slicedFruits3); // Output: ["cherry", "date", "elderberry"]

// if we use 0 as the start index then it will return all the elements from the start index to the end of the array.
let slicedFruits4 = fruits.slice(0);
console.log(slicedFruits4); // Output: ["apple", "banana", "cherry"]

// take all negative index then it will return all the elements from the start index to the end of the array. we always go from right side 
let slicedFruits5 = fruits.slice(-4, -5);
console.log(slicedFruits5); // Output: ["banana", "cherry", "date"]