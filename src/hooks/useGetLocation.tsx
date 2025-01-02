import { useState, useEffect } from 'react';

export const useGetLocation = () => {
	const [city, setCity] = useState<string | null>(null);
	const [error] = useState<string | null>(null);

	useEffect(() => {
		// Check if location data is already in sessionStorage
		const cachedCity = sessionStorage.getItem('city');
		if (cachedCity) {
			setCity(cachedCity);
			return;
		}

		// Function to fetch city using reverse geocoding
		const fetchCity = async (lat: number, lon: number) => {
			try {
				const apiKey = import.meta.env.VITE_GEOCODE_KEY;
				const response = await fetch(
					`https://geocode.xyz/${lat},${lon}?json=1&auth=${apiKey}`
				);
				const data = await response.json();

				// Handle throttling or error responses
				if (data.error && data.error.description.includes('Throttled')) {
					console.warn('Geocode API throttled. Defaulting to fallback message.');
					setCity(null); // Default to "Hey, hey!" when throttled
				} else if (data.city) {
					sessionStorage.setItem('city', data.city);
					setCity(data.city);
				} else {
					console.warn('City not found in the response. Defaulting to fallback message.');
					setCity(null); // Default to "Hey, hey!"
				}
			} catch (error) {
				console.error('Error fetching location:', error);
				setCity(null); // Default to "Hey, hey!" on fetch failure
			}
		};

		// Get the user's location
		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						fetchCity(latitude, longitude);
					},
					(error) => {
						console.error('Error getting location:', error);
						setCity(null); // Default to "Hey, hey!" if location is unavailable
					}
				);
			} else {
				console.warn('Geolocation is not supported by this browser.');
				setCity(null); // Default to "Hey, hey!" if geolocation is unsupported
			}
		};

		getLocation();
	}, []); // Runs only once when the component mounts

	return { city, error };
};
