/******************************************************************************
!READ THE ASSIGNMENT TEXT CAREFULLY!
Use a regular for loop to iterate through the people array and perform the following:

If the object's name value is "Otto", none of the changes below should be applied to that object (hint: use the continue keyword).

Add a new key to each person object in the array called "city" and set its value to a random city from the cities array.

Add a new key to each person object called "title" and set it to "Mr." for males and "Ms." for females.

Increase the age by 2.

Add "coding" to the beginning of the hobbies array in each object.

PS: Use only one loop to perform all the above steps.

Use console.log(people) after the loop to check that the changes are correct.

Use your loop to calculate the combined age of all the person objects and store it in a variable called combinedAge.

Then, after the loop, use the combined age to calculate the average age of all, and store it in a variable called averageAge.

Make the calculations AFTER adding 2 years to the age, and remember, skip Otto!

******************************************************************************/

/* Use a regular for loop to iterate through the people array and perform the following:

If the object's name value is "Otto", none of the changes below should be applied to that object (hint: use the continue keyword).

Add a new key to each person object in the array called "city" and set its value to a random city from the cities array.

Add a new key to each person object called "title" and set it to "Mr." for males and "Ms." for females.

Increase the age by 2.

Add "coding" to the beginning of the hobbies array in each object.

Note: Use only one loop to perform all the steps above.

Use console.log(people) after the loop to verify that the changes are correct.

Use your loop to calculate the combined age of all the person objects and store it in a variable called combinedAge.

Then, after the loop, use the combined age to calculate the average age of all, and store it in a variable called averageAge.

Make the calculations after you add 2 years to the age, and remember to skip Otto! */

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
{
name: "Thomas",
male: true,
age: 23,
hobbies: ["cycling", "football", "pool"]
},
{
name: "Susan",
male: false,
age: 26,
hobbies: ["jogging", "travelling", "dancing"]
},
{
name: "Monica",
male: false,
age: 21,
hobbies: ["skateboarding", "guitar", "concerts"]
},
{
name: "Avery",
male: true,
age: 28,
hobbies: ["writing", "games", "memes"]
},
{
name: "Phillip",
male: true,
age: 24,
hobbies: ["boxing", "wrestling", "mma"]
},
{
name: "Otto",
male: true,
age: 36,
hobbies: ["movies", "cinema", "music"]
},
{
name: "Annabelle",
male: false,
age: 30,
hobbies: ["makeup", "fashion", "shopping"]
},
{
name: "Cathy",
male: false,
age: 18,
hobbies: ["design", "drawing", "css"]
}
];
let combinedAge = 0;

// Write code for task 1 here
const randomCity = Math.ceil(Math.random()*cities.length);
let averageAge = 0;
// Add your logic here for other operations on people[i]
for (let i = 0; i < people.length; i++) {
if (people[i].name === "Otto") {
continue;
}else{
people[i].city = cities[randomCity];
people[i].title = people[i].male ? "Mr." : "Ms.";
people[i].age += 2;
people[i].hobbies.unshift("coding");
}
}

console.log(people);

// After the loop, calculate the combined age and average age
for (let i = 0; i < people.length; i++) {
if (people[i].name !== "Otto") {
combinedAge += people[i].age;
}
}

averageAge = combinedAge / (people.length - 1);
console.log("Combined Age: ", combinedAge);
console.log("Average Age: ", averageAge);

/* ******************************************************************************/ 

/* Create the following function:

The function should take a number as a parameter.

The function should return an array of random numbers between 1 and 6.
The length of the array is determined by the number passed to the function as a parameter
(think of it as the number of dice rolls).

Examples:
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

Add a second parameter to the function that determines how many sides the dice should have.
diceRoller(5, 20) should return an array with 5 random numbers from 1-20. */

/******************************************************************************/
// Task 2: Create a function that returns random dice rolls
function diceRoller(numberOfRolls, sides = 6) {
    const rolls = [];
    
    for (let i = 0; i < numberOfRolls; i++) {
      // Generate a random number between 1 and the number of sides
      rolls.push(Math.floor(Math.random() * sides) + 1);
    }
    
    return rolls;
  }
  
  // Test the function
  console.log(diceRoller(4)); // Example: [4, 1, 2, 6]
  console.log(diceRoller(6)); // Example: [5, 5, 6, 2, 3, 4]
  console.log(diceRoller(5, 20)); // Example: [7, 15, 2, 10, 18]
/*   Explanation:
The function diceRoller takes two parameters:

numberOfRolls: The number of dice rolls (how many random numbers you want in the array).

sides: The number of sides on the dice, which defaults to 6 if not specified.

Inside the function, a loop is used to generate numberOfRolls random numbers between 1 and sides (inclusive). This is done using Math.random() and Math.floor().

The result is returned as an array of random dice rolls. You can test the function with different numbers of rolls and sides as shown in the example. */