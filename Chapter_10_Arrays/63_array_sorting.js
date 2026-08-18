let fruit = ["apple", "banana", "cherry", "date", "elderberry"];
// sort method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
fruit.sort();
console.log(fruit); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

// sort method can also take a compare function as an argument. The compare function should return a negative, zero, or positive value, depending on the arguments, for example, if we want to sort the array in descending order, we can use the following compare function.
fruit.sort((a, b) => b.localeCompare(a));
console.log(fruit); // Output: ["elderberry", "date", "cherry", "banana", "apple"]


// reverse method reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.
fruit.reverse();
console.log(fruit); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

// asending order sorting . it onlyu works for numbers not for strings. For strings we can use localeCompare method as shown above.

fruit.sort((a, b) => a-b);

console.log(fruit); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

// decending order sorting - it only works for numbers not for strings. For strings we can use localeCompare method as shown above.

fruit.sort((a, b) => b-a);  
console.log(fruit); // Output: ["elderberry", "date", "cherry", "banana", "apple"]