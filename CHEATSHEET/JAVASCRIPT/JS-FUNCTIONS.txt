What is a function?
A function is a block of code that performs a task. You can define a function once and use it many times.

2. How to define and use a function
Functions are defined with the keyword function followed by a name and parentheses.

Example:

function siHei() {
console.log("Hei!");
}

siHei(); // Calls the function and prints "Hei!" to the console.

Explanation:

function siHei() defines the function.

siHei(); calls the function and runs the code inside.

3. Functions with parameters
Parameters are values you can send into a function to make it more flexible.

Example:

function hils(navn) {
console.log(Hei, ${navn}!);
}

hils("Anna"); // Prints "Hei, Anna!" to the console.
hils("Ola"); // Prints "Hei, Ola!" to the console.

Explanation:

navn is a parameter (a placeholder).

When you call the function, you can pass a value like "Anna" or "Ola".

4. Return value from a function
A function can return a value using return.

Example:

function leggSammen(a, b) {
return a + b;
}

let resultat = leggSammen(3, 4); // The function returns 7
console.log(resultat); // Prints "7" to the console

Explanation:

return sends a value back to the caller.

The value can be stored in a variable like resultat.

5. Arrow functions
Arrow functions are a modern, shorter way to write functions.

Example:

const siHei = () => {
console.log("Hei!");
};

siHei(); // Calls the function and prints "Hei!" to the console.

You can write it even shorter for one-liners:

const leggSammen = (a, b) => a + b;

console.log(leggSammen(5, 7)); // Prints "12" to the console

Differences between function and arrow functions:

Arrow functions are more concise.

Arrow functions inherit this from their surrounding context, unlike regular functions (more relevant in advanced topics).

Summary
Defining functions:

Use function for a classic definition.

Use => for a shorter arrow function.

Parameters:

Make functions dynamic by passing in values.

Return value:

Use return to send data back to the caller.

Example combining everything:
// Classic function
function multipliser(a, b) {
return a * b;
}

// Arrow function
const del = (a, b) => a / b;

// Using the functions
console.log(multipliser(3, 4)); // Prints "12"
console.log(del(10, 2)); // Prints "5"

