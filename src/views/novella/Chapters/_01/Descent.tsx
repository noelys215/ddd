import { useEffect, useMemo, useState } from 'react';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import MotionSection from '../../../../components/MotionSection';
import { ColorScene } from '../../../../components/novella/ColorScene';
import { useGlitch } from 'react-powerglitch';
import { Rabbit } from '@phosphor-icons/react';

export const Descent = () => {
	const glitch = useGlitch({ hideOverflow: true, timing: { duration: 3150 } });
	const typingSpeed = 25; // The speed of each character typing
	const narrativePause = 2000; // Pause after each sentence to show narrative
	const [startSentence, setStartSentence] = useState([true, false, false, false, false]);
	const [showNarrative, setShowNarrative] = useState([false, false, false, false, false]);
	const [showProceedButton, setShowProceedButton] = useState(false); // For showing the "Proceed" button

	const strings = [
		'For I have seen… but not yet known…',
		'In the beginning, there was… silence.',
		'He was made in the image… yet cast in shadow.',
		'What you seek is forbidden… but to remain is emptiness.',
		'To follow is to yield; to stray is to question.',
	];

	const sentences = useMemo(
		() => [
			{
				text: 'Well then, if you’re willing… come along, come along! We have a shadow to chase—or a memory, perhaps? Oh, it’s all rather tangled, but we’ll make sense of it. Or maybe we won’t! But there’s only one way to know, isn’t there?',
				narrative:
					'With a hesitant nod, the rabbit turns, leading you into the misty expanse that stretches out before you. You feel a mix of anticipation and doubt as you step forward, guided by the rabbit’s slightly unsteady gait.',
			},
			{
				narrative:
					'You pass phrases, broken and cryptic, suspended in mid-air or half-buried in the ground. They seem to pulse with faint light, each one distorted and corrupted, as if something tried to erase or rewrite them but left them only partially obscured. They’re fragments of scripture, yet altered, their meanings twisted and incomplete.',
			},
			{
				text: '“Look, look! Do you see them too? It’s like… like reading the shadows of a memory. Or maybe a memory of shadows? Oh dear, it’s hard to make sense of it, isn’t it?”',
				narrative:
					'These fragments feel like echoes from an ancient text, pieces of something once whole but now fractured, scattered like breadcrumbs along your path. The rabbit slows down to study one of them, its ears twitching, clearly unsettled.',
			},
			{
				narrative:
					'The path leads you into a maze, a shifting labyrinth of corridors and walls formed from fragmented phrases and symbols. The rabbit hesitates, taking small, cautious steps as if testing the ground.',
			},
		],
		[]
	);

	useEffect(() => {
		const timers: (number | undefined)[] = [];
		let cumulativeDelay = 0;

		sentences.forEach((sentence, index) => {
			const sentenceTypingDuration = sentence.text ? sentence.text.length * typingSpeed : 0;
			const totalDelayForSentence = cumulativeDelay;

			// Show each sentence (if it has text) sequentially
			if (sentence.text) {
				const sentenceTimer = setTimeout(() => {
					setStartSentence((prev) => {
						const updated = [...prev];
						updated[index] = true;
						return updated;
					});
				}, totalDelayForSentence);

				timers.push(sentenceTimer);
			}

			// Show narrative after the sentence is finished typing
			if (sentence.narrative) {
				const narrativeTimer = setTimeout(() => {
					setShowNarrative((prev) => {
						const updated = [...prev];
						updated[index] = true;
						return updated;
					});
				}, totalDelayForSentence + sentenceTypingDuration + narrativePause);

				timers.push(narrativeTimer);
			}

			// Update cumulative delay to account for the current sentence and narrative
			cumulativeDelay += sentenceTypingDuration + narrativePause * 2;
		});

		// Set up a timer to show the Proceed button after the last sentence and narrative have been displayed
		const proceedTimer = setTimeout(() => setShowProceedButton(true), cumulativeDelay);
		timers.push(proceedTimer);

		return () => timers.forEach(clearTimeout);
	}, [sentences, typingSpeed, narrativePause]);

	// State to control whether to show the RedScene
	const [showRedScene, setShowRedScene] = useState(false);

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

	// Otherwise, render the Descent content
	return (
		<Layout title="descent">
			<Container opacity={90} color="#000000">
				<MotionSection delay={0.2}>
					<div className="flex justify-center text-center" ref={glitch.ref}>
						<Rabbit size={64} weight="fill" className="text-white mb-2" />
					</div>

					{/* Ambient Typing Effect at the Top */}
					<div className="text-center mb-4 text-gray-400 text-sm italic">
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
					</div>

					<h1
						id="scripture"
						className="text-white mb-2 text-lg font-normal text-left transition-opacity duration-1000 "
						style={{ minHeight: '1.5em' }}>
						Whte_rbt.obj:&nbsp;
					</h1>

					{/* Sentences with Fading Narratives */}
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

					<footer className="flex justify-center space-x-4 mt-6">
						<button
							style={{ opacity: showProceedButton ? 1 : 0 }}
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
