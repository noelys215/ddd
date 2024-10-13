import React from 'react';

interface CardProps {
	title: string;
	content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className="border border-white rounded-lg max-w-2xl w-full p-6 bg-black shadow-md mx-auto">
			<h2 className="text-white text-lg font-semibold mb-2">{title}</h2>

			{/* Horizontal Line */}
			<div className="relative mb-4">
				<hr className="border-gray-400 w-4/5 mx-auto" />
				<div className="absolute inset-x-0 top-0 flex justify-center -mt-2.5">
					<div className="w-4 h-4">🤍</div>
				</div>
			</div>

			{/* Text Component */}
			<p className="text-white">{content}</p>
		</div>
	);
};

export default Card;
