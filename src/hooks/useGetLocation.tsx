import { useState, useEffect } from 'react';

export const useGetLocation = () => {
	const [city, setCity] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

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

				// Save city to sessionStorage and state
				if (data.city) {
					sessionStorage.setItem('city', data.city);
					setCity(data.city);
				} else {
					setError('Unable to determine city');
				}
			} catch (error) {
				console.error('Error fetching location:', error);
				setError('Unable to fetch location data');
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
						setError('Unable to retrieve location');
					}
				);
			} else {
				setError('Geolocation is not supported by this browser');
			}
		};

		getLocation();
	}, []); // Runs only once when the component mounts

	return { city, error };
};
