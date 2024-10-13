import React from 'react';

interface TextProps {
	text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
	return (
		<div className="text-gray-300 text-base leading-relaxed space-y-4">
			{text.split('\n').map((paragraph, index) => (
				<p key={index} className="mb-4">
					{paragraph}
				</p>
			))}
		</div>
	);
};

export default Text;
