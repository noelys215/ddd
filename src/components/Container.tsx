import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export const Container: React.FC<LayoutProps> = ({ children }) => {
	return (
		<article
			className="border border-white rounded-lg max-w-4xl w-full p-6 md:p-12 bg-black shadow-md mx-auto opacity-95"
			style={{ backgroundColor: '#101010' }}
			aria-labelledby="card-title">
			{children}
		</article>
	);
};
