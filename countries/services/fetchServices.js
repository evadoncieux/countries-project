import { useParams } from "react-router-dom";


const allApiUrl = 'https://restcountries.com/v3.1/all';
const oneApiUrl = (name) => `https://restcountries.com/v3.1/name/${name}`;

const fetchCountries = async () => {
  try {
    const response = await fetch(allApiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching countries in the fetchServices');
    throw error;
  }
};

const fetchCountry = async (name) => {
  const url = oneApiUrl(name);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error fetching country in the fetchServices');
    throw error;
  }
}


export { fetchCountries, fetchCountry };
