// this is an valid syntax we can use _1 as variable

for (let _1 =0; _1 <=10; _1++){
    console.log(_1)
}

// 2 - no execution happens
for (let x = 0; x > 1; x++){
    console.log(x);
}

//3 - no condition means infinite loop
// condition can be optional and this is an valid syntax 

for (let x = 0; ; x++){
console.log(x);
}

//3
for (let somya =0; somya <18; somya++){
    if (somya >= 15){
        console.log("Gift from papa")
    } else {
        console.log("No gift from papa")
    }
}

///

let count = 0; 
for ( let i = 5; i<5; i++) {
    count++;
}
console.log(count);

//Q1. [Tricky] What is the output?

var sum = 0;
for (var i = 1; i <= 5; i++);
  sum += i;
console.log(sum);