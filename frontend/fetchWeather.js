require('dotenv').config(); // Load .env file

const fetch = require('node-fetch');

const apiKey = process.env.API_KEY; // Access the API key
const url = `https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=${apiKey}`;
const options = { method: 'GET', headers: { accept: 'application/json' } };

const fetchWeatherData = async () => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error fetching weather data: ${error.message}`);
    }
};

fetchWeatherData();
