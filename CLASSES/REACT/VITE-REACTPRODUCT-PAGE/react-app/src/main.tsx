import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{
				path: "products",
				element: <ProductPage />,
				children: [
					{
						path: ":productId",
						element: <ProductDetails />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: (
			<>
				<h1> 404 Not found</h1>
			</>
		),
	},
]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
