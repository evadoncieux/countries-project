import React, { Component } from "react";
import { SearchList } from "./SearchList.jsx";
import Scroll from "./Scroll.jsx";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
        };
    }

    searchList = () => {
        const { searchField } = this.state;

        return (
            <Scroll>
                <SearchList filteredCountries={this.filterCountries()} />
            </Scroll>
        );
    }

    filterCountries = () => {
        const { searchField } = this.state;
        const { countries } = this.props;

        if (!countries || !Array.isArray(countries)) {
            console.error("Invalid countries data:");
            return [];
        }

        return countries.filter((country) =>
            country.name.common
                .toLowerCase()
                .includes(searchField.toLowerCase())
        );
    }

    render() {
        const { searchField } = this.state;

        const handleChange = (e) => {
            this.setState({ searchField: e.target.value });
        };

        return (
            <div>
                <div>
                    <h2>Search</h2>
                </div>
                <div>
                    <input
                        type="search"
                        placeholder="Search Countries"
                        value={searchField}
                        onChange={handleChange}
                    />
                </div>
                {this.searchList()} {/* Call the function using this */}
            </div>
        );
    }
}

export default Search;
