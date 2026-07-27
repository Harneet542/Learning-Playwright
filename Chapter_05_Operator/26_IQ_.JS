let responTime = 850;
let sla = 1000;
let slastatus = responTime <= sla ? "Within SLA" : "Outside SLA";
console.log(`response: ${responTime}ms , ${slastatus}`);

// Template Literals are used to create strings that can contain placeholders for variables or expressions. In this case, the backticks (`) are used to define a template literal, 
//  nand the placeholders ${responTime} and ${slastatus} are used to insert the values of the responTime and slastatus variables into the string. This allows for more readable and maintainable code when constructing strings that include dynamic values.