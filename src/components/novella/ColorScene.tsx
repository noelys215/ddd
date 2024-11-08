import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import MotionSection from '../MotionSection';

interface ColorSceneProps {
	title?: string;
	chapter?: string;
	scene?: string;
	subtitle?: string;
	color?: string;
	navigateTo: string;
	initialTimer?: number;
}

export const ColorScene: React.FC<ColorSceneProps> = ({
	chapter,
	title,
	scene,
	subtitle,
	color = '#000',
	navigateTo,
	initialTimer = 5, // Default to 5 seconds if not specified
}) => {
	const navigate = useNavigate();
	const [timer, setTimer] = useState(initialTimer);

	useEffect(() => {
		if (timer > 0) {
			const countdown = setTimeout(() => setTimer(timer - 1), 1000);
			return () => clearTimeout(countdown);
		} else {
			navigate(navigateTo);
		}
	}, [timer, navigate, navigateTo]);

	return (
		<Layout title="descent">
			<article
				className="border border-white rounded-lg max-w-4xl w-full mx-auto pt-6 pb-6 md:pt-12 md:pb-12 bg-black shadow-md opacity-95"
				style={{ backgroundColor: '#000' }}
				aria-labelledby="card-title">
				<MotionSection delay={0.2}>
					<div className="flex justify-center items-center h-[300px] md:h-[500px] w-full">
						<div
							className="w-full h-[90%] flex flex-col items-center justify-center text-white text-center"
							style={{ backgroundColor: color }}>
							<h1 className="text-xl md:text-4xl font-bold mb-4">{chapter}</h1>
							<h2 className="text-3xl md:text-6xl mb-6">{title}</h2>
							<p className="text-sm md:text-lg mt-6">{scene}</p>
							<p className="text-xl mt-6">{timer}</p> {/* Display timer */}
							{subtitle && (
								<p className="text-sm mt-1 text-wrap w-7/12">{subtitle}</p>
							)}
						</div>
					</div>
				</MotionSection>
			</article>
		</Layout>
	);
};
