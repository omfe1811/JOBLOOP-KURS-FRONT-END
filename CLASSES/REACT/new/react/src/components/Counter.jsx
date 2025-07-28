import { useState, useEffect } from "react";

export default function Counter() {
	const initialValue = 0;
	const [count, setCount] = useState(initialValue);
	const [width, setWidth] = useState(window.innerWidth);
	console.log(width);

	//efct for handling changes in window width.
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	//change title on count
	useEffect(() => {
		console.log("ran on count");
		document.title = `Du har klikket ${count} ganger `;
	}, [count]);
	//code runs when useEffect is triggered

	//function to handle +
	const handleIncrease = () => {
		setCount((prevCount) => prevCount + 1);
	};
	console.log(count);
	return (
		<>
			<h3>Window width is: {width}</h3>
			<p>The count is: {count}</p>

			<button onClick={handleIncrease}>+</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
			<button onClick={() => setCount(initialValue)}>Reset</button>
		</>
	);
}
2;
