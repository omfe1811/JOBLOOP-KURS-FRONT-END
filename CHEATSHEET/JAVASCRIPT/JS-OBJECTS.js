/* 1. How is an object structured?
An object consists of key-value pairs. Each key (also called a “property”) is a string, and each value can be anything: numbers, strings, functions, arrays, or even other objects.

Example:
 */
/* let person = {
 navn: "Anna",
 alder: 25,
 yrke: "Utvikler"
}; */

console.log(person.navn); // "Anna"
console.log(person["alder"]); // 25
/* 
Explanation:

The keys (navn, alder, yrke) are used to access the values.

You can use either dot notation (person.navn) or bracket notation (person["alder"]).

2. When should you use an object?
Use objects when:

You need to organize data that has structure (e.g., properties of a person, a product, etc.).

You need a flexible data structure that can hold various data types.

3. How to update an object?
You can update, add, or remove properties dynamically.

Examples: */

let person = {
 navn: "Anna",
 alder: 25
};

// Update an existing property
person.alder = 26;

// Add a new property
person.yrke = "Utvikler";

// Delete a property
delete person.alder;

console.log(person);
// { navn: "Anna", yrke: "Utvikler" }

/* 4. Object arrays: Structuring data
A common way to structure data is to use an array of objects. This is useful when you want to represent a group of items with multiple properties.

Example:

let personer = [
 { navn: "Anna", alder: 25, yrke: "Utvikler" },
 { navn: "Ola", alder: 30, yrke: "Designer" },
 { navn: "Kari", alder: 28, yrke: "Tester" }
];

console.log(personer[0].navn); // "Anna"

5. Loop through an object array
To iterate through an object array, you can use a for...of loop.

Example: */

let personer = [
 { navn: "Anna", alder: 25, yrke: "Utvikler" },
 { navn: "Ola", alder: 30, yrke: "Designer" },
 { navn: "Kari", alder: 28, yrke: "Tester" }
];

// Print name and occupation for each person
for (let person of personer) {
/*  console.log(${person.navn} jobber som ${person.yrke}); */
}

/* Output:

Anna jobber som Utvikler
Ola jobber som Designer
Kari jobber som Tester

Summary
Objects:
 Structured as key-value pairs.
 Used to store related data about one entity (e.g., a person or a product).

Object arrays:
 Used when you have many items with the same kind of data (e.g., a list of people).

Updating:
 Update existing properties, add new ones, or delete them with simple syntax.

Loops:
 Use for...of loops to iterate over arrays of objects. */