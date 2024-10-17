import React, { ReactNode } from 'react';
import backgroundImage from '../assets/static.gif';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div
			className="flex flex-col justify-center items-center space-y-6 min-h-screen w-full bg-black p-6 font-custom"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'contain',
				// backgroundPosition: 'center',
				// backgroundRepeat: 'no-repeat',
				minHeight: '100vh',
				// opacity: 0.96,
			}}>
			{children}
		</div>
	);
};

export default Layout;
