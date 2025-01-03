import React from 'react';
import { useNavigate } from 'react-router-dom';

interface WorkGridItemProps {
	title: string;
	description: string;
	imageUrl?: string;
	link?: string;
	href?: string;
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
	title,
	description,
	imageUrl,
	link,
	href,
}) => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		if (link) {
			navigate(link);
		}
	};

	return (
		<article
			className="p-6 bg-black rounded-lg"
			style={{ backgroundColor: '#101010' }}
			aria-labelledby={`${title}-title`}
			role="button"
			onClick={handleNavigation}
			tabIndex={0}
			onKeyDown={(e) => e.key === 'Enter' && handleNavigation()}>
			<a
				href={href || '#'}
				onClick={(e) => {
					if (!href) e.preventDefault();
				}}
				rel="noopener noreferrer"
				target={href ? '_blank' : '_self'}
				className="block text-center"
				aria-label={`Learn more about ${title}`}>
				{/* Image */}
				<figure>
					<img
						src={imageUrl}
						alt={`Screenshot of ${title}`}
						className="object-cover w-full h-48 rounded-lg mb-4"
					/>
				</figure>

				{/* Title */}
				<h2 id={`${title}-title`} className="text-white text-lg font-semibold mb-2">
					{title}
				</h2>

				{/* Horizontal Line */}
				<div className="relative mb-4">
					<hr className="border-gray-400 w-4/5 mx-auto" aria-hidden="true" />
				</div>

				{/* Description */}
				<p className="text-gray-300 text-md">{description}</p>
			</a>
		</article>
	);
};
