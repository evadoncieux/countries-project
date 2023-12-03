import Card from "./CountryGrid.jsx";

function SearchList({ filteredCountries }) {
    const filtered = filteredCountries.map((country) => (
        <Card key={country.cca3} country={country} />
    ));
    return <div>{filtered}</div>;
}

export { SearchList };
