import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home.jsx";
import { fetchCountries, fetchCountry } from "../services/fetchServices.js";
import { CountryDetail } from "./components/CountryDetail.jsx";
import { Nav } from "./components/Nav.jsx";
import { Filter } from "./components/Filter.jsx";
import CountryGrid from "./components/CountryGrid.jsx";
import Search from "./components/Search.jsx";

function App() {
    const [countries, setCountries] = useState(null);
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const fetchCountriesData = async () => {
            try {
                const countriesData = await fetchCountries();

                if (Array.isArray(countriesData)) {
                    setCountries(countriesData);
                } else {
                    console.log("Invalid countries data during fetch:");
                }
            } catch (error) {
                console.log("Error fetching countries data");
            }
        };
        fetchCountriesData();
    }, []);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const countryData = await fetchCountry();

                if (countryData) {
                    setCountry(countryData);
                } else {
                    console.log("Invalid countries data during fetch:");
                }
            } catch (error) {
                console.log("Error fetching countries data");
            }
        };
        fetchCountryData();
    }, []);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const countryData = await fetchCountry();

                if (countryData) {
                    setCountry(countryData);
                } else {
                    console.log("Invalid country data:");
                }
            } catch (error) {
                console.log("Error fetching country data");
                console.log(error);
            }
        };
        fetchCountryData();
    }, []); // Empty dependency array to run only once

    return (
        <Routes>
            <Route 
                path="/" 
                element={<CountryGrid countries={countries} />} />
            <Route
                path="/details/:countryName"
                element={<CountryDetail country={country} />}
            />
        </Routes>
    );
}

export default App;
