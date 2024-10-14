import React from 'react';

interface SkillsCardProps {
	skills: string[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
	return (
		<div className="mt-6">
			<h3 className="text-white text-lg font-semibold mb-2">Skills</h3>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
				{skills.map((skill, index) => (
					<div key={index} className="text-gray-300">
						{skill}
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsCard;
