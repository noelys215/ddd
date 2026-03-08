import { useState, useEffect } from 'react';

interface WeatherData {
	main: string;
	description: string;
}

const parseCachedWeather = (raw: string): WeatherData | null => {
	try {
		const parsed = JSON.parse(raw) as Partial<WeatherData>;
		if (!parsed.main || !parsed.description) return null;
		return { main: parsed.main, description: parsed.description };
	} catch {
		return null;
	}
};

export const useGetWeather = () => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Check if weather data is already in sessionStorage
		const cachedWeather = sessionStorage.getItem('weatherData');
		if (cachedWeather) {
			const parsed = parseCachedWeather(cachedWeather);
			if (parsed) {
				setWeather(parsed);
				return;
			}
			sessionStorage.removeItem('weatherData');
		}

		// Function to fetch weather data
		const fetchWeather = async (lat: number, lon: number) => {
			try {
				const apiKey = import.meta.env.VITE_WEATHER_KEY?.trim();
				if (!apiKey) {
					setError('Missing weather API key');
					return;
				}

				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
				);
				if (!response.ok) {
					throw new Error(`OpenWeather request failed with status ${response.status}`);
				}

				const data = await response.json();
				if (!data?.weather?.[0]?.main || !data?.weather?.[0]?.description) {
					throw new Error('OpenWeather response missing expected weather fields');
				}

				// Save to sessionStorage and state
				const weatherData: WeatherData = {
					main: data.weather[0].main,
					description: data.weather[0].description,
				};
				sessionStorage.setItem('weatherData', JSON.stringify(weatherData));
				setWeather(weatherData);
				setError(null);
			} catch (fetchError) {
				console.error('Error fetching weather:', fetchError);
				setError('Unable to fetch weather data');
			}
		};

		// Get the user's location
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					fetchWeather(latitude, longitude);
				},
				(geoError) => {
					console.error('Error getting location:', geoError);
					setError('Unable to retrieve location');
				}
			);
		} else {
			setError('Geolocation is not supported by this browser');
		}
	}, []); // Runs only once when the component mounts

	return { weather, error };
};
