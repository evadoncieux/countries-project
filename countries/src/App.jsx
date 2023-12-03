import "./App.css";
import {Routes, Route, useParams, json} from "react-router-dom";
import {fetchCountries, fetchCountry} from "../services/fetchServices.js";

import {CountryDetail} from "./components/CountryDetail.jsx";
import {Nav} from "./components/Nav.jsx";
import {Filter} from "./components/Filter.jsx";
import CountryGrid from "./components/CountryGrid.jsx";
import Search from "./components/Search.jsx";
import {useEffect, useState} from 'react';

function App() {
	const [countries, setCountries] = useState(null);
	const {countryName} = useParams();

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
		fetchCountriesData().then(r => json(r));
	}, []);

	const country = fetchCountry(countryName);

	return (
		<div>
			<div>
				<Nav/>
				{/*<Filter countries={countries}/>*/}
				{/*<Search countries={countries}/>*/}
			</div>
			<div>


				<Routes>
					<Route
						path="/"
						element={<CountryGrid countries={countries}/>}/>
					<Route
						path="/details/:countryName"
						element={<CountryDetail country={country}/>}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
