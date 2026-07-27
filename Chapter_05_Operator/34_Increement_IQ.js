let a = 10;
console.log(++a + a + a++);
console.log(a);

let i = 1;
let result = i++ + ++i;
console.log(result, i );

// 
let a = 10;
console.log(++a + ++a);
console.log(a);

//
let a = 34; 
let result = a++;
console.log(result);
console.log(a);
//
 
// 18th July task 

let a = 100;
console.log(a++ + ++a + ++a);
console.log(a);

//  decrement operator
let a = 37;
console.log(--a + a--);
console.log(a);

// second question 

let a = 5;
let b = a-- - --a;
console.log(b,a);

// third question 
let i = 1;
let r = i++ > 1? i++ : ++i;
console.log(r,i);