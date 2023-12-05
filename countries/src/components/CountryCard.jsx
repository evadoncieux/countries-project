import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
    return (
        <Link
            key={country.cca3}
            to={`/details/${country.name.common.split(" ").join("-")}`}>
            <div key={country.cca3} className="country-card">
                <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="flag-card"
                />

                <div className="country-info-card">
                    <h3>{country.name.common}</h3>
                    <p>
                        <span className="info-title">Population : </span>
                        {country.population}
                    </p>
                    <p>
                        <span className="info-title">Region : </span>
                        {country.region}
                    </p>
                    <p>
                        <span className="info-title">Capital : </span>
                        {country.capital && country.capital[0]}
                    </p>
                </div>
            </div>
        </Link>
    );
};

CountryCard.propTypes = {
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

export default CountryCard;
