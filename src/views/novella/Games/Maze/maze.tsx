import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import { Rabbit } from '@phosphor-icons/react';
import { useGlitch } from 'react-powerglitch';
import MotionSection from '../../../../components/MotionSection';
import MazeComponent from './components/maze_component.js';

export const Maze = () => {
	const glitch = useGlitch({ hideOverflow: true, timing: { duration: 3150 } });

	return (
		<Layout title="_calling">
			<Container opacity={95}>
				<MotionSection delay={0.2}>
					<div className="flex justify-center text-center" ref={glitch.ref}>
						<Rabbit size={64} weight="fill" className="text-white mb-2" />
					</div>
					<MazeComponent />
				</MotionSection>
			</Container>
		</Layout>
	);
};
