export default function Greeting(age, name, city) {
	/* console.log(props); */
	/*  const person={name:"Lars", age:35, city:"Bergen"};
   const {name, age, city}=person; */

	return (
		<div style={{ border: "solid white" }}>
			<h3> Velkommen</h3>
			<p>Du heter {name}</p>
			<p>Du er {age} år</p>
			<p>og bor i {city}</p>
		</div>
	);
}
