import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

interface TitleProps {
	children: React.ReactNode;
	title: string;
}

export const Title: React.FC<TitleProps> = ({ title, children }) => {
	const navigate = useNavigate();
	const { track } = useAnalytics();
	return (
		<header>
			<nav aria-label="breadcrumb" className="mb-5">
				<a
					onClick={() => {
						track('breadcrumb_navigated', {
							destination: '/',
							context: title,
						});
						navigate('/');
					}}
					className="text-pink-500 hover:underline cursor-pointer">
					Home
				</a>
				<span
					aria-hidden="true"
					className="mx-1 inline-block"
					style={{ color: '#ec4899' }}>
					/
				</span>
				<a
					onClick={() => {
						track('breadcrumb_navigated', {
							destination: '/works',
							context: title,
						});
						navigate('/works');
					}}
					className="text-pink-500 hover:underline cursor-pointer">
					{title}
				</a>
				<span
					aria-hidden="true"
					className="mx-1 inline-block"
					style={{ color: '#ec4899' }}>
					/
				</span>

				<h3 className="inline-block text-white text-2xl font-medium">{children}</h3>
			</nav>
		</header>
	);
};
