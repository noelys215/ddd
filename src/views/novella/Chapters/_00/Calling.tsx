import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import { Rabbit } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useGlitch } from 'react-powerglitch';
import MotionSection from '../../../../components/MotionSection';

export const Calling = () => {
	const navigate = useNavigate();
	const glitch = useGlitch({
		hideOverflow: true,
		timing: {
			duration: 3150,
		},
	});

	const string = 'There’s something of mine out there… or perhaps it’s you(rs)?';

	return (
		<Layout title="_calling">
			<Container>
				<MotionSection delay={0.2}>
					<div className="flex justify-center text-center" ref={glitch.ref}>
						<Rabbit size={64} weight="fill" className="text-white mb-2" />
					</div>
					<p id="bio-card-title" className="text-white text-md font-semibold text-center">
						<span style={{ display: 'inline-block' }}>
							<Typewriter
								options={{
									strings: string,
									autoStart: true,
									cursor: '_',
									delay: 60,
									deleteSpeed: 250,
								}}
							/>
						</span>
					</p>
					<footer className="flex justify-center space-x-4 mt-6">
						<button
							onClick={() => navigate('/novella/descent')}
							aria-label="Descend into the unknown"
							className="button-89">
							Follow
						</button>
						<button
							onClick={() => navigate('/')}
							aria-label="Navigate to Home"
							className="button-89">
							Retreat
						</button>
					</footer>
				</MotionSection>
			</Container>
		</Layout>
	);
};
