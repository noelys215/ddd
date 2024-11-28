import React, { ReactNode } from 'react';
import backgroundImage from '../assets/static.gif';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
	children: ReactNode;
	title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return (
		<section
			className="flex flex-col justify-center items-center space-y-6 min-h-screen w-full bg-black p-6 font-custom"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'contain',
				minHeight: '100vh',
				filter: 'brightness(90%)',
			}}>
			<Helmet>
				<title>{`_henry [ ${title} ]`}</title>
				{/* <meta name="description" content={`Page about ${title}`} /> */}
			</Helmet>
			{children}
		</section>
	);
};

export default Layout;
