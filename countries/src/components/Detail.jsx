import React from "react";

const Detail = ({ countries }) => {
    return (
        <div className="detail-wrapper">
        {countries.map((country) => {
                return (
                    <div key={country.cca3} className="country-Detail">
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

export { Detail };
