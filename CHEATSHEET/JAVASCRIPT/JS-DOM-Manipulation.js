// DOM Manipulation in JavaScript
// The DOM (Document Object Model) represents the structure of a web page as a tree structure,
// and JavaScript gives us powerful tools to manipulate this. With DOM manipulation, you can dynamically
// change content, appearance, and behavior of HTML elements.

/* 1. What is the DOM?
   The DOM is a representation of the HTML document as a hierarchy of nodes.
   You can use JavaScript to:
     - Access elements.
     - Modify content or attributes.
     - Listen to events and respond to user actions.
*/


/* 2. How to access elements */

// Select element by ID
let heading = document.getElementById("my-heading");

// Select elements by class
let boxes = document.getElementsByClassName("box");

// Select elements using CSS selectors
let button = document.querySelector(".button");
let allBoxes = document.querySelectorAll(".box");

// Output examples
console.log(heading);      // <h1 id="my-heading">Hello!</h1>
console.log(allBoxes);     // NodeList of all elements with the class "box"


/* 3. Change content and attributes */

let heading2 = document.getElementById("my-heading");

// Change text content
heading2.textContent = "Welcome to the page!";

// Change HTML content
heading2.innerHTML = "<span style='color: red;'>Welcome!</span>";

// Change attributes
let image = document.querySelector("img");
image.setAttribute("src", "new-image-url.jpg");
image.setAttribute("alt", "A new image");


/* 4. Add or remove elements */

let list = document.querySelector("#my-list");

// Add a new list item
let newItem = document.createElement("li");
newItem.textContent = "New item";
list.appendChild(newItem);

// Remove an element
let firstItem = document.querySelector("#my-list li");
list.removeChild(firstItem);


/* 5. Change style */

let box = document.querySelector(".box");

// Change styles directly
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "10px";


/* Summary:
   - Select elements: Use methods like getElementById and querySelector to find elements.
   - Change content: Use textContent, innerHTML, and setAttribute.
   - Add/remove elements: Use createElement, appendChild, and removeChild.
   - Change styles: Use the style object.
*/
