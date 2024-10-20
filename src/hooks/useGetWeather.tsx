import { useState, useEffect } from 'react';

interface WeatherData {
	main: string;
	description: string;
}

export const useGetWeather = () => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Check if weather data is already cached in localStorage
		const cachedWeather = localStorage.getItem('weatherData');
		if (cachedWeather) {
			setWeather(JSON.parse(cachedWeather));
			return;
		}

		// Function to get the weather based on lat/lon
		const fetchWeather = async (lat: number, lon: number) => {
			try {
				const apiKey = import.meta.env.VITE_WEATHER_KEY;
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
				);
				const data = await response.json();

				// Extract main and description from the weather array
				const { main, description } = data.weather[0];

				// Cache the result in localStorage
				const weatherData = { main, description };
				localStorage.setItem('weatherData', JSON.stringify(weatherData));

				// Update the state with the new data
				setWeather(weatherData);
			} catch (error) {
				console.error('Error fetching weather:', error);
				setError('Unable to fetch weather data');
			}
		};

		// Function to get the user's geolocation
		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						fetchWeather(latitude, longitude);
					},
					(error) => {
						console.error('Error getting location:', error);
						setError('Unable to retrieve location');
					}
				);
			} else {
				setError('Geolocation is not supported by this browser');
			}
		};

		getLocation();
	}, []); // Empty dependency array ensures the effect only runs once

	return { weather, error };
};
