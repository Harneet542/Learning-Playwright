// API example 

// 1. Function declaration
function validStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine");
    }
}


// 2. Function expression
const validateStatusCode_Exp = function(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine");
    }
};   // ← this was missing


// 3. Arrow function
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status < 300) {
        console.log("Request is fine");
    }
};


validStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);