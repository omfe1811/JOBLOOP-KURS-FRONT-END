import "./App.css";
import "animate.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Card from "./components/Card";

function App() {
	const names = ["Lars", "elc", "Ask"];
	const [en, to, tre] = names;
	const person = {
		navn: "Frode",
		age: 45,
	};
	const { navn, age } = person;
	return (
		<>
			{age}
			<h1 class='animate__animated animate__bounce'>Valkommen!</h1>
			<Card />
		</>
	);
}

export default App;
