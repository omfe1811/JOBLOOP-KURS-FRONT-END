1. Variables
Variables are used to store values that can be reused later in your code.

How to declare variables:

let: Used for variables that can change.

const: Used for variables that should not change.

var: An older way of declaring variables. Rarely used in modern JavaScript.

Examples:

javascript
Copy
Edit
let alder = 25;       // A variable that can change
const navn = "Ola";   // A constant that cannot change
var land = "Norge";   // An older way of declaring variables
Tips:

Use let or const instead of var.

Choose const if the value should not change.

2. Data Types
Data types define what kind of information a variable can hold.

Common data types in JavaScript:

String: Text

Number: Numbers

Boolean: true or false

Null: A deliberately empty value

Undefined: A variable that hasn’t been given a value yet

Object: A complex type that can hold many values

Array: A list of values

Examples:

javascript
Copy
Edit
let tekst = "Hei, verden!";                     // String
let tall = 42;                                  // Number
let erSulten = true;                            // Boolean
let ingenVerdi = null;                          // Null
let ukjent;                                     // Undefined
let person = { navn: "Ola", alder: 25 };        // Object
let frukter = ["eple", "banan", "appelsin"];    // Array
3. Operators
Operators are used to manipulate or compare values.

Types of operators:

Arithmetic operators: For math

Comparison operators: To compare values

Logical operators: To combine logical expressions

3.1 Arithmetic Operators
javascript
Copy
Edit
let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Remainder: 0
3.2 Comparison Operators
javascript
Copy
Edit
let x = 10;
let y = 20;

console.log(x > y);   // Is x greater than y? false
console.log(x < y);   // Is x less than y? true
console.log(x == y);  // Is x equal to y (value)? false
console.log(x === y); // Is x equal to y (value and type)? false
console.log(x != y);  // Is x not equal to y? true
3.3 Logical Operators
javascript
Copy
Edit
let erVoksen = true;
let harJobb = false;

console.log(erVoksen && harJobb); // And: false
console.log(erVoksen || harJobb); // Or: true
console.log(!erVoksen);           // Not: false
Summary
Variables: Use let for changeable values and const for constants.

Data Types: Understand the basics like String, Number, Boolean, and Object.

Operators: Use arithmetic, comparison, and logical operators to work with data.