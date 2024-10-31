import Layout from '../components/Layout';
import MotionSection from '../components/MotionSection';
import error from '../assets/errorAlt.png';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<Layout title="11_17">
			<article aria-labelledby="lost-title">
				<MotionSection delay={0.2}>
					<div className="max-w-4xl w-full p-6 mx-auto text-center">
						{/* Error Image */}
						<figure className="mb-6">
							<img
								src={error}
								alt="404 Error"
								className="object-cover w-full h-full scale-105"
							/>
							<figcaption className="sr-only">404 Error - Page Not Found</figcaption>
						</figure>

						{/* Back to Home Button */}
						<button
							onClick={() => navigate('/')}
							className="button-89"
							style={{ width: '10rem' }}
							aria-label="Return to Home Page">
							Return Home
						</button>
					</div>
				</MotionSection>
			</article>
		</Layout>
	);
};
