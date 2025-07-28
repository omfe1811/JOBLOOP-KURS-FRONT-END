What is complex state in React?

State is considered complex when it manages more than just primitive values (like numbers or strings) — for example: arrays, objects, or a combination of both.

Complex state requires careful handling to ensure updates are **immutable** (i.e., the original is not changed; instead, a new copy is created).

---

Updating Objects in State

When using objects in state, you must create a copy of the object before making changes.

Example:

```jsx
import React, { useState } from 'react';

const UpdateObject = () => {
  const [user, setUser] = useState({
    name: 'Ola',
    age: 25,
  });

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 }); // Copy existing state and update age
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
};

export default UpdateObject;
