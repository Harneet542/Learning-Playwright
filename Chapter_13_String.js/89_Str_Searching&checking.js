// searching & checking

let url = "https://staging.vwo.com/api/login?retry=true";
//include()
url.includes("staging");
url.includes("production");

//startWith/ endsWith

url.startsWith("https");
url.startsWith("http://");
url.endsWith("true");

//indexOf/ lastIndexif
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));


//Ascii - > every char you see has an number (american standard number)
// utf - > It is formating 
//unicode - > universal codes which are available for other languages  