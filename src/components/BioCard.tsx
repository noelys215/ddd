import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import React from 'react';
import { useGlitch } from 'react-powerglitch';

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

	return (
		<div className="border border-white rounded-lg max-w-2xl w-full p-6 bg-black shadow-md mx-auto">
			<div className="flex items-center justify-between mb-4">
				{/* Name/Title and Subtitle on the left */}
				<div>
					{/* Name/Title */}
					<h2 className="text-white text-lg font-semibold">{name}</h2>
					{/* Subtitle */}
					<p className="text-gray-400 text-sm">{subtitle}</p>
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
				{/* Heart in the middle of the horizontal line */}
				<div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
					<div className="w-8 h-8">🤍</div>
				</div>
			</div>

			{/* Text Component */}
			<p className="text-white mb-4">{text}</p>

			{/* Social Links */}
			<div className="flex justify-center space-x-4">
				{linkedinUrl && (
					<a
						href={linkedinUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-gray-400">
						<LinkedinLogo size={26} weight="fill" />
					</a>
				)}
				{githubUrl && (
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-gray-400">
						<GithubLogo size={26} weight="fill" />
					</a>
				)}
			</div>
		</div>
	);
};

export default BioCard;
