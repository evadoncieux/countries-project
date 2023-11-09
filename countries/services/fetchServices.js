const apiUrl = 'https://restcountries.com/v3.1/all';

const fetchCountries = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error; 
  }
};

export default fetchCountries;
