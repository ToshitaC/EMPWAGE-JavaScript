const prompt = require('prompt-sync')();
function convertTemperatureToFahrenheit(temperature) {
    return (temperature * (9 / 5)) + 32;
}
function convertTemperatureToCelsius(temperature) {
    return ((temperature - 32) * 5 / 9);
}
console.log("Choose: 1)Celsius to Fahrenheit conversion     2)Fahrenheit to Celsius conversion");
//Math.floor(Math.random() * 10) % 2 + 1;
let convertedTemp = 0;
let num = parseInt(prompt('Enter your choice: '));
switch (num) {
    case 1: console.log("Celsius to Fahrenheit conversion");
        let degC = prompt("Enter temperature in celsius: ");
        convertedTemp = convertTemperatureToFahrenheit(degC);
        console.log("Temperature in fahrenheit is: " + convertedTemp + "F");
        break;
    case 2: console.log("Fahrenheit to Celsius conversion");
        let degF = prompt("Enter temperature in fahrenheit: ");
        convertedTemp = convertTemperatureToCelsius(degF);
        console.log("Temperature in celsius is: " + convertedTemp + "C");
        break;
}