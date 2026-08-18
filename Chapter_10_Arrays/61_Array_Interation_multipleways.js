let tests = ["login", "signup", "logout", "profile"];
// forEach executes a provided function once for each array element. mostly used 80%
for (let i = 0; i < tests.length; i++) {
  console.log(i, tests[i]);
}

// for...of executes a provided function once for each array element.( another way to iterate over an array)
for (let test of tests) {
  console.log(test);
}

//for each method executes a provided function once for each array element. ( it will have indexation as well) // agents write this for loop mostly 
tests.forEach((test, index) => {
  console.log(`${test}, ${index}`) ;
});

//enteries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let entries = tests.entries();
for (let [index, test] of entries) {
  console.log(`${test}, ${index}`);
}   

// another way 

let students = ["John", "Jane", "Jack", "Jill"];
// for...of loop to iterate over the array
for (let student in students) {
  console.log(student, " => ", students[student]);
}