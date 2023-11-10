import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        const { countries } = this.props;

        if (!countries || !Array.isArray(countries)) {
            console.error("Invalid countries data:");
            return null;
        }
    }

    openDetails(countryName) {
        window.location = `https://restcountries.com/v3.1/name/${countryName}`
        console.log(`Open details for ${countryName}`);
    }

    render() {
        const { countries } = this.props;

        if (!countries) {
            console.error("Countries prop is undefined.");
            return null;
        }

        return (
            <div className="card-display">
                <div className="wrapper-card">
                    {countries.map((country) => (
                        <div
                            key={country.cca3}
                            className="country-card"
                            onClick={() => this.openDetails(country.name.common)}
                        >
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
                                    <span className="info-title">Region: </span>
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
                    ))}
                </div>
            </div>
        );
    }
}

export default Card;
