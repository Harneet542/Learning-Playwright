// spread function 

function add (a,b,c) {
    return a+b+c;
}
let num = [1,2,3];
console.log(add(...num));

//-----------------------------------

function hasError(...codes){
    return codes.some(c => c >= 400);
}
