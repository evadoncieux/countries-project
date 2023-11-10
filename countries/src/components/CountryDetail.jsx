import React from "react";
import { useParams } from "react-router-dom";

const CountryDetail = ({ country }) => {    
    const { countryName } = useParams();

    console.log(country);

    const { languages, currencies, borders } = country;

    if (!country) {
        return <div>Country not found</div>
    }

    const languageNames = languages
        ? Object.keys(languages).map((language) => language)
        : [];

    return (
        <div className="wrapper-detail">
                    <div key={country.cca3} className="country-detail">
                        <div className="left">
                            <img
                                src={country.flags.png}
                                alt={country.name.common}
                                className="flag-detail"
                            />
                        </div>

                        <div className="right">
                            <h3>{country.name.common}</h3>
                            <div className="country-info-detail">
                                <div className="col-left">
                                    <p>
                                        <span className="info-title">
                                            Native Name:{" "}
                                            <span className="todo">
                                                (à remplacer par le bon){" "}
                                            </span>
                                        </span>
                                        {country.name.common}
                                    </p>
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
                                            Sub Region:{" "}
                                        </span>
                                        {country.subregion}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Capital:{" "}
                                        </span>
                                        {country.capital && country.capital[0]}
                                    </p>
                                </div>
                                <div className="col-right">
                                    <p>
                                        <span className="info-title">
                                            Top Level Domain:{" "}
                                        </span>
                                        {country.tld}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Currencies:{" "}
                                        </span>
                                        {country.currencies &&
                                            Object.values(
                                                country.currencies
                                            ).map((currency, index) => (
                                                <span key={index}>
                                                    {currency.name},{" "}
                                                </span>
                                            ))}
                                    </p>

                                    <p>
                                        <span className="info-title">
                                            Languages:{" "}
                                        </span>
                                        {languageNames.map(
                                            (language, index) => (
                                                <li key={index}>{language}</li>
                                            )
                                        )}
                                    </p>
                                </div>
                                <div>
                                    <span className="info-title">
                                        Border country:{" "}
                                        <span className="todo">
                                            (à remplacer par les noms de pays)
                                        </span>
                                    </span>
                                    {country.borders ? (
                                        <ul className="borders-list">
                                            {country.borders.map(
                                                (border, index) => (
                                                    <li key={index}>
                                                        {border}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <p>No border country available</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
        </div>
    );
};

export { CountryDetail };
