import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { CountryDetail } from "./components/CountryDetail.jsx";
import { Nav } from "./components/Nav.jsx";
import { Filter } from "./components/Filter.jsx";
import CountryGrid from "./components/CountryGrid.jsx";
import Search from "./components/Search.jsx";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div>
            <div>
                <Nav />
                <Filter countries={data} />
                <Search countries={data} />
            </div>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<CountryGrid countries={data} />}
                    />
                    <Route
                        path="/details/:countryName"
                        element={<CountryDetail country={data} />}
                    />
                </Routes>
            </div>
        </div>

        
    );
}

export default App;
