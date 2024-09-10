// creating properties for object person
let person = {
    name: "Israel",
    age: 28,
    location: "Kwara",
};

// Printing all propeties of the object
console.log("Person object are:", person);

// Access and print the values of specific properties in the object.
console.log("Name:", person.name); 
console.log("Age:", person.age); 
console.log("Location:", person.location); 

// using bracket notation to access properties
console.log("Name:", person["name"]);

// Adding or updating the properties in the object using dot notation or bracket notation.
// Addomg property
person.occupation = "Software Engineer";
console.log("After adding occupation:", person); 

//updating
person.age = 31;
console.log("After adding new age is:", person)

// Adding or updating property using Bracket notation
// Update location
person["location"] = "Ibadan"; 
person["hobby"] = "Designing"
console.log("After adding and updating location and hobby", person)