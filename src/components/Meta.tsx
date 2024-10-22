import React from 'react';

interface MetaProps {
	children: React.ReactNode;
}

export const Meta: React.FC<MetaProps> = ({ children }) => {
	return (
		<span className="text-teal-50 text-xs uppercase font-semibold me-2 px-1 py-0.5 rounded-sm dark:bg-teal-700">
			{children}
		</span>
	);
};
