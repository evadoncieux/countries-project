import PropTypes from "prop-types";

const CountryDetail = ({ country }) => {
    const {
        cca3,
        name,
        flags,
        population,
        region,
        capital,
        languages,
        currencies,
        borders,
        subregion,
        tld,
    } = country;
    
    const languageNames = languages
        ? Object.keys(languages).map((language) => language)
        : [];ç

    return (
        <div className="wrapper-detail">
            <div key={cca3} className="country-detail">
                <div className="left">
                    <img
                        src={flags.png}
                        alt={name.common}
                        className="flag-detail"
                    />
                </div>

                <div className="right">
                    <h3>{name.common}</h3>
                    <div className="country-info-detail">
                        <div className="col-left">
                            <p>
                                <span className="info-title">
                                    Native Name:{" "}
                                    <span className="todo">
                                        (à remplacer par le bon){" "}
                                    </span>
                                </span>
                                {name.common}
                            </p>
                            <p>
                                <span className="info-title">Population: </span>
                                {population}
                            </p>
                            <p>
                                <span className="info-title">Region: </span>
                                {region}
                            </p>
                            <p>
                                <span className="info-title">Sub Region: </span>
                                {subregion}
                            </p>
                            <p>
                                <span className="info-title">Capital: </span>
                                {capital && capital[0]}
                            </p>
                        </div>
                        <div className="col-right">
                            <p>
                                <span className="info-title">
                                    Top Level Domain:{" "}
                                </span>
                                {tld}
                            </p>
                            <p>
                                <span className="info-title">Currencies: </span>
                                {currencies &&
                                    Object.values(currencies).map(
                                        (currency, index) => (
                                            <span key={index}>
                                                {currency.name},{" "}
                                            </span>
                                        )
                                    )}
                            </p>

                            <p>
                                <span className="info-title">Languages: </span>
                                {languageNames.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </p>
                        </div>

                        {/* if landlocked = true, search for bordering countries */}
                        <div>
                            <span className="info-title">
                                Border country:{" "}
                                <span className="todo">
                                    (à remplacer par les noms de pays)
                                </span>
                            </span>
                            {borders ? (
                                <ul className="borders-list">
                                    {borders.map((border, index) => (
                                        <li key={index}>{border}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No border country available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CountryDetail.propTypes = {
    country: PropTypes.shape({
        cca3: PropTypes.string,
        name: PropTypes.shape({
            common: PropTypes.string,
            official: PropTypes.string,
            nativeName: PropTypes.shape({
                common: PropTypes.string,
                official: PropTypes.string,
            }),
        }),
        flags: PropTypes.shape({
            png: PropTypes.string,
        }),
        region: PropTypes.string,
        subregion: PropTypes.string,
        population: PropTypes.number,
        capital: PropTypes.objectOf(PropTypes.string),
        tld: PropTypes.arrayOf(PropTypes.string),
        currencies: PropTypes.objectOf(
            PropTypes.shape({
                name: PropTypes.string,
                code: PropTypes.string,
                symbol: PropTypes.string,
            })
        ),
        languages: PropTypes.objectOf(
            PropTypes.shape({
                name: PropTypes.string,
                nativeName: PropTypes.string,
            })
        ),
        borders: PropTypes.arrayOf(PropTypes.string),
    }),
};

export { CountryDetail };
