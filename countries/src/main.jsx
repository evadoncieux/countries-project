import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import { CountryDetail } from "./components/CountryDetail.jsx";

const countries = "null";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: `/:countryName`,
                element: <CountryDetail countries={countries} />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
