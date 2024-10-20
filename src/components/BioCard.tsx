import { GithubLogo, LinkedinLogo, SmileyMelting } from '@phosphor-icons/react';
import { Sun, Cloud, CloudLightning, CloudRain, CloudSnow, CloudFog } from '@phosphor-icons/react';

import React, { useState, useEffect } from 'react';
import { useGlitch } from 'react-powerglitch';
import Text from './Text';
import { useNavigate } from 'react-router-dom';
import { useGetWeather } from '../hooks/useGetWeather';

interface BioCardProps {
	imageUrl?: string;
	name?: string;
	subtitle?: string;
	text?: string;
	linkedinUrl?: string;
	githubUrl?: string;
}

const BioCard: React.FC<BioCardProps> = ({
	imageUrl,
	name,
	subtitle,
	text,
	linkedinUrl,
	githubUrl,
}) => {
	const glitch = useGlitch();
	const [time, setTime] = useState<string>('');
	const [weatherDescription, setWeatherDescription] = useState<string | null>(null);
	const [weatherMain, setWeatherMain] = useState<string | null>(null);
	const navigate = useNavigate();

	// Weather
	const { weather } = useGetWeather();

	useEffect(() => {
		if (weather) {
			setWeatherDescription(weather.description);
			setWeatherMain(weather.main);
		} else {
			setWeatherDescription('you disabled location :c');
		}
	}, [weather]);

	const getWeatherIcon = (main: string) => {
		switch (main) {
			case 'Thunderstorm':
				return <CloudLightning size={24} weight="fill" className="ml-2 text-white" />;
			case 'Drizzle':
			case 'Rain':
				return <CloudRain size={24} weight="fill" className="ml-2 text-white" />;
			case 'Snow':
				return <CloudSnow size={24} weight="fill" className="ml-2 text-white" />;
			case 'Atmosphere': // mist, smoke, haze, etc.
				return <CloudFog size={24} weight="fill" className="ml-2 text-white" />;
			case 'Clear':
				return <Sun size={24} weight="fill" className="ml-2" />;
			case 'Clouds':
				return <Cloud size={24} weight="fill" className="ml-2 text-gray-400" />;
			default:
				return null; // no icon
		}
	};

	// Function to get current time in 24-hour format
	const getTime = () => {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		return `${hours}:${minutes}:${seconds}`;
	};

	// useEffect to update the time every second
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getTime());
		}, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="border border-white rounded-md max-w-3xl w-full p-6 bg-black shadow-md mx-auto opacity-95">
			<div className="flex items-center justify-between mb-4">
				{/* Name/Title and Subtitle on the left */}
				<div>
					{/* Name/Title */}
					<h2 className="text-white text-lg font-semibold">{name}</h2>
					{/* Subtitle */}
					<p className="text-gray-400 text-sm">{subtitle}</p>
					{/* 24-hour Clock and Weather */}
					<p className="text-gray-300 text-sm mt-2 flex items-center">
						{time}
						{weatherDescription && ` | ${weatherDescription}`}
						{weatherMain && getWeatherIcon(weatherMain)}
					</p>

					{/* Social Links (now under subtitle) */}
					<div className="flex space-x-4 mt-2">
						{linkedinUrl && (
							<a
								href={linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-pink-400">
								<LinkedinLogo size={24} weight="fill" />
							</a>
						)}
						{githubUrl && (
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-pink-400">
								<GithubLogo size={24} weight="fill" />
							</a>
						)}
					</div>
				</div>

				{/* Image on the top right */}
				<div className="relative ml-4">
					<img
						src={imageUrl}
						alt={name}
						className="object-cover rounded-full border border-gray-300"
						style={{ width: '140px', height: '140px' }}
						ref={glitch.ref}
					/>
				</div>
			</div>

			{/* Horizontal Line */}
			<div className="relative mb-4">
				<hr className="border-gray-400 w-4/5 mx-auto" />
				<div className="absolute inset-x-0 top-0 flex justify-center -mt-6">
					<SmileyMelting
						// fill="#fff"
						fill="#FF69B4"
						size={32}
						weight="fill"
						onClick={() => navigate('/error')}
					/>
				</div>
			</div>

			{/* Text Component */}
			{text && <Text text={text} />}

			{/* Buttons (added Experience button) */}
			<div className="flex justify-center space-x-4 mt-6">
				<button
					onClick={() => navigate('/works')}
					className="px-4 py-2 bg-black-500 text-white border border-white rounded-md hover:bg-pink-600 transition-colors duration-300">
					Works
				</button>
				<button
					onClick={() => navigate('/experience')}
					className="px-4 py-2 bg-black-500 text-white border border-white rounded-md hover:bg-pink-600 transition-colors duration-300">
					Experience
				</button>
			</div>
		</div>
	);
};

export default BioCard;
