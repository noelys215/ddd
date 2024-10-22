import { useNavigate } from 'react-router-dom';

interface WorkGridItemProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
	title,
	description,
	imageUrl,
	link,
}) => {
	const navigate = useNavigate();

	return (
		<div className=" p-6 bg-black shadow-md">
			<a
				onClick={() => navigate(link)}
				rel="noopener noreferrer"
				className="block text-center">
				{/* Image */}
				<img
					src={imageUrl}
					alt={title}
					className="object-cover w-full h-48 rounded-lg mb-4"
				/>

				{/* Title */}
				<h2 className="text-white text-lg font-semibold mb-2">{title}</h2>

				{/* Horizontal Line */}
				<div className="relative mb-4">
					<hr className="border-gray-400 w-4/5 mx-auto" />
					<div className="absolute inset-x-0 top-0 flex justify-center -mt-3.5">
						{/* <HeartBreak fill="#FF69B4" weight="fill" size={26} /> */}
					</div>
				</div>

				{/* Description */}
				<p className="text-gray-300 text-sm">{description}</p>
			</a>
		</div>
	);
};
