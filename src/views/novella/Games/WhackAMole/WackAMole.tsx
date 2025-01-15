import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import { Rabbit } from '@phosphor-icons/react';
import { useGlitch } from 'react-powerglitch';
import MotionSection from '../../../../components/MotionSection';
import WhackAMoleGame from './components/WhackAMoleGame';

export const WhackAMole = () => {
	const glitch = useGlitch({ hideOverflow: true, timing: { duration: 3150 } });

	return (
		<Layout title="Whack-A-Mole">
			<Container opacity={95}>
				<MotionSection delay={0.2}>
					<div className="flex justify-center text-center" ref={glitch.ref}>
						<Rabbit size={64} weight="fill" className="text-white mb-2" />
					</div>
					<WhackAMoleGame />
				</MotionSection>
			</Container>
		</Layout>
	);
};

export default WhackAMole;
