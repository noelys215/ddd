import React from 'react';

interface CardProps {
	title: string;
	content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className="border border-white rounded-lg max-w-2xl w-full p-6 bg-black shadow-md mx-auto">
			<h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
			<div className="relative mb-4">
				<hr className="border-gray-400 w-4/5 mx-auto" />
				<div className="absolute top-0 left-0 w-2 h-px bg-gradient-to-r from-black to-transparent"></div>
				<div className="absolute top-0 right-0 w-2 h-px bg-gradient-to-l from-black to-transparent"></div>
			</div>
			<p className="text-white">{content}</p>
		</div>
	);
};

export default Card;
