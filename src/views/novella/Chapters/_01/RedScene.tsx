import Layout from '../../../../components/Layout';
import MotionSection from '../../../../components/MotionSection';

export const RedScene = () => {
	return (
		<Layout title="descent">
			<article
				className="border border-white rounded-lg max-w-4xl w-full mx-auto pt-6 pb-6 md:pt-12 md:pb-12 bg-black shadow-md opacity-95"
				style={{ backgroundColor: '#000' }}
				aria-labelledby="card-title">
				<MotionSection delay={0.2}>
					<div className="flex justify-center items-center h-[300px] md:h-[500px] w-full">
						<div className="w-full h-[90%] bg-red-600 flex flex-col items-center justify-center text-white text-center">
							<h1 className="text-xl md:text-4xl font-bold mb-4">Watcher.exe</h1>
							<h2 className="text-3xl md:text-6xl mb-6">夜伽</h2>
							<p className="text-sm md:text-lg mt-6">Scene no. 101</p>
							<button className="text-xs md:text-sm mt-1">Proceed</button>
							{/* <p className="text-xs md:text-sm mt-1">動画番号 伯壱</p> */}
						</div>
					</div>
				</MotionSection>
			</article>
		</Layout>
	);
};
