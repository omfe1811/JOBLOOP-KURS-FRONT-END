=========================
REACT ASSIGNMENT 2
useState() and useEffect()
=========================

PART 1: CookieClicker Component
--------------------------------
Goal:
- Create a button (cookie) that gives 1 point per click.
- Use useState to track score.
- Display current score on screen.

Notes:
- Image file (cookie.png) must be in public/ folder.
- On click, increment score by 1.

--------------------------------
PART 2: CatFacts Component
--------------------------
Goal:
- Fetch and display random cat facts from API.
- API: https://catfact.ninja/facts?limit=5

Functionality:
- Use useEffect to fetch data on mount.
- Manage three states using useState:
  - loading: show "Loading..." while fetching.
  - error: show error message if fetch fails.
  - facts: array of cat facts to display.
- Display facts with .map().

--------------------------------
PART 3: Users Component
------------------------
Goal:
- Show list of users from mockData.
- mockData (do NOT modify directly):
  [
    { username: 'Ola Normann', email: 'ola.normann@norge.no' },
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' }
  ]

Functionality:
- Display users list.
- Create two inputs: username and email.
- Add a button that adds a new user to the list.
- Manage users list with useState.
- After adding, new user appears in the list.

====================================
CHEATSHEETS FOR ASSIGNMENT TOPICS
====================================

1. useState Basics
------------------
- Used to add state to functional components.
- Returns a state variable and a setter function.
- Updating state causes re-render.
- State updates are asynchronous.
- Always update state immutably.

Placeholder snippet:
const [state, setState] = useState(initialValue);
setState(newValue);

------------------------------------------------
2. useEffect Basics
-------------------
- Runs side effects after render.
- Accepts a function and dependency array.
- Runs after first render and when dependencies change.
- Cleanup function can be returned to clean resources.
- Dependency array controls when effect runs:
  [] - runs once on mount
  [var] - runs when var changes
  no array - runs after every render

Placeholder snippet:
useEffect(() => {
  // side effect code

  return () => {
    // cleanup code
  };
}, [dependencies]);

------------------------------------------------
3. Fetching Data with useEffect
-------------------------------
- Use useEffect to fetch data on component mount.
- Set loading state to true before fetch.
- On success, save data to state and set loading false.
- On failure, set error state.
- Show loading or error messages conditionally.

Placeholder snippet:
useEffect(() => {
  // setLoading(true)
  // fetch data
  // setData(response)
  // setLoading(false)
  // handle errors
}, []);

------------------------------------------------
4. Rendering Lists with .map()
------------------------------
- Use array.map() to render arrays in JSX.
- Each child in a list needs a unique key prop.
- Return JSX elements inside map callback.

Placeholder snippet:
data.map(item => (
  <Element key={item.id}>{item.property}</Element>
));

------------------------------------------------
5. Handling Form Inputs
-----------------------
- Use controlled components by syncing input value with state.
- Update state on input change event.
- Handle form submit or button click to process inputs.

Placeholder snippet:
const [input, setInput] = useState('');
<input value={input} onChange={(e) => setInput(e.target.value)} />

------------------------------------------------
6. Updating Arrays in State
---------------------------
- Never mutate state arrays directly.
- Create new array with spread operator or array methods.
- For adding: setArray([...array, newItem])
- For removing: setArray(array.filter(item => condition))
- For updating: setArray(array.map(item => item.id === id ? updatedItem : item))

Placeholder snippet:
setArray(prevArray => [...prevArray, newItem]);

------------------------------------------------
7. Conditional Rendering
------------------------
- Render different UI based on state conditions.
- Use ternary or && operators inside JSX.

Placeholder snippet:
{loading ? <LoadingComponent /> : <DataComponent />}
