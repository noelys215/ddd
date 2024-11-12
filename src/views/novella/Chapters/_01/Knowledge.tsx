import { useState } from 'react';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import wonder from '../../../../assets/wonder.gif';
import MotionSection from '../../../../components/MotionSection';
import { ColorScene } from '../../../../components/novella/ColorScene';

export const Knowledge = () => {
	// State to control whether to show the RedScene
	const [showRedScene, setShowRedScene] = useState(false);

	const strings = ['For I have seen… but not yet known…'];

	// Handler to show the RedScene component
	const handleProceed = () => setShowRedScene(true);

	// If showRedScene is true, render the RedScene component instead of the current content
	if (showRedScene) {
		return (
			<ColorScene
				chapter="_chapterOne"
				title="Watcher.sys"
				scene="Scene no. 101"
				color="#739BD0"
				navigateTo="/novella/descent/watcher"
			/>
		);
	}

	return (
		<Layout title="descent">
			<Container opacity={90} color="#000000">
				<MotionSection delay={0.2}>
					<figure className="relative flex justify-center">
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
							onClick={handleProceed}
							aria-label="Proceed to Red Scene"
							className="button-89">
							Proceed
						</button>
					</footer>
				</MotionSection>
			</Container>
		</Layout>
	);
};
