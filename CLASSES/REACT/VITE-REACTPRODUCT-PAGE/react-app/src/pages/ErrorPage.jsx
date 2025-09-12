import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<>
			<h3>Something went wrong</h3>
			<p>{error.statusText}</p>
			<p>{error.message}</p>
			<p>{JSON.stringify(error)}</p>
		</>
	);
}
