import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import wonder from '../../../../assets/wonder.gif';
import MotionSection from '../../../../components/MotionSection';

export const Descent = () => {
	const navigate = useNavigate();

	const strings = [
		'For I have seen… but not yet known…',
		'In the beginning, there was… silence.',
		'He was made in the image… yet cast in shadow.',
		'What you seek is forbidden… but to remain is emptiness.',
		'To follow is to yield; to stray is to question.',
	];

	return (
		<Layout title="descent">
			<Container opacity={90} color="#000000">
				<MotionSection delay={0.2}>
					<figure className="relative  flex justify-center">
						<img
							src={wonder}
							alt="Photo of oneself"
							className="object-cover rounded-full opacity-70"
							style={{
								width: '400px',
								maskImage:
									'radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
								WebkitMaskImage:
									'radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
							}}
						/>
					</figure>

					<p id="scripture" className="text-white text-md font-semibold text-center">
						<span style={{ display: 'inline-block' }}>
							<Typewriter
								options={{
									strings: strings,
									autoStart: true,
									cursor: '_',
									delay: 50,
									deleteSpeed: 13,
									loop: true,
								}}
							/>
						</span>
					</p>

					<footer className="flex justify-center space-x-4 mt-6">
						<button
							onClick={() => navigate('/novella/descent/redscene')}
							aria-label="Navigate to Works"
							className="button-89">
							Proceed
						</button>
					</footer>
				</MotionSection>
			</Container>
		</Layout>
	);
};
