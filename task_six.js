// Convert a string to a number using the parseInt() or parseFloat() functions.
let strInt = "42";
let numInt = parseInt(strInt);
console.log("The newly onverted to integer:", numInt); 

// Using parseFloat() to convert a string to a floating-point number
let strFloat = "42.58";
let numFloat = parseFloat(strFloat);
console.log("The newly converted to float:", numFloat); 

// Convert a number to a string using the toString() method or string concatenation.
let number = 100;
let strNumber = number.toString();
console.log("Converted to string using toString():", strNumber); 

// Using string concatenation to convert a number to a string
let strConcat = number + ""; 
console.log("Converted to string using concatenation:", strConcat);

// Convert a string to an array using the split() method.
let sentence = "This is a sentence";
let wordsArray = sentence.split(" "); 
console.log("Converted to array:", wordsArray); 

// You can split by any character, for example, a comma:
let csv = "apple,banana,cherry";
let fruitsArray = csv.split(",");
console.log("Converted to array:", fruitsArray);