// returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let nums = [10, 25, 30,45];
let result = nums.find((num) => num > 20);  // 25
console.log(result);


// find index returns the index of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.

let index = nums.findIndex((num) => num > 20);
console.log(index); // 1

// findlastIndex returns the index of the last element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.

let lastIndex = nums.findLastIndex((num) => num > 20);
console.log(lastIndex); // 3