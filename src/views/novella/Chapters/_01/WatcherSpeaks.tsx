import { useEffect, useMemo, useState } from 'react';
import watcher from '../../../../assets/watcher.gif';
import MotionSection from '../../../../components/MotionSection';
import Typewriter from 'typewriter-effect';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import { useGlitch } from 'react-powerglitch';
import { Rabbit } from '@phosphor-icons/react';
import { ColorScene } from '../../../../components/novella/ColorScene';

export const WatcherSpeaks = () => {
	const [startSecond, setStartSecond] = useState(false);
	const [startThird, setStartThird] = useState(false);
	const [showProceedButton, setShowProceedButton] = useState(false);

	const glitch = useGlitch();
	const typingSpeed = 30;

	// Define each sentence with calculated delays based on sentence length
	const sentences = useMemo(() => {
		const baseDelay = 2000;
		const sentencesData = [
			{
				text: '“I am one who sees… but cannot act. What is it that you seek? Understanding, or the safety of ignorance?”',
			},
			{
				text: '“In obedience lies simplicity, the way is guided, clean, and bright… yet obscured. In knowledge lies depth… but it fractures and distorts.”',
				showSetter: setStartSecond,
			},
			{
				text: '“Choose, but know… the price is heavy on both paths. One binds, the other blinds… but only one knows.”',
				showSetter: setStartThird,
			},
		];

		// Calculate cumulative delay for each sentence
		let cumulativeDelay = 0;
		return sentencesData.map((sentence) => {
			const duration = sentence.text.length * typingSpeed;
			const delay = cumulativeDelay;
			cumulativeDelay += duration + baseDelay;
			return { ...sentence, delay, duration };
		});
	}, [typingSpeed]);

	useEffect(() => {
		// Set timers based on calculated delays for each sentence
		const timers = sentences.map((sentence, index) => {
			return setTimeout(() => {
				if (sentence.showSetter) sentence.showSetter(true);

				// Show proceed button after the third sentence
				if (index === sentences.length - 1) setShowProceedButton(true);
			}, sentence.delay);
		});

		// Cleanup timers on component unmount
		return () => timers.forEach((timer) => clearTimeout(timer));
	}, [sentences]);

	// State to control whether to show the next scenes
	const [showBlueScene, setShowBlueScene] = useState(false);
	const [showYellowScene, setShowYellowScene] = useState(false);
	const handleObedience = () => setShowBlueScene(true);
	const handleKnowledge = () => setShowYellowScene(true);

	// If showBlueScene or showYellowScene is true, render the corresponding ColorScene component
	if (showBlueScene) {
		return (
			<ColorScene
				initialTimer={7}
				chapter="_chapterOne"
				title="Obedience"
				scene="Scene no. 102"
				subtitle="The rabbit grows calmer, adopting a slightly more composed and reflective tone, 
        though hints of doubt still linger as it tries to understand its own role in the journey."
				color="#1dafa1"
				navigateTo="/novella/descent/obedience"
			/>
		);
	}

	if (showYellowScene) {
		return (
			<ColorScene
				chapter="_chapterOne"
				title="Knowledge"
				scene="Scene no. 102"
				color="#ffcc00"
				navigateTo="/novella/descent/obedience"
			/>
		);
	}

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
						className="text-white mb-2 text-md font-normal text-left transition-opacity duration-1000 "
						style={{ minHeight: '1.5em' }}>
						Watcher.exe:
					</p>
					<p
						id="scripture"
						className="text-white mb-2 text-md font-normal text-left transition-opacity duration-1000 border-l-2 border-gray-500 pl-2"
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
						className="text-white mb-2 text-md font-normal text-left transition-opacity duration-1000 border-l-2 border-gray-500 pl-2"
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
						className="text-white mb-2 text-md font-normal text-left transition-opacity duration-1000 border-l-2 border-gray-500 pl-2"
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

					<MotionSection delay={0.2}>
						{/* Proceed Button */}
						<div className="flex justify-center text-center" ref={glitch.ref}>
							<Rabbit size={64} weight="fill" className="text-white mb-2 mt-2" />
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
								onClick={handleObedience}
								aria-label="Proceed to the next scene"
								className="button-89">
								Obedience
							</button>
							<button
								style={{ opacity: showProceedButton ? 1 : 0 }}
								onClick={handleKnowledge}
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
