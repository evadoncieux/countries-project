import Card from "./CountryGrid.jsx";
import { PropTypes } from 'prop-types';

function SearchList({ filteredCountries }) {
    const filtered = filteredCountries.map((country) => (
        <Card key={country.cca3} country={country} />
    ));
    return <div>{filtered}</div>;
}

SearchList.propTypes = {
    filteredCountries : PropTypes.array,
}

export { SearchList };
