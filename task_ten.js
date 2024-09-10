// Practice console logging and debugging
// Use console.log() to print values and debug your code.
let userName = "Israel";
let userAge = 28;
let isRegistered = true;

// Print values to the console
console.log("User Name:", userName);        
console.log("User Age:", userAge);           
console.log("Is Registered:", isRegistered); 

// Print the result of an expression
let totalPrice = 250;
let discount = 0.2;
console.log("New Price:", totalPrice * (1 - discount)); 

// Utilize console.warn() and console.error() to display warnings and error messages.

let temperature = 105;
if (temperature > 100) {
    console.warn("Warning: Temperature is above the safe limit!"); 
};


function divideNumbers(a, b) {
    if (b === 0) {
        console.error("Error: Division by zero is not allowed!"); 
    }
    return a / b;
}   

let result = divideNumbers(10, 0); 
