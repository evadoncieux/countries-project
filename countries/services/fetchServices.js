import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const FetchData = () => {
  const [ data, setData ] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => setData(response.data))
}, [])
}

export default FetchData;
