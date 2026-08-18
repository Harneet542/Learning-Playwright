var a = 10;
console.log(a);

/// var - it is function scoped ()

// define
function printHello(){
    console.log("Hello Testing Acedmy");
    var a = 20;
    console.log(a);
    if (true){
        var a = 30;
        console.log(a);

    }
    console.log(a);
}

printHello();

/// let - blocked scope 
/// no duplication is allowed in let ( no re-declaration allowed)
let b = 20;

function printHello() {
    console.log("Hello Testing Academy");

    let a = 30;
    console.log(a);

    if (true) {
        let a = 30;
        console.log(a);
    }

    console.log("let ->", b);
}

printHello(); // CALL IT HERE

/// const is blocked scoped 

const pi = 3.14
console.log(pi);
pi = 3.14159;