import React, { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col justify-center items-center space-y-6 min-h-screen w-full bg-black p-6 font-custom">
			{children}
		</div>
	);
};

export default Layout;
