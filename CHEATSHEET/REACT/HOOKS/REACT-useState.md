What is state in React?
State is a way to keep track of data that changes over time in a React component.
It allows components to respond to user actions, network requests, or other events.
State is local to each component, and updating the state causes the component to re-render.

Why and when is state used?
Why: State gives you the ability to build dynamic and interactive user interfaces.
When: Use state when data in a component can change, for example:
- When a user clicks a button
- When a text input is updated
- When you fetch or manipulate data from an API

What is useState?
useState is a built-in React hook used to add state to functional components.
It returns:
- A state variable holding the current value
- A function used to update that state

Basic examples using useState:

1. Basic Counter:
Create state to hold a counter value and update it with a button.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state with 0

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
React useState Cheat Sheet
==========================

🔧 What is useState?
--------------------
- useState is a React Hook that lets you add local state to functional components.
- It returns:
  1. A state variable (current value)
  2. A function to update that value

🔍 Syntax:
----------
const [state, setState] = useState(initialValue);


📌 Basic Example – Counter:
---------------------------
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};


📥 Example – Handling Text Input:
---------------------------------
import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
};


🔁 Example – Toggle Boolean:
----------------------------
import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};


🧠 Updating State Based on Previous Value:
------------------------------------------
setCount(prevCount => prevCount + 1);


🧱 useState with Objects:
-------------------------
const [user, setUser] = useState({ name: 'Ola', age: 25 });

To update:
setUser({ ...user, age: user.age + 1 });


📚 useState with Arrays:
------------------------
const [items, setItems] = useState([]);

To add an item:
setItems([...items, newItem]);

To remove an item:
setItems(items.filter(item => item.id !== id));


🧼 Best Practices:
------------------
- DO NOT modify state directly (e.g. user.age += 1 ❌)
- ALWAYS use the updater function (setState) to change state
- For derived state, use useMemo or compute inside render
- For complex or nested state, consider splitting into smaller pieces


🧵 When to Use useState:
-------------------------
- When the component needs to track values that change over time
- When user interaction changes something (input, toggle, counter)
- For simple, local, component-specific data

If state gets too complex or shared between components, consider:
→ useReducer
→ useContext
→ Global state libraries like Redux, Zustand, etc.


✅ Summary:
-----------
- useState is simple and powerful for managing local state
- Keep state immutable (never mutate directly)
- Keep state minimal and focused
- You can use multiple useState calls in one component


