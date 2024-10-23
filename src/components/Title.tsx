import { CaretRight } from '@phosphor-icons/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TitleProps {
	children: React.ReactNode;
	title: string;
}

export const Title: React.FC<TitleProps> = ({ title, children }) => {
	const navigate = useNavigate();
	return (
		<div className="mb-5">
			<a
				onClick={() => navigate('/')}
				className="text-pink-500 hover:underline cursor-pointer">
				Home
			</a>
			<CaretRight size={14} weight="bold" className="mx-1 text-pink-500 inline-flex" />
			<a
				onClick={() => navigate('/works')}
				className="text-pink-500 hover:underline cursor-pointer">
				{title}
			</a>
			<CaretRight size={14} weight="bold" className="mx-1 text-pink-500 inline-flex" />

			<h3 className="inline-block text-white text-2xl font-medium">{children}</h3>
		</div>
	);
};
