import React, { useState } from 'react';


const Search = () => {
    const [city, setCity] = useState('');
    
    const handleInputChange = (event) => {
        setCity(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle search logic here, e.g., fetch weather data for the city
        console.log(`Searching for weather in ${city}`);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name"
        />
        <button type="submit">Submit</button>
        </form>
    );
}

export default Search;