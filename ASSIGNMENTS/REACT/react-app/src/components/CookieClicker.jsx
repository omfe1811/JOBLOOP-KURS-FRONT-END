import { useState } from "react";
export default function Counter() {
	const initialValue = 0;
	const [count, setCount] = useState(initialValue);
	const handleClick = () => {
		setCount((prevCount) => prevCount + 1);
	};
	return (
		<>
			<h1>Click Me!</h1>
			<div className='p-6 font-bold text-white bg-green-500'>
				Tailwind is working!
			</div>
			<button onClick={handleClick} className='bg-red-900 border-solid'>
				<img
					src='cookie.png'
					alt='cartoon clickable cookie'
					className='object-contain w-24 h-24'
				/>
			</button>
			<p>You've clicked the cookie {count} times</p>
		</>
	);
}
