import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
	color?: string;
	opacity?: number;
}

export const Container: React.FC<LayoutProps> = ({ children, color = '#101010', opacity = 95 }) => {
	return (
		<article
			className={`border border-white rounded-lg max-w-4xl w-full p-6 md:p-12 bg-black shadow-md mx-auto opacity-${opacity}`}
			style={{ backgroundColor: color }}
			aria-labelledby="card-title">
			{children}
		</article>
	);
};
