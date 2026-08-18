// no arugment but return value
const getName = () => "harne";
console.log(getName());  // harne

const getEnv = () =>  "staging";
console.log(getEnv());  // staging



// multi line arrow function with no argument but return value
const getResult = (score) => {
    if (score >= 80)  return "Pass";
        return "Fail";
    }
let op = getResult(90);
console.log(op);  // Pass