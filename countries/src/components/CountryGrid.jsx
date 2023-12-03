import { Link } from "react-router-dom";
import {Component} from 'react';

class CountryGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        const { countries } = this.props;

        if (!countries || !Array.isArray(countries)) {
            console.error("Invalid countries data:");
            return null;
        }
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { countries } = this.props;

        if (!countries) {
            console.error("Countries prop is undefined.");
            return null;
        }

        return (
            <div className="card-display">
                <div className="wrapper-card">
                    {/* eslint-disable-next-line react/prop-types */}
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
}

export default CountryGrid;
