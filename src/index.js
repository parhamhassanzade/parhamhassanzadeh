import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const getBasename = () => {
	const publicUrl = process.env.PUBLIC_URL || "";
	const pathname = publicUrl.replace(/^https?:\/\/[^/]+/i, "");
	const normalizedPath = pathname.endsWith("/")
		? pathname.slice(0, -1)
		: pathname;

	return normalizedPath || "/";
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter basename={getBasename()}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
