import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/common/Navbar';
import weather from '../assets/weather/weather.png';
import cloud from '../assets/weather/cloud.png';

const WeatherPage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async (latitude, longitude) => {
        const apiKey = 'b2b704457bae407696c110611243112'; // Your API key
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

        try {
            const response = await axios.get(url);
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('Could not fetch weather data. Please try again.');
            setWeatherData(null);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(latitude, longitude);
                },
                () => {
                    setError('Unable to retrieve your location.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 bg-gray-300">
                <h1 className="text-4xl font-bold text-center mb-8">Weather App</h1>

                <div className="flex flex-col md:flex-row items-center bg-white text-gray-900 rounded-lg shadow-lg p-6">
                    {/* Weather Icons */}
                    <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-6">
                        <img src={cloud} alt="Cloudy" className="w-32 h-32 object-contain mb-4" />
                        <img src={weather} alt="Weather" className="w-32 h-32 object-contain " />
                    </div>

                    {/* Weather Details */}
                    <div className="flex-grow">
                        {error && <p className="text-red-600 font-medium">{error}</p>}
                        {weatherData && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">
                                    {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
                                </h2>
                                <p className="text-lg">
                                    <strong>Timezone:</strong> {weatherData.location.tz_id}
                                </p>
                                <p className="text-lg">
                                    <strong>Temperature:</strong> {weatherData.current.temp_c} °C
                                </p>
                                <p className="text-lg">
                                    <strong>Condition:</strong> {weatherData.current.condition.text}
                                </p>
                                <p className="text-lg">
                                    <strong>Humidity:</strong> {weatherData.current.humidity} %
                                </p>
                                <p className="text-lg">
                                    <strong>Wind Speed:</strong> {weatherData.current.wind_kph} kph
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherPage;
