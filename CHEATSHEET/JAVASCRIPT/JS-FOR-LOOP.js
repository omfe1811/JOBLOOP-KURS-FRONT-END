Loops in JavaScript
Loops are used to repeat a block of code multiple times. Here we look at three common types of loops in JavaScript: for, for...of, and while.

1. for loop
A for loop is used when you know in advance how many times the loop should run.

Example:

// Print the numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
console.log(The number is: ${i});
}

Explanation:

let i = 1: Starts the loop variable i at 1.

i <= 5: The loop runs as long as the condition is true.

i++: Increments i by 1 each time the loop runs.

2. for...of loop
A for...of loop is used to iterate over elements in a list (array) or other iterable objects.

Example:

let names = ["Anna", "Ola", "Kari"];

// Print each name in the list
for (let person of names) {
console.log(Hello, ${person}!);
}

Explanation:

let person of names: Each time the loop runs, person gets the value of the next element in the array.

Perfect for iterating over arrays.

3. while loop
A while loop runs as long as a given condition is true. Used when the number of iterations is not known in advance.

Example:

let counter = 1;

// Print the numbers from 1 to 5
while (counter <= 5) {
console.log(The number is: ${counter});
counter++; // Increments counter by 1
}

Explanation:

while (counter <= 5): The loop runs as long as the condition is true.

You must manually update the loop variable (counter++) to avoid an infinite loop.

When should you use each?
for loop: When you know how many times you want to loop, such as when counting.

for...of loop: When iterating over all the elements in a list.

while loop: When you want to run a loop until a condition is no longer true, and the number of iterations may not be known in advance.

Example: Combination of loops
To demonstrate how these can be used together:

let numbers = [10, 20, 30, 40, 50];

// Use a for loop to iterate over the indices
for (let i = 0; i < numbers.length; i++) {
console.log(Index ${i} has the value: ${numbers[i]});
}

// Use a for...of loop to iterate over the values
for (let value of numbers) {
console.log(The value is: ${value});
}

// Use a while loop to count down from 5
let countdown = 5;
while (countdown > 0) {
console.log(Countdown: ${countdown});
countdown--;
}

