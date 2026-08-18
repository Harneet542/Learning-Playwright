//accessing & Modifying 

let status = ["pass", "fail","skip"];

console.log(status[0]);
console.log(status[2]);

console.log(status.at(-1));
console.log(status.at(-4));  // undefined 

// modifying the value 

status[1] = "blocked";
console.log(status);

//lenght 
console.log(status.lenght)

