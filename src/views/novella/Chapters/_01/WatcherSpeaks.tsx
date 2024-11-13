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
	const [startSentence, setStartSentence] = useState([true, false, false]);
	const [showNarrative, setShowNarrative] = useState([false, false, false]);
	const [showProceedButton, setShowProceedButton] = useState(false);
	const glitch = useGlitch();
	const typingSpeed = 30;

	const baseDelay = 2000;
	const sentences = useMemo(() => {
		const sentencesData = [
			{
				text: '“I am one who sees… but cannot act. What is it that you seek? Understanding, or the safety of ignorance?”',
				narrative:
					'The Watcher hovers, its gaze unyielding, scanning the depths of your intentions; The rabbit gasps, its form trembling with both fear and fascination.',
			},
			{
				text: '“In obedience lies simplicity, the way is guided, clean, and bright… yet obscured. In knowledge lies depth… but it fractures and distorts.”',
				narrative:
					'Watcher.sys fixes its gaze on you both, its presence as cold and unfeeling as the void itself',
			},
			{
				text: '“Choose, but know… the price is heavy on both paths. One binds, the other blinds… but only one knows.”',
				narrative: 'The rabbit looks to you, uncertain, its voice barely a whisper.',
			},
		];

		let cumulativeDelay = 0;
		return sentencesData.map((sentence) => {
			const duration = sentence.text.length * typingSpeed;
			const delay = cumulativeDelay;
			cumulativeDelay += duration + baseDelay;
			return { ...sentence, delay, duration };
		});
	}, [typingSpeed]);

	useEffect(() => {
		const timers = sentences.map((sentence, index) => {
			// Show each sentence based on calculated delays
			const sentenceTimer = setTimeout(() => {
				setStartSentence((prev) => {
					const updated = [...prev];
					updated[index] = true;
					return updated;
				});
			}, sentence.delay);

			// Show narrative after sentence finishes typing
			const narrativeTimer = setTimeout(() => {
				setShowNarrative((prev) => {
					const updated = [...prev];
					updated[index] = true;
					return updated;
				});
			}, sentence.delay + sentence.duration + baseDelay / 2);

			return [sentenceTimer, narrativeTimer];
		});

		// Show the Proceed button after the last sentence and narrative finish
		const proceedTimer = setTimeout(
			() => setShowProceedButton(true),
			sentences[sentences.length - 1].delay +
				sentences[sentences.length - 1].duration +
				baseDelay
		);
		timers.push([proceedTimer]);

		return () => timers.flat().forEach(clearTimeout);
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
				subtitle="The rabbit grows calmer, adopting a slightly more composed and reflective tone, though hints of doubt still linger."
				color="#1dafa1"
				navigateTo="/novella/descent/obedience"
			/>
		);
	}

	if (showYellowScene) {
		return (
			<ColorScene
				initialTimer={7}
				chapter="_chapterOne"
				title="Knowledge"
				scene="Scene no. 102"
				subtitle="The rabbit’s grows more animated, its eyes wide with curiosity and a hint of fear as it contemplates the unknown."
				color="#e6b800"
				navigateTo="/novella/descent/knowledge"
			/>
		);
	}

	return (
		<Layout title="_Watcher.sys">
			<Container color="#000000">
				<MotionSection delay={0.2}>
					<figure className="relative flex justify-center">
						<img
							src={watcher}
							alt="Watcher"
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

					<h1
						id="scripture"
						className="text-white mb-2 text-lg font-normal text-left transition-opacity duration-1000 "
						style={{ minHeight: '1.5em' }}>
						Watcher.sys
					</h1>

					{/* Sentences with Narratives */}
					{sentences.map((sentence, index) => (
						<div key={index}>
							{/* Display dialogue if it exists */}
							{sentence.text && (
								<p
									id="scripture"
									className={`text-white border-l-2 border-gray-500 pl-2 mb-3 text-md font-normal text-left transition-opacity duration-1000 ${
										startSentence[index] ? 'opacity-100' : 'opacity-0'
									}`}
									style={{ minHeight: '1.5em' }}>
									{startSentence[index] && (
										<Typewriter
											options={{
												strings: sentence.text,
												autoStart: true,
												cursor: index === sentences.length - 1 ? '_' : '',
												delay: typingSpeed,
											}}
										/>
									)}
								</p>
							)}

							{/* Fading Narrative Text */}
							{sentence.narrative && (
								<p
									className={`text-white mb-2 text-md font-normal text-left italic transition-opacity duration-1000 ${
										showNarrative[index] ? 'opacity-100' : 'opacity-0'
									}`}
									style={{ minHeight: '1.5em' }}>
									{sentence.narrative}
								</p>
							)}
						</div>
					))}

					{/* Proceed Button */}
					<MotionSection delay={0.2}>
						<div className="flex justify-center text-center" ref={glitch.ref}>
							<Rabbit size={64} weight="fill" className="text-white mb-2 mt-2" />
						</div>
						<p
							id="scripture"
							style={{ opacity: showProceedButton ? 1 : 0 }}
							className="text-white text-lg mb-2 text-center transition-opacity duration-1000">
							“Oh dear… do we have to choose? <br /> I feel like… like both paths are
							calling. <br /> But one leads forward, doesn’t it? And the other… who
							knows?”
						</p>
						<footer className="flex justify-center space-x-4 mt-0">
							<button
								style={{ opacity: showProceedButton ? 1 : 0 }}
								onClick={handleObedience}
								aria-label="Proceed to Obedience scene"
								className="button-89">
								Obedience
							</button>
							<button
								style={{ opacity: showProceedButton ? 1 : 0 }}
								onClick={handleKnowledge}
								aria-label="Proceed to Knowledge scene"
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
