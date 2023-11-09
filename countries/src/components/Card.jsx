import React from "react";

const Card = ({ countries }) => {
    return (
        <div className="grid-wrapper">
        {countries.map((country) => {
                return (
                    <div key={country.cca3} className="country-card">
                        <img
                            src={country.flags.png}
                            alt={country.name.common}
                            className="flag"
                        />

                        <div className="country-info">
                        <h3>{country.name.common}</h3>
                        <p>
                            <span className="info-title">Population: </span>
                            {country.population}
                        </p>
                        <p>
                            <span className="info-title">Region: </span>
                            {country.region}
                        </p>
                        <p>
                            <span className="info-title">Capital: </span>
                            {country.capital && country.capital[0]}
                        </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { Card };
