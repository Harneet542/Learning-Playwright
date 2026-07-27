let statuscode = 404;
let category = statuscode === 200 ? "Success" : statuscode === 400 ? " Redirect" : statuscode === 500 ? "Server Error" : "Unknown Status";
console.log(`statuscode: ${statuscode} , category: ${category}`);