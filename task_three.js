// Creating boolean variables
let True = true;
let False = false;

//using logical operators such as AND, OR, and NOT

// AND logical operator
let andOperation = True && False; 
console.log("AND Operation: " + andOperation);

// OR logical operator
let orOperation = True || False; 
console.log("OR Operation: " + orOperation);

// NOT (!) - negates the boolean value in both case of the variable
let notTrue = !True; 
console.log("NOT Operation on True: " + notTrue); 

let notFalse = !False; 
console.log("NOT Operation on False: " + notFalse); 

//using if-else Statement with AND logical operator
if (True && False) {
    console.log("Both are true.");
} else {
    console.log("Both are not true."); 
}

// using if either 'True' or 'False' with OR logical operator
if (True || False) {
    console.log("At least one is true."); 
}

// Using if-else with  NOT (!) logical operator
if (!False) {
    console.log("False is actually false, so this condition is true."); 
} else {
    console.log("False is true, so this condition is false.");
}