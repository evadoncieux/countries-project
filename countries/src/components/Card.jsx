import React from "react";

const Card = () => {
    return (
        <div className="card">
            <div className="flag">
                {" "}
                {/* placeholder for the img from the api */}
            </div>

            <div className="country-infos">
                <h2>Country name</h2>
                <p>
                    <span className="info-title">Population: </span>68,000,000
                </p>
                <p>
                    <span className="info-title">Region: </span>Europe
                </p>
                <p>
                    <span className="info-title">Capital: </span>Paris
                </p>
            </div>
        </div>
    );
};

export { Card };
