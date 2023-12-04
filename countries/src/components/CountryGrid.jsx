import axios from "axios";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";

const CountryGrid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className="card-display">
            {data

                // .filter((country) =>
                //     country.continents[0].includes(selectedContinent)
                // )
                // .filter((country) =>
                //     country.translations.fra.common
                //         .toLowerCase()
                //         .includes(search.toLowerCase())
                // )
                .map((country, index) => (
                    <CountryCard key={index} country={country} />
                ))}
        </div>
    );
};

CountryGrid.propTypes = {
    country: PropTypes.shape({
        cca3: PropTypes.string,
        name: PropTypes.shape({
            common: PropTypes.string,
        }),
        flags: PropTypes.shape({
            png: PropTypes.string,
        }),
        population: PropTypes.number,
        region: PropTypes.string,
        capital: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default CountryGrid;
