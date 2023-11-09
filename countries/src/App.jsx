import "./App.css";
import React, { useState, useEffect } from "react";
import fetchCountries from "../services/fetchServices.js";
import { Nav } from "./components/Nav.jsx";
import { Card } from "./components/Card.jsx";
import { Detail } from "./components/Detail.jsx";

function App() {
  const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countriesData = await fetchCountries();
                setCountries(countriesData);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Nav />
            {/* <Card countries={countries} /> */}
            <Detail countries={countries} />
        </div>
    );
}

export default App;
