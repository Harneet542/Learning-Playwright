// score.map is an inbuilt function that takes a callback function as an argument and applies it to each element of the array, returning a new array with the results.
// S can be anything it is just a variable name that represents each element of the array. In this case, we are checking if the score is greater than 70, if it is then we return "pass" otherwise we return "fail".


let score = [ 45, 82, 91, 60, 73 ];

let results = score.map( s => s > 70 ? "pass" : "fail" );

console.log(results);

// map will used when we want to transform the array into another array. It will not change the original array. 
// It will return a new array with the transformed values of same size. It is mostly used when we want to transform the array into another array. It will not change the original array. 


// filter method is used to filter the elements of an array based on a condition. It takes a callback function as an argument and returns a new array with the elements that pass the condition. In this case, we are checking if the score is greater than 70, if it is then we return true otherwise we return false. The filter method will return a new array with the elements that pass the condition.

let passing  = score.filter( s => s >= 70 );
console.log(passing);