React Hooks Reference Cheat Sheet
=================================

🧠 useState
-----------
- Adds local state to function components

Syntax:
const [state, setState] = useState(initialValue);

Example:
const [count, setCount] = useState(0);
setCount(count + 1);


🌀 useEffect
------------
- Run side-effects: data fetching, subscriptions, timers, etc.
- Runs after render

Syntax:
useEffect(() => {
  // code
}, [dependencies]);

Examples:
useEffect(() => {
  console.log('Runs once');
}, []);

useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

Cleanup:
useEffect(() => {
  const id = setInterval(() => console.log('Tick'), 1000);
  return () => clearInterval(id);
}, []);


📞 useCallback
---------------
- Memoizes a function to avoid re-creating on every render

Syntax:
const memoizedFn = useCallback(() => {
  // function logic
}, [dependencies]);

Use when passing functions to child components to prevent unnecessary re-renders.


📦 useMemo
----------
- Memoizes a computed value

Syntax:
const memoizedValue = useMemo(() => computeExpensiveValue(x), [x]);

Only re-computes when dependencies change.


📋 useRef
---------
- Holds mutable value that doesn't trigger re-renders
- Useful for DOM references or persisting values across renders

Example:
const inputRef = useRef();

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Focus</button>


⏱ useReducer
-------------
- An alternative to useState for more complex state logic

Syntax:
const [state, dispatch] = useReducer(reducerFn, initialState);

Example:
function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });


📡 useContext
-------------
- Access context value without manually wrapping with Context.Consumer

Syntax:
const value = useContext(MyContext);

Use inside a component wrapped with <MyContext.Provider value={...}>


🧪 useId
--------
- Generates a unique ID for accessibility attributes

Example:
const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} />


🕹 useLayoutEffect
------------------
- Like useEffect, but fires synchronously after DOM mutations
- Use for measuring layout or synchronizing DOM reads/writes

Syntax:
useLayoutEffect(() => {
  // layout measurements
}, []);


🧵 useImperativeHandle
-----------------------
- Customize what a parent component gets when using ref on a child

Used with `forwardRef`.

Example:
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus(),
}));


🔁 useTransition
----------------
- For marking updates as "non-urgent" (deferred UI rendering)

Syntax:
const [isPending, startTransition] = useTransition();

startTransition(() => {
  // non-urgent state updates
});


⚙️ useDeferredValue
-------------------
- Delays updating a value until the browser is less busy

const deferredValue = useDeferredValue(value);


🧼 useDebugValue
----------------
- For debugging custom hooks in React DevTools

useDebugValue(someValue);


✅ Summary
----------
- 🔧 useState: Basic state
- 🔄 useEffect: Side effects
- 📦 useMemo/useCallback: Performance
- 🧱 useRef: DOM refs or mutable values
- 🧠 useReducer: Complex state
- 🧵 useContext: Shared state
- 🛠 Advanced: useLayoutEffect, useImperativeHandle, useTransition, etc.

React Hooks make function components powerful and clean!

