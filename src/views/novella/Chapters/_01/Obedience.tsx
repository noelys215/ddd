import { useEffect, useMemo, useState } from 'react';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import { Rabbit } from '@phosphor-icons/react';
import MotionSection from '../../../../components/MotionSection';
import { ColorScene } from '../../../../components/novella/ColorScene';
import { useGlitch } from 'react-powerglitch';

export const Obedience = () => {
	const glitch = useGlitch({
		timing: {
			duration: 3000,
		},
		shake: {
			velocity: 8,
		},
		slice: {
			count: 4,
		},
	});
	// State to control whether to show the RedScene
	const [showRedScene, setShowRedScene] = useState(false);
	const typingSpeed = 30;

	const [startSecond, setStartSecond] = useState(false);
	const [startThird, setStartThird] = useState(false);
	const [showProceedButton, setShowProceedButton] = useState(false);

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

	// If showRedScene is true, render the RedScene component instead of the current content
	if (showRedScene) {
		return (
			<ColorScene
				chapter="_chapterOne"
				title="Watcher.exe"
				scene="Scene no. 101"
				color="#739BD0"
				navigateTo="/novella/descent/watcher"
			/>
		);
	}

	// Otherwise, render the Descent content
	return (
		<Layout title="descent">
			<Container opacity={90} color="#000000">
				<MotionSection delay={0.2}>
					<div className="flex justify-center text-center" ref={glitch.ref}>
						<Rabbit size={64} weight="fill" className="text-white mb-2" />
					</div>

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

					<footer className="flex justify-center space-x-4 mt-0">
						<button
							style={{ opacity: showProceedButton ? 1 : 0 }}
							// onClick={handleKnowledge}
							aria-label="Proceed to the next scene"
							className="button-89">
							Proceed
						</button>
					</footer>
				</MotionSection>
			</Container>
		</Layout>
	);
};
