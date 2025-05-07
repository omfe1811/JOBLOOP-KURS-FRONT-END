/* 
The function should take one number as a parameter.
The function should return an array of random numbers between 1 and 6.
The length of the array is determined by the number passed as a parameter
(think of it as the number of dice being rolled).
Examples:
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]
Add a second parameter to the function that determines how many sides the dice should have.
diceRoller(5, 20) should return an array with 5 random numbers from 1–20.*/
/* diceSides = Math.ceil(Math.random() * 6); */
let resultArr = [];
function diceRoll(rolls, diceSides){
for(i=0; i<rolls; i++){
  result = Math.ceil(Math.random() * diceSides);
  resultArr.push(result);
}
}
diceRoll(8,20);
console.log(resultArr);
/* console.log(randomNumber)
function diceRoller(diceSides, rolls){
  diceSides= Math.ceil(Math.random(6));
  resultArr=[];
  resultArr.length=rolls;
  for(i=0; i>= rolls; i++){
    
  }

}
 */






/* 3.
Create the following function:

The function should take an array of strings as a parameter.

Inside the function, do the following:

Write a loop that iterates through the strings in the array, and does the following:

Remove whitespace from the beginning and end of each word.

Convert all words to lowercase.

Use a "for...of" loop.

After the loop, use a method to join the array into a single string
with a single space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt ", " nEeds ", "to", "BE", "cleANED ", " Up"]
should return:
"this text needs to be cleaned up"

4.
Complete the function below to achieve the following:

Return the string received in the first parameter with the following changes:

Each character in the string that matches charA (the second parameter) should be replaced
with charB (the third parameter), and vice versa — that is, characters that match charA
should be swapped with charB, and characters that match charB should be swapped with charA.
doubleSwap("this is a string", "i", "s")
→ "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
→ "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
→ "whao is ohe ptino tf ohis?"
5. EXTRA CHALLENGE
(Solving this task is optional, only for those who want an extra challenge.)

Create a function called helloChecker that takes a string as a parameter.

Write code that checks all the words in the string to see if any of them
match the word for “hello” in any of these languages:

hello (English)

ciao (Italian)

salut (French)

hallo (German)

hola (Spanish)

czesc (Polish)

If any of the words in the string match one of these, the function should return:
"HELLO detected in (name of language)."

If none of the words in the string match, the function should return:
"No HELLO detected."

Note: Make sure the function is case-insensitive; both "Hello" and "hello" should be detected.

I’ve added some test strings to check your function.

 */