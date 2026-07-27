let temp = 35;
let feel = (temp >=40) ? "Hot" : (temp >= 30) ? "Warm" : (temp >= 20) ? "Mild" : (temp >= 10) ? "Cool" : "Cold";
console.log(`Temperature: ${temp}°C, Feel: ${feel}`);