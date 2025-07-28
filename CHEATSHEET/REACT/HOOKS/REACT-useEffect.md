How to Use useEffect in React
=============================

Import useEffect:
-----------------
import { useEffect } from 'react';


Basic Usage:
------------
useEffect(() => {
  // Code to run after every render
  console.log("Component rendered!");
});

→ When it runs: After every render (initial + updates)


Dependency Array:
-----------------
Control when useEffect runs using the dependency array.

Example – Run only once on mount:
useEffect(() => {
  console.log("Runs once after initial render");
}, []);

Example – Run only when 'count' changes:
useEffect(() => {
  console.log("Runs when 'count' updates");
}, [count]);


Cleanup Function:
-----------------
If the effect needs cleanup (like intervals or event listeners), return a cleanup function.

Example:
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Runs every second");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Cleanup when component unmounts");
  };
}, []);


Common Use Cases:
-----------------

1. Data Fetching:
-----------------
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};


2. WebSocket Subscription (with cleanup):
-----------------------------------------
import React, { useEffect } from 'react';

const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket("wss://example.com/socket");

    socket.onmessage = (event) => {
      console.log("Message received:", event.data);
    };

    return () => {
      socket.close();
      console.log("Socket closed on cleanup");
    };
  }, []);

  return <div>WebSocket connected!</div>;
};


3. Updating Document Title:
---------------------------
import React, { useEffect, useState } from 'react';

const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
};


Summary:
--------
- useEffect handles side effects in React (things outside rendering).
- Add a cleanup function to avoid memory leaks.
- Use dependency arrays to control when the effect runs.
- Typical use cases: fetching data, event listeners, timers, subscriptions, DOM updates.
📘 REACT useEffect CHEAT SHEET (BASICS)
----------------------------------------

✅ What is useEffect?
- A React Hook used to run side effects:
  → Fetch data
  → Set up subscriptions
  → Update DOM (e.g., title)
  → Run code after render

🧠 Think of it as:
- "Run this code when the component renders or updates"

🔹 Import useEffect:

import { useEffect } from 'react';


🔹 1. Run code after every render:

useEffect(() => {
  console.log("Component rendered or updated");
});


🔹 2. Run code only once (on mount):

useEffect(() => {
  console.log("Runs only once when mounted");
}, []); // ← empty dependency array


🔹 3. Run code when specific value changes:

useEffect(() => {
  console.log("Runs when count changes");
}, [count]); // ← count is dependency


🔹 4. Cleanup function (like componentWillUnmount):

useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // Cleanup when component unmounts
  return () => {
    clearInterval(interval);
    console.log("Cleaned up!");
  };
}, []);


🔹 5. Common use case: Fetch data on mount

useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data));
}, []);


🧨 Common Pitfalls:
- Don’t update state inside useEffect without proper dependencies
- Infinite loop = missing or wrong dependency array

✅ Best Practice:
- Always list dependencies in the array
- Use cleanup to avoid memory leaks

----------------------------------------
🔁 useEffect runs AFTER the render phase
🚀 It helps sync your component with the outside world

