let apiCall = new Promise(function(resolve, reject){
        resolve({status : 200, body : "User Data"});
});

apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log(response.body);
});

// .then() runs ONLY when the promise resolves successfully.


// .catch() runs ONLY when the promise is rejected.
let apiCall = new Promise(async function (resolve, reject) {
    // I will make call...
    reject("500 Error");
});

apiCall.then(function (data) {
    console.log("Data is success!!")
}).catch(function (error) {
    console.log(error)
});


// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.