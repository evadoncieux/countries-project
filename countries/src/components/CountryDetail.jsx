import React from "react";
import { useParams } from "react-router-dom";

const CountryDetail = (x) => {    
    const { countryName } = useParams();

    console.log(x.country);

    if (!x.country) {
        return <div>Country not found</div>
    }
    
    console.log(x.country);

    const { languages, currencies, borders } = x.country;
    const languageNames = languages
        ? Object.keys(languages).map((language) => language)
        : [];

    return (
        <div className="wrapper-detail">
                    <div key={x.country.cca3} className="country-detail">
                        <div className="left">
                            <img
                                src={x.country.flags.png}
                                alt={x.country.name.common}
                                className="flag-detail"
                            />
                        </div>

                        <div className="right">
                            <h3>{x.country.name.common}</h3>
                            <div className="country-info-detail">
                                <div className="col-left">
                                    <p>
                                        <span className="info-title">
                                            Native Name:{" "}
                                            <span className="todo">
                                                (à remplacer par le bon){" "}
                                            </span>
                                        </span>
                                        {x.country.name.common}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Population:{" "}
                                        </span>
                                        {x.country.population}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Region:{" "}
                                        </span>
                                        {x.country.region}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Sub Region:{" "}
                                        </span>
                                        {x.country.subregion}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Capital:{" "}
                                        </span>
                                        {x.country.capital && x.country.capital[0]}
                                    </p>
                                </div>
                                <div className="col-right">
                                    <p>
                                        <span className="info-title">
                                            Top Level Domain:{" "}
                                        </span>
                                        {x.country.tld}
                                    </p>
                                    <p>
                                        <span className="info-title">
                                            Currencies:{" "}
                                        </span>
                                        {x.country.currencies &&
                                            Object.values(
                                                x.country.currencies
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
                                    {x.country.borders ? (
                                        <ul className="borders-list">
                                            {x.country.borders.map(
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
