let retry = 0;

do {
    console.log("execute a code !");
    console.log("Retrying.......", retry);
    retry++;
} while (retry < 3);

// 
let i = 10;
do{
    console.log(i);

} while (i < 5);