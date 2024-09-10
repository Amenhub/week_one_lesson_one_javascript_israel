//creating  an array number with list numbers and output
let numbers = [5, 10, 15, 20, 25, 30];
console.log ("These are the array number created at first:" + " " + numbers)

// Access and print the value of a specific element in the array.
let thirdElement = numbers[2];
console.log("Third element:" + " " + thirdElement);

let FourthElement = numbers[5]
console.log("The fifth element in the array:" + " " + numbers)

//manipulating array with method
//adding element to the end of the array using push and Output
numbers.push(35);
console.log("After push:", numbers);

//using pop() to remove last element and Output
let lastElement = numbers.pop();
console.log("Remaining element after pop:" + numbers);
console.log("Popped elemen in the array:", lastElement)

//  removing first element in the array with the output
let firstElement = numbers.shift();
console.log("Remaining element after shift:", numbers); 
console.log("Shifted element in the array:", firstElement);

// to add an element at the beginning of the array
numbers.unshift(1);
console.log("Remaining element After unshift:", numbers);