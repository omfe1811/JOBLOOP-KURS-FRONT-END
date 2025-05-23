/* Built-in Methods in JavaScript
JavaScript comes with a number of built-in methods that help you work with text (strings) and lists (arrays). Here we’ll look at some basic methods for strings and arrays, without including higher-order functions.

1. String Methods
String methods help us manipulate and retrieve information from text.

Examples:
 */
/* Let tekst = "Hei, verden!" */

/* Find the length of a string:
tekst.length → returns 12 */

/* Convert to uppercase:
tekst.toUpperCase() → returns "HEI, VERDEN!"

Convert to lowercase:
tekst.toLowerCase() → returns "hei, verden!"

Check if the text contains a specific word:
tekst.includes("verden") → returns true

Extract part of the text:
tekst.substring(5, 11) → returns "verden"

Replace one word with another:
tekst.replace("verden", "JavaScript") → returns "Hei, JavaScript!"

Remove whitespace from the beginning and end:
Let tekstMedMellomrom = " Hei, verden! "
tekstMedMellomrom.trim() → returns "Hei, verden!" */

Explanation:
/* 
length: Finds the length of the string.

toUpperCase() / toLowerCase(): Changes letters to upper or lower case.

includes(): Checks if the text contains a specific string.

substring(): Retrieves part of the text between two indexes.

replace(): Replaces part of the text with something else.

trim(): Removes whitespace at the start and end of the string. */
/* 




2. Array Methods
Array methods help us manipulate and retrieve information from lists.

Examples: */

let tall = [1, 2, 3, 4, 5]
/* 
Find the length of an array:
tall.length → returns 5
 *//* 
Add an element to the end:
tall.push(6) → tall becomes [1, 2, 3, 4, 5, 6]

Remove the last element:
tall.pop() → tall becomes [1, 2, 3, 4, 5]

Add an element to the beginning:
tall.unshift(0) → tall becomes [0, 1, 2, 3, 4, 5]

Remove the first element:
tall.shift() → tall becomes [1, 2, 3, 4, 5]

Check if an element exists in the array:
tall.includes(3) → returns true

Get part of the array:
tall.slice(1, 4) → returns [2, 3, 4]

Join array elements into a string:
tall.join(", ") → returns "1, 2, 3, 4, 5"
 */
/* Explanation: */
/* 
length: Finds the number of elements in the array.

push(): Adds an element to the end of the array.

pop(): Removes the last element.

unshift(): Adds an element at the beginning.

shift(): Removes the first element.

includes(): Checks if an element exists in the array.

slice(): Creates a new array from part of the original.

join(): Joins all elements into a single string.
 *//* 
Summary
String methods are used to work with text, like changing letters, checking length, or searching for words.

Array methods are used to manipulate lists, like adding, removing, or extracting elements.

These methods are fundamental tools for working with data in JavaScript! 🚀 */