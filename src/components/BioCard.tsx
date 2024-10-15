import { GithubLogo, LinkedinLogo, SmileyMelting } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';
import { useGlitch } from 'react-powerglitch';
import Text from './Text';
import MotionSection from './MotionSection';

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
		<MotionSection delay={0.2}>
			<div className="border border-white rounded-md max-w-3xl w-full p-6 bg-black shadow-md mx-auto">
				<div className="flex items-center justify-between mb-4">
					{/* Name/Title and Subtitle on the left */}
					<div>
						{/* Name/Title */}
						<h2 className="text-white text-lg font-semibold">{name}</h2>
						{/* Subtitle */}
						<p className="text-gray-400 text-sm">{subtitle}</p>
						{/* 24-hour Clock */}
						<p className="text-gray-300 text-sm mt-2">{time}</p>

						{/* Social Links (now under subtitle) */}
						<div className="flex space-x-4 mt-2">
							{linkedinUrl && (
								<a
									href={linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-blue-400">
									<LinkedinLogo size={24} weight="fill" />
								</a>
							)}
							{githubUrl && (
								<a
									href={githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-gray-400">
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
						<SmileyMelting fill="#fff" size={32} weight="fill" />
					</div>
				</div>

				{/* Text Component */}
				{text && <Text text={text} />}

				{/* Buttons (added Experience button) */}
				<div className="flex justify-center space-x-4 mt-6">
					<button className="px-4 py-2 bg-black-500 text-white border border-white rounded-md hover:bg-gray-700 transition-colors duration-300">
						Works
					</button>
					<button className="px-4 py-2 bg-black-500 text-white border border-white rounded-md hover:bg-gray-700 transition-colors duration-300">
						Experience
					</button>
				</div>
			</div>
		</MotionSection>
	);
};

export default BioCard;
