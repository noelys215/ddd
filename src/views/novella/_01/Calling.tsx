import { Container } from '../../../components/Container';
import Layout from '../../../components/Layout';
import Typewriter from 'typewriter-effect';
import { Rabbit } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export const Calling = () => {
	const navigate = useNavigate();

	const string = 'I am looking for myself… have you seen them?';

	return (
		<Layout title="_calling">
			<Container>
				<div className="flex justify-center text-center">
					<Rabbit size={64} weight="fill" className="text-white mb-2" />
				</div>
				<h1 id="bio-card-title" className="text-white text-lg font-semibold text-center">
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
				</h1>
				<footer className="flex justify-center space-x-4 mt-6">
					<button
						onClick={() => navigate('/works')}
						aria-label="Navigate to Works"
						className="button-89">
						Follow
					</button>
					<button
						onClick={() => navigate('/experience')}
						aria-label="Navigate to Experience"
						className="button-89">
						Retreat
					</button>
				</footer>
			</Container>
		</Layout>
	);
};
