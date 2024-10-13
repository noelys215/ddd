import React from 'react';

interface BioCardProps {
	imageUrl?: string;
	name?: string;
	subtitle?: string;
	text?: string;
}

const BioCard: React.FC<BioCardProps> = ({ imageUrl, name, subtitle, text }) => {
	return (
		<div className="border border-white rounded-lg max-w-2xl w-full p-6 bg-black shadow-md mx-auto">
			<div className="flex items-center mb-4">
				{/* Name/Title and Subtitle on the left */}
				<div>
					<h2 className="text-white text-lg font-semibold">{name}</h2>
					<p className="text-gray-400 text-sm">{subtitle}</p> {/* Subtitle */}
				</div>

				{/* Image on the top right */}
				<img
					src={imageUrl}
					alt={name}
					className="ml-auto object-cover rounded-full border border-gray-300"
					style={{ width: '140px', height: '140px' }}
				/>
			</div>

			{/* Horizontal Line */}
			<div className="relative mb-4">
				<hr className="border-gray-400 w-4/5 mx-auto" />
				<div className="absolute top-0 left-0 w-2 h-px bg-gradient-to-r from-black to-transparent"></div>
				<div className="absolute top-0 right-0 w-2 h-px bg-gradient-to-l from-black to-transparent"></div>
			</div>

			{/* Text Component */}
			<p className="text-white">{text}</p>
		</div>
	);
};

export default BioCard;
