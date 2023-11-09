import "./App.css";
import React, { useState, useEffect } from 'react';
import { Nav } from "./components/Nav.jsx";
import { Card } from "./components/Card.jsx";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  
  
    return (
        <div>
            <Nav />
            <Card />

        </div>
    );
}

export default App;
