import "./App.css";
import { Routes, Route } from "react-router-dom";

import { CountryDetail } from "./components/CountryDetail.jsx";
import { Nav } from "./components/Nav.jsx";
import CountryGrid from "./components/CountryGrid.jsx";
// import { Filter } from "./components/Filter.jsx";
// import Search from "./components/Search.jsx";
import { useState } from "react";

function App() {
    const [data, setData] = useState([]);

    return (
        <div>
            <div>
                <Nav />
                {/* <Filter countries={data} />
                <Search countries={data} /> */}
            </div>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<CountryGrid countries={data} />}
                    />
                    <Route
                        path="/details/:countryCode"
                        element={<CountryDetail />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
