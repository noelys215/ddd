import { useState, useEffect } from 'react';

const formatCityName = (name: string): string => {
	return name
		.toLowerCase() // Convert to lowercase
		.split(' ') // Split into individual words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter
		.join(' '); // Join the words back together
};

const isValidCityValue = (value: string): boolean => {
	const normalized = value.trim().toLowerCase();

	if (!normalized) return false;
	if (normalized.includes('geocode.xyz')) return false;
	if (normalized.includes('throttled')) return false;
	if (normalized.includes('pricing')) return false;
	if (normalized.startsWith('error')) return false;

	return true;
};

export const useGetLocation = () => {
	const [city, setCity] = useState<string | null>(null);
	const [error] = useState<string | null>(null);

	useEffect(() => {
		// Check if location data is already in sessionStorage
		const cachedCity = sessionStorage.getItem('city');
		if (cachedCity && isValidCityValue(cachedCity)) {
			setCity(formatCityName(cachedCity));
			return;
		}
		if (cachedCity && !isValidCityValue(cachedCity)) {
			sessionStorage.removeItem('city');
		}

		// Function to fetch city using reverse geocoding
		const fetchCity = async (lat: number, lon: number) => {
			try {
				const response = await fetch(
					`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
				);

				if (!response.ok) {
					throw new Error(`BigDataCloud request failed with status ${response.status}`);
				}

				const data = (await response.json()) as {
					city?: string;
					locality?: string;
				};

				const resolvedCity = data.city || data.locality;
				if (resolvedCity && isValidCityValue(resolvedCity)) {
					const formattedCity = formatCityName(resolvedCity);
					sessionStorage.setItem('city', formattedCity);
					setCity(formattedCity);
				} else {
					console.warn('City not found in the response. Defaulting to fallback message.');
					sessionStorage.removeItem('city');
					setCity(null); // Default to "Hey, hey!"
				}
			} catch (error) {
				console.error('Error fetching location:', error);
				sessionStorage.removeItem('city');
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
