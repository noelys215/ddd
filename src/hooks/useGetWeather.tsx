import { useState, useEffect } from 'react';

interface WeatherData {
	main: string;
	description: string;
}

export const useGetWeather = () => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Check if weather data is already in sessionStorage
		const cachedWeather = sessionStorage.getItem('weatherData');
		if (cachedWeather) {
			setWeather(JSON.parse(cachedWeather));
			return;
		}

		// Function to fetch weather data
		const fetchWeather = async (lat: number, lon: number) => {
			try {
				const apiKey = import.meta.env.VITE_WEATHER_KEY;
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
				);
				const data = await response.json();

				// Extract weather information
				const { main, description } = data.weather[0];

				// Save to sessionStorage and state
				const weatherData = { main, description };
				sessionStorage.setItem('weatherData', JSON.stringify(weatherData));
				setWeather(weatherData);
			} catch (error) {
				console.error('Error fetching weather:', error);
				setError('Unable to fetch weather data');
			}
		};

		// Get the user's location
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
	}, []); // Runs only once when the component mounts

	return { weather, error };
};
