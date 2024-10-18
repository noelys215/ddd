import { HeartBreak } from '@phosphor-icons/react';
import React from 'react';
import Text from './Text';
import SkillsCard from './SkillsCard'; // Import the SkillsCard

interface CardProps {
	title?: string;
	content: string;
	skills?: string[];
	buttonText?: string;
	buttonAction?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, skills, buttonText, buttonAction }) => {
	return (
		<div className="border border-white rounded-lg max-w-3xl w-full p-6 bg-black shadow-md mx-auto opacity-95">
			<h2 className="text-white text-lg font-semibold mb-2">{title}</h2>

			{/* Horizontal Line */}
			<div className="relative mb-4">
				<hr className="border-gray-400 w-4/5 mx-auto" />
				<div className="absolute inset-x-0 top-0 flex justify-center -mt-3.5">
					<HeartBreak fill="#fff" weight="fill" size={26} />
				</div>
			</div>

			{/* Text Component */}
			<Text text={content} />

			{/* Skills Section (if skills are provided) */}
			{skills && <SkillsCard skills={skills} />}

			{/* Optional Button (if buttonText and buttonAction are provided) */}
			{buttonText && buttonAction && (
				<div className="flex justify-center mt-6">
					<button
						onClick={buttonAction}
						className="px-4 py-2 bg-black-500 text-white border border-white rounded-md hover:bg-gray-700 transition-colors duration-300">
						{buttonText}
					</button>
				</div>
			)}
		</div>
	);
};

export default Card;
