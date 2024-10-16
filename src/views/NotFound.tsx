import Layout from '../components/Layout';
import MotionSection from '../components/MotionSection';
import error from '../assets/errorAlt.png';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<Layout>
			<MotionSection delay={0.2}>
				<div className="max-w-3xl w-full p-6 bg-black shadow-md mx-auto text-center">
					{/* Error Image */}
					<div className="mb-6">
						<img
							src={error}
							alt="404 Error"
							className="object-cover w-full h-full scale-105"
						/>
					</div>

					{/* Back to Home Button */}
					<button
						onClick={() => navigate('/')}
						className="px-4 py-2 bg-black-500 text-white border border-white rounded-md hover:bg-gray-700 transition-colors duration-300">
						Return Home
					</button>
				</div>
			</MotionSection>
		</Layout>
	);
};
