import Layout from '../Layout';
import MotionSection from '../MotionSection';

interface ColorSceneProps {
	title?: string;
	chapter?: string;
	scene?: string;
	subtitle?: string;
}

export const ColorScene: React.FC<ColorSceneProps> = ({ chapter, title, scene, subtitle }) => {
	return (
		<Layout title="descent">
			<article
				className="border border-white rounded-lg max-w-4xl w-full mx-auto pt-6 pb-6 md:pt-12 md:pb-12 bg-black shadow-md opacity-95"
				style={{ backgroundColor: '#000' }}
				aria-labelledby="card-title">
				<MotionSection delay={0.2}>
					<div className="flex justify-center items-center h-[300px] md:h-[500px] w-full">
						<div className="w-full h-[90%] bg-red-600 flex flex-col items-center justify-center text-white text-center">
							<h1 className="text-xl md:text-4xl font-bold mb-4">{chapter}</h1>
							<h2 className="text-3xl md:text-6xl mb-6">{title}</h2>
							<p className="text-sm md:text-lg mt-6">{scene}</p>
							{subtitle && <p className="text-xs md:text-sm mt-1">{subtitle}</p>}
						</div>
					</div>
				</MotionSection>
			</article>
		</Layout>
	);
};