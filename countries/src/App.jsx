import "./App.css";
import React, { useState, useEffect } from "react";
import fetchCountries from "../services/fetchServices.js";
import { Nav } from "./components/Nav.jsx";
import { Detail } from "./components/Detail.jsx";
import { Filter } from "./components/Filter.jsx";
import Card from "./components/Card.jsx";
import Search from "./components/Search.jsx";

function App() {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countriesData = await fetchCountries();
                console.log("Fetched countries data:", countriesData);
    
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
        <div>
            <Nav />
            <div className="filter-search">
                <Filter countries={countries} />
                <Search countries={countries} />
            </div>
            {loading ? (
                <div>Loading... ^^</div>
            ) : countries ? (
                <Card countries={countries} />
            ) : (
                <div>No countries data available.</div>
            )}
            {/* <Detail countries={countries} /> */}
        </div>
    );
}

export default App;
