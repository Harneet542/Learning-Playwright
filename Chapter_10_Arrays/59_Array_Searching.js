//searching in array

let result = ["pass", "fail", "pass","error","fail"];
//indexof - returns index , or -1 if not found

result.indexOf("fail"); // 1
result.indexOf("skip"); // -1

//lastindexof - returns last index of the element, or -1 if not found
result.lastIndexOf("fail"); // 4


let result = ["pass", "fail", "pass","error","fail"];
// includes - returns true or false
result.includes("error"); // true

console.log(result.includes("skip")); // false