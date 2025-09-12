import { useParams } from "react-router-dom";

export default function ProduxtDetails() {
	const { productId } = useParams();
	return (
		<>
			<h3>Details</h3>
			<p> Details abou the product</p>
		</>
	);
}
