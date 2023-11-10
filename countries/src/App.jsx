import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home.jsx";
import fetchCountries from "../services/fetchServices.js";
import { CountryDetail } from "./components/CountryDetail.jsx";
import { Nav } from "./components/Nav.jsx";
import { Filter } from "./components/Filter.jsx";
import CountryGrid from "./components/CountryGrid.jsx";
import Search from "./components/Search.jsx";

function App() {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countriesData = await fetchCountries();

                if (Array.isArray(countriesData)) {
                    setCountries(countriesData);
                    setLoading(false);
                } else {
                    console.error("Invalid countries data:", countriesData);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
            <Routes>
                <Route path='/' element={<CountryGrid countries={countries} />} />
                <Route
                    path="/:countryName"
                    render={(props) => <CountryDetail {...props} />}
                />
            </Routes>
    );
}

export default App;
