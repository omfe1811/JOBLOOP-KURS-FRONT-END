//import
import Content from "./components/content";
import Footer from "./components/footer.jsx";
import Greeting from "./components/Greeting.jsx";
import Header from "./components/header.jsx";
import "./App.css";

function App() {
	const person = { name: "Lars", age: 35, city: "Bergen" };

	const users = [
		{ name: "Lars", age: 35, city: "Bergen" },
		{ name: "rommy", age: 66, city: "oslo" },
		{ name: "olga", age: 27, city: "lublin" },
	];

	const user = {
		id: {
			name: "Lars",
			email: "lars@jobloop.com",
			username: "lakro1",
		},
		adress: {
			street: " gronlandsleirer",
			number: 99,
			city: "Oslo",
			country: "Norway",
		},
	};
	const students = [
		"Lars",
		"Ask",
		"Artur",
		"Emilia",
		"Olga",
		"Elvis",
		"Jon",
		"Rebecca",
		"Brian",
	]; //html code
	return (
		<>
			<Header />
			{users.map((user, index) => (
				<Greeting key={index} {...user} />
			))}
			{students.map((student, index) => (
				<p key={index}>{student}</p>
			))}
			<Greeting props={user} {...person} />
			<Content />

			<Footer />
		</>
	);
}

export default App;
