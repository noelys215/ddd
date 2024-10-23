import { CaretRight, HeartBreak } from '@phosphor-icons/react';
import React from 'react';
import Text from './Text';
import SkillsCard from './SkillsCard'; // Import the SkillsCard
import { useNavigate } from 'react-router-dom';

interface CardProps {
	title?: string;
	content: string;
	skills?: string[];
	buttonText?: string;
	buttonAction?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, skills, buttonText, buttonAction }) => {
	const navigate = useNavigate();
	return (
		<div className="border border-white rounded-lg max-w-4xl w-full p-6 md:p-12 bg-black shadow-md mx-auto opacity-95">
			<div className="mb-5">
				<a
					onClick={() => navigate('/')}
					className="text-pink-500 hover:underline cursor-pointer">
					Home
				</a>
				<CaretRight size={14} weight="bold" className="mx-1 text-pink-500 inline-flex" />
				<h3 className="inline-block text-white text-2xl font-medium">{title}</h3>
			</div>
			{/* Horizontal Line */}
			<div className="relative mb-4">
				<hr className="border-gray-400 w-4/5 mx-auto" />
				<div className="absolute inset-x-0 top-0 flex justify-center -mt-3.5">
					<HeartBreak fill="#FF69B4" weight="fill" size={26} />
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
