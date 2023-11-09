import "./App.css";
import React, { useState, useEffect } from "react";
// import fetchCountries from "../services/fetchServices.js";
import { Nav } from "./components/Nav.jsx";
import { Card } from "./components/Card.jsx";

function App() {
  const apiUrl = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error fetching countries:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countriesData = await fetchCountries();
                setCountries(countriesData);
                console.log(countriesData);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Nav />
            <Card countries={countries} />
        </div>
    );
}

export default App;
