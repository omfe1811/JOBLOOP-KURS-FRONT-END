Conditionals in JavaScript
Conditionals are structures in programming that allow us to make decisions based on certain conditions. In JavaScript, they're often used to control the flow of a program.

Here’s an overview of the most common ways to write conditionals in JavaScript:

1. if Statement
An if statement runs a block of code only if the condition is true.

Example:

let alder = 18;

if (alder >= 18) {
console.log("Du er gammel nok til å stemme.");
}

Explanation:

If the variable alder is greater than or equal to 18, the message will be logged to the console.

2. if-else Statement
If the condition in the if is not true, we can use else to define an alternative action.

Example:

let alder = 16;

if (alder >= 18) {
console.log("Du er gammel nok til å stemme.");
} else {
console.log("Du er for ung til å stemme.");
}

Explanation:

If alder is less than 18, the message inside else will run.

3. if-else if-else Statement
For more complex conditions, we can use multiple else if blocks.

Example:

let alder = 15;

if (alder >= 18) {
console.log("Du er gammel nok til å stemme.");
} else if (alder >= 16) {
console.log("Du kan øvelseskjøre.");
} else {
console.log("Du er for ung til å stemme eller øvelseskjøre.");
}

Explanation:

The program checks each condition in order until one of them is true.

4. Ternary Operator
A compact way to write an if-else statement on one line.

Syntax:

betingelse ? uttrykk1 : uttrykk2;

Example:

let alder = 20;

let melding = alder >= 18 ? "Du er voksen." : "Du er mindreårig.";
console.log(melding);

Explanation:

If alder >= 18 is true, melding is set to "Du er voksen." Otherwise, it's set to "Du er mindreårig."

Summary
Use if for a simple condition.

Use if-else for two alternatives.

Use if-else if-else for multiple conditions.

Use the ternary operator for short, simple conditions.