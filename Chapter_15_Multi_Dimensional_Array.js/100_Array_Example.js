const test = require("node:test");

let grid = [ 
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

console.log(grid[0][0]); //10
console.log(grid[1][2]); //60

// change the value of 50 to 500
grid[1][1] = 500;
console.log(grid); //500

//lenght of the grid

console.log(grid.length); //3

console.log(grid[0].length); //3\

//reach last element of the grid
console.log(grid[grid.length-1][grid[0].length-1]); //90

// matrix with mixed datatypes
let matrix = [
    [1,2,3],
    ["a","b","c"],
    [true,false,true]
];
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        process.stdout.write(matrix[i][j]+" ");
    }   
    console.log(" ");
}