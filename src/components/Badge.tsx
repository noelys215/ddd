import React from 'react';

interface BadgeProps {
	children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
	return (
		<span className=" text-pink-50 text-base font-mono me-2 px-1  rounded bg-pink-700">
			{children}
		</span>
	);
};
