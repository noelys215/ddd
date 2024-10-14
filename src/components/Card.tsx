import { HeartBreak } from '@phosphor-icons/react';
import React from 'react';
import Text from './Text';
import SkillsCard from './SkillsCard'; // Import the SkillsCard

interface CardProps {
	title: string;
	content: string;
	skills?: string[]; // Optional skills array
}

const Card: React.FC<CardProps> = ({ title, content, skills }) => {
	return (
		<div className="border border-white rounded-lg max-w-3xl w-full p-6 bg-black shadow-md mx-auto">
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
		</div>
	);
};

export default Card;
