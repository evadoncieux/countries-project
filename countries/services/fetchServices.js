// noinspection UnnecessaryLocalVariableJS

import { useParams } from "react-router-dom";
import {useState, useEffect, Component} from "react";

class FetchData extends Component {
  constructor() {
    super();
  }

  fetchCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching countries in the fetchServices');
      throw error;
    }
  };

  fetchCountry = (name) => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
      const fetchCountryData = async () => {
        try {
          const response = await fetch(
              `https://restcountries.com/v3.1/name/${name}`
          );
          const data = await response.json();
          setCountry(data);
        } catch (error) {
          console.error("Error fetching country data:", error);
        }
      };

      fetchCountryData();
    }, [name]);

    return country;
  };
}



// const fetchCountry = async () => {
//   const {name} = useParams();
//   const url = `https://restcountries.com/v3.1/name/${name}`;
// 
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log('error here ?');
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log('Error fetching country in the fetchServices');
//     throw error;
//   }
// }

export { fetchCountries, fetchCountry };
