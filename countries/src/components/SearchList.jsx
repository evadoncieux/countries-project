import React from "react";
import Card from "./Card.jsx";

function SearchList({ filteredCountries }) {
    const filtered = filteredCountries.map((country) => (
        <Card key={country.cca3} country={country} />
    ));
    return <div>{filtered}</div>;
}

export { SearchList };
