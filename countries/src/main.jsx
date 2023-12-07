import "./App.css";
import App from "./App.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page.jsx";
import { CountryDetail } from "./components/CountryDetail.jsx";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";

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
    // <React.StrictMode>
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    // </React.StrictMode>
);
