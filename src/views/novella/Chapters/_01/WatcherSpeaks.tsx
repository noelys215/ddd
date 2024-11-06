import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import watcher from '../../../../assets/watcher.gif';
import MotionSection from '../../../../components/MotionSection';
import Typewriter from 'typewriter-effect';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import { useGlitch } from 'react-powerglitch';
import { Rabbit } from '@phosphor-icons/react';

export const WatcherSpeaks = () => {
	const navigate = useNavigate();
	const [startSecond, setStartSecond] = useState(false);
	const [startThird, setStartThird] = useState(false);
	const [showProceedButton, setShowProceedButton] = useState(false);

	const glitch = useGlitch({});
	const typingSpeed = 30;

	// Define each sentence and calculate the display delay based on typing speed
	const sentences = useMemo(
		() => [
			{
				text: 'Watcher.exe: “I am one who sees… but cannot act. What is it that you seek? Understanding, or the safety of ignorance?”',
				delay: 0, // Start immediately
			},
			{
				text: 'Watcher.exe: “In obedience lies simplicity, the way is guided, clean, and bright… yet obscured. In knowledge lies depth… but it fractures and distorts.”',
				delay: typingSpeed * 104 + 2000, // Delay after first sentence completes (length * typingSpeed + delayBetweenSentences)
			},
			{
				text: 'Watcher.exe: “Choose, but know… the price is heavy on both paths. One binds, the other blinds… but only one knows.”',
				delay: typingSpeed * 104 + typingSpeed * 104 + 4000, // Delay after second sentence completes
			},
		],
		[typingSpeed]
	);

	useEffect(() => {
		const timer1 = setTimeout(() => setStartSecond(true), sentences[1].delay);
		const timer2 = setTimeout(() => setStartThird(true), sentences[2].delay);

		// Calculate button delay after the last sentence completes
		const lastSentenceDuration = sentences[2].text.length * typingSpeed;
		const buttonDelay = sentences[2].delay + lastSentenceDuration + 2000;

		const timer3 = setTimeout(() => setShowProceedButton(true), buttonDelay);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
			clearTimeout(timer3);
		};
	}, [sentences]);

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
						className="text-white mb-2 text-md font-normal text-left transition-opacity duration-1000"
						style={{ minHeight: '1.5em' }}>
						<Typewriter
							options={{
								strings: sentences[0].text,
								autoStart: true,
								cursor: '',
								delay: typingSpeed,
							}}
						/>
					</p>

					{/* Second Sentence */}
					<p
						id="scripture"
						className="text-white mb-2 text-md font-normal text-left transition-opacity duration-1000"
						style={{ minHeight: '1.5em', opacity: startSecond ? 1 : 0 }}>
						{startSecond && (
							<Typewriter
								options={{
									strings: sentences[1].text,
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
						className="text-white mb-2 text-md font-normal text-left transition-opacity duration-1000"
						style={{ minHeight: '1.5em', opacity: startThird ? 1 : 0 }}>
						{startThird && (
							<Typewriter
								options={{
									strings: sentences[2].text,
									autoStart: true,
									cursor: '_',
									delay: typingSpeed,
								}}
							/>
						)}
					</p>

					{/* Proceed Button */}
					<MotionSection delay={0.2}>
						<div className="flex justify-center text-center" ref={glitch.ref}>
							<Rabbit
								size={64}
								weight="fill"
								className="text-white m-4"
								style={{ opacity: showProceedButton ? 1 : 0 }}
							/>
						</div>
						<p
							id="scripture"
							style={{ opacity: showProceedButton ? 1 : 0 }}
							className="text-white text-lg mb-2 text-center transition-opacity duration-1000">
							What should we choose?
						</p>
						<footer className="flex justify-center space-x-4 mt-0">
							<button
								style={{ opacity: showProceedButton ? 1 : 0 }}
								onClick={() => navigate('/novella/descent/redscene')}
								aria-label="Proceed to the next scene"
								className="button-89">
								Obedience
							</button>
							<button
								style={{ opacity: showProceedButton ? 1 : 0 }}
								onClick={() => navigate('/novella/descent/redscene')}
								aria-label="Proceed to the next scene"
								className="button-89">
								Knowledge
							</button>
						</footer>
					</MotionSection>
				</MotionSection>
			</Container>
		</Layout>
	);
};
