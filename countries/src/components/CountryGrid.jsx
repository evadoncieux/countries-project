import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const CountryGrid = ({countries}) => {

        return (
            <div className="card-display">
                <div className="wrapper-card">
                    {countries.map((country) => (
                        <Link
                            key={country.cca3}
                            to={`/details/${country.name.common.split(' ').join('-')}`}>
                            <div key={country.cca3} className="country-card">
                                <img
                                    src={country.flags.png}
                                    alt={country.name.common}
                                    className="flag-card"
                                />

                                <div className="country-info-card">
                                    <h3>{country.name.common}</h3>
                                    <p>
                                        <span className="info-title">
                                            Population:{" "}
                                        </span>
                                        {country.population}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Region:{" "}
                                        </span>
                                        {country.region}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Capital:{" "}
                                        </span>
                                        {country.capital && country.capital[0]}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }


CountryGrid.propTypes = {
    countries : PropTypes.arrayOf(
        PropTypes.shape({
            cca3: PropTypes.string,
            name: PropTypes.shape({
                common: PropTypes.string,
            }),
            flags: PropTypes.shape({
                png: PropTypes.string,
            }),
            population: PropTypes.int,
            region: PropTypes.string,
            capital: PropTypes.arrayOf(PropTypes.string),
    })
)}

export default CountryGrid;
