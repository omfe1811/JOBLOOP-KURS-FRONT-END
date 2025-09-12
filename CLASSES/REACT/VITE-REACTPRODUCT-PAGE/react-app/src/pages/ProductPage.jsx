import { Link, Outlet } from "react-router-dom";

export default function ProductPage() {
	return (
		<>
			<h3>See products</h3>
			<Link to='/products/1'>Product 1 </Link>
			<Link to='/products/2'>Product 2 </Link>
			<Link to='/products/3'>Product 3 </Link>
			<Link to='/products/4'>Product 4 </Link>
			<Outlet />
		</>
	);
}
