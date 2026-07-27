let enviroment = "staging";
let baseUrl = enviroment  === "prod" ? "https://api.example.com" : "https://staging.api.example.com";
console.log(baseUrl);