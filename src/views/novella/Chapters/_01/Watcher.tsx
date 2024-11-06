import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import watcher from '../../../../assets/watcher.gif';
import MotionSection from '../../../../components/MotionSection';
import Typewriter from 'typewriter-effect';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';

export const Watcher = () => {
	const navigate = useNavigate();
	const [startSecond, setStartSecond] = useState(false);
	const [startThird, setStartThird] = useState(false);
	const [showProceedButton, setShowProceedButton] = useState(false);

	const delayBetweenSentences = 2000;
	const typingSpeed = 30;

	useEffect(() => {
		const timer1 = setTimeout(() => setStartSecond(true), delayBetweenSentences);
		const timer2 = setTimeout(() => setStartThird(true), delayBetweenSentences * 2.5);

		const lastSentenceDuration =
			'Its words echo and distort, creating an aura of ancient knowledge shrouded in mystery.'
				.length * typingSpeed;
		const buttonDelay = delayBetweenSentences * 3 + lastSentenceDuration;

		const timer3 = setTimeout(() => setShowProceedButton(true), buttonDelay);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
			clearTimeout(timer3);
		};
	}, []);

	return (
		<Layout title="Watcher.exe">
			<Container color="#000000">
				<MotionSection delay={0.2}>
					<figure className="relative flex justify-center">
						<img
							src={watcher}
							alt="Photo of oneself"
							className="object-cover rounded-full opacity-90"
							style={{
								width: '400px',
								maskImage:
									'radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)',
								WebkitMaskImage:
									'radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)',
							}}
						/>
					</figure>
					<hr />

					{/* First Sentence */}
					<p
						id="scripture"
						className="text-white text-md font-normal text-left transition-opacity duration-1000"
						style={{ minHeight: '1.5em' }}>
						<Typewriter
							options={{
								strings: 'Watcher.exe appears:',
								autoStart: true,
								cursor: '',
								delay: typingSpeed,
							}}
						/>
					</p>

					{/* Second Sentence */}
					<p
						id="scripture"
						className="text-white text-md font-normal text-left transition-opacity duration-1000"
						style={{ minHeight: '1.5em', opacity: startSecond ? 1 : 0 }}>
						{startSecond && (
							<Typewriter
								options={{
									strings:
										'A piercing eye that scans you with an unfeeling, almost divine authority.',
									autoStart: true,
									cursor: '',
									delay: typingSpeed,
								}}
							/>
						)}
					</p>

					{/* Third Sentence */}
					<p
						id="scripture"
						className="text-white text-md font-normal text-left transition-opacity duration-1000"
						style={{ minHeight: '1.5em', opacity: startThird ? 1 : 0 }}>
						{startThird && (
							<Typewriter
								options={{
									strings:
										'Its words echo and distort, creating an aura of ancient knowledge shrouded in mystery.',
									autoStart: true,
									cursor: '_',
									delay: typingSpeed,
								}}
							/>
						)}
					</p>

					{/* Proceed Button */}
					<MotionSection delay={0.2}>
						<footer className="flex justify-center space-x-4 mt-6">
							<button
								style={{
									opacity: showProceedButton ? 1 : 0,
									transition: 'opacity 1s ease',
								}}
								onClick={() => navigate('/novella/descent/redscene')}
								aria-label="Proceed to the next scene"
								className="button-89">
								Proceed
							</button>
						</footer>
					</MotionSection>
				</MotionSection>
			</Container>
		</Layout>
	);
};
