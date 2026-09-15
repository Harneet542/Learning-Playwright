//Primitive Copy by Value vs Object Reference in JavaScript


//Primitive Values — Copy by Value

let a = 10;
let b = a;

b = 99;

console.log(a); // 10
console.log(b); // 99




//Objects — Reference is Copied
let obj1 = { val: 10 };

let obj2 = obj1;

obj2.val = 99;

console.log(obj1.val);


/*JavaScript does not create a new separate object here.

Both variables point to the same object in memory.

Conceptually:

obj1 ─────┐
          ↓
       { val: 10 }
          ↑
obj2 ─────┘

Now:

obj2.val = 99;

changes that shared object:

obj1 ─────┐
          ↓
       { val: 99 }
          ↑
obj2 ─────┘

Therefore:

console.log(obj1.val); // 99
console.log(obj2.val); // 99

Both show 99.

Why?

Because:

obj2 = obj1;

doesn't mean:

Make another object with val = 10

It means:

obj2 should point to the same object obj1 points to
Simple Comparison
// Primitive
let a = 10;
let b = a;

b = 99;

console.log(a); // 10

Here, b gets its own copy.

But:

// Object
let obj1 = { val: 10 };
let obj2 = obj1;

obj2.val = 99;

console.log(obj1.val); // 99

Here, obj1 and obj2 refer to the same object.

One correction to the comment in your screenshot: saying JavaScript uses "call by reference" is technically misleading. 
JavaScript is pass-by-value, but for objects, the value being copied is a reference to the object.*/