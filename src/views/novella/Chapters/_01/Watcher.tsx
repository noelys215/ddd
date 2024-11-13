import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import watcher from '../../../../assets/watcher.gif';
import MotionSection from '../../../../components/MotionSection';
import Typewriter from 'typewriter-effect';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';

export const Watcher = () => {
	const navigate = useNavigate();
	const typingSpeed = 25; // The speed of each character typing
	const narrativePause = 1500; // Pause after each sentence to show narrative
	const [startSentence, setStartSentence] = useState([true, false, false, false, false]);
	const [showNarrative, setShowNarrative] = useState([false, false, false, false, false]);
	const [showProceedButton, setShowProceedButton] = useState(false); // For showing the "Proceed" button

	const sentences = useMemo(
		() => [
			{
				narrative:
					'At the heart of the maze, you reach an open area where the shadows seem darker, heavier, as though something immense and invisible were looming above. The fragments of scripture give way to a single, glowing phrase, flickering erratically:',
			},
			{
				text: '"For what is seen is fleeting, but what is unseen is eternal…"',
			},
			{
				narrative: 'Watcher.sys appears:',
			},
			{
				narrative:
					'Almost formless at first, flickering in and out of focus. It coalesces into a digital being—Watcher.sys—with a spinning, piercing eye that seems to stare right through you, as though seeing something deeper, hidden within.',
			},
			{
				narrative:
					'Its words echo and distort, creating an aura of ancient knowledge shrouded in mystery.',
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

	return (
		<Layout title="_contact">
			<Container color="#000000">
				<MotionSection delay={0.2}>
					<figure className="relative flex justify-center">
						<img
							src={watcher}
							alt="Watcher image"
							className="object-cover rounded-full opacity-90"
							style={{
								width: '300px',
								maskImage:
									'radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)',
								WebkitMaskImage:
									'radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)',
							}}
						/>
					</figure>
					<hr />

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

					{/* Proceed Button */}
					<MotionSection delay={0.2}>
						<footer className="flex justify-center space-x-4 mt-6">
							<button
								style={{ opacity: showProceedButton ? 1 : 0 }}
								onClick={() => navigate('/novella/descent/watcherSpeaks')}
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
