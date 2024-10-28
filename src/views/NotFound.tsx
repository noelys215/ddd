import Layout from '../components/Layout';
import MotionSection from '../components/MotionSection';
import error from '../assets/errorAlt.png';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<Layout title="11_17">
			<MotionSection delay={0.2}>
				<div className="max-w-4xl w-full p-6 mx-auto text-center">
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
						className="button-89"
						style={{ width: '10rem' }}>
						Return Home
					</button>
				</div>
			</MotionSection>
		</Layout>
	);
};
