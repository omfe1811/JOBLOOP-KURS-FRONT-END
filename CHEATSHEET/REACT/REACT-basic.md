📘 BASIC REACT CHEAT SHEET
----------------------------

🔹 1. React Component (Function-based)

import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default MyComponent;


🔹 2. JSX (JavaScript + HTML)

- JSX lets you write HTML inside JavaScript.
- You must return ONE parent element (wrap in <div> or <>)

Example:
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);


🔹 3. Props (Pass data into components)

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Usage:
<Greeting name="Bolga" />


🔹 4. useState Hook (Add state)

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}


🔹 5. useEffect Hook (Run code on render or update)

import { useEffect } from 'react';

useEffect(() => {
  console.log("Component rendered or updated");
}, []); // Empty array = run only once (on mount)


🔹 6. Conditional Rendering

{isLoggedIn ? <Dashboard /> : <Login />}


🔹 7. List Rendering (Looping)

const items = ['a', 'b', 'c'];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


🔹 8. Event Handling

<button onClick={handleClick}>Click me</button>

function handleClick() {
  alert("You clicked me!");
}


🔹 9. Input Handling (Controlled Component)

const [text, setText] = useState('');

<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>


🔹 10. Export/Import Components

// In MyComponent.js
export default MyComponent;

// In App.js
import MyComponent from './MyComponent';


🔹 BONUS: Folder Structure (Simple)

my-app/
├─ src/
│  ├─ components/
│  │   └─ MyComponent.jsx
│  ├─ App.jsx
│  └─ main.jsx
└─ index.html

----------------------------
✅ Start with this cheat sheet and build real components to learn faster.
