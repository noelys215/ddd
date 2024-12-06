import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import { Rabbit } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useGlitch } from 'react-powerglitch';
import MotionSection from '../../../../components/MotionSection';
import { useEffect, useMemo, useState } from 'react';
import { setBionicReading } from '../../../../hooks/setBionicReading';

export const Calling = () => {
	const navigate = useNavigate();
	const glitch = useGlitch({ hideOverflow: true, timing: { duration: 3150 } });

	const typingSpeed = 25; // The speed of each character typing
	const narrativePause = 2200; // Pause after each sentence to show narrative
	const [startSentence, setStartSentence] = useState([true, false, false, false, false, false]);
	const [showNarrative, setShowNarrative] = useState([false, false, false, false, false]);
	const [showProceedButton, setShowProceedButton] = useState(false); // For showing the "Proceed" button

	// Preprocess sentences for Bionic Reading
	const sentences = useMemo(() => {
		return [
			{
				text: '“There’s something of mine out there… or perhaps it’s you....yours? I can’t quite remember……”',
				narrative:
					'The rabbit’s voice is soft, carrying a sense of confusion mixed with a strange longing, as if it’s looking for something it has lost but cannot name.',
			},
			{
				text: '“Oh, but it must be out there! I can feel it, a little piece of myself… just waiting. Waiting to be found! Would you… help me look for it?”',
				narrative:
					'A moment of silence stretches between you and the rabbit, broken only by faint whispers and soft echoes in the background, as if the shadows themselves are alive, murmuring secrets.',
			},
			{
				text: '“Please… I don’t think I can do this alone. But together—yes, yes, together we might find it. Or find me, rather. Or… is it you I’m looking for?',
				narrative:
					'The rabbit’s head tilts in sudden thought, and it peers at you closely, its bright eyes searching yours, as if trying to recognize a reflection.',
			},
		].map((sentence) => ({
			...sentence,
			bionicText: setBionicReading(sentence.text), // Preprocess the text for Bionic Reading
			bionicNarrative: setBionicReading(sentence.narrative), // Preprocess the narrative for Bionic Reading
		}));
	}, []);

	useEffect(() => {
		const timers: ReturnType<typeof setTimeout>[] = [];
		let cumulativeDelay = 0;

		sentences.forEach((_, index) => {
			const sentenceTypingDuration = sentences[index].text.length * typingSpeed;
			const totalDelayForSentence = cumulativeDelay;

			// Show each sentence sequentially
			const sentenceTimer = setTimeout(() => {
				setStartSentence((prev) => {
					const updated = [...prev];
					updated[index] = true;
					return updated;
				});
			}, totalDelayForSentence);

			timers.push(sentenceTimer);

			// Show narrative after the sentence is finished typing
			if (sentences[index].narrative) {
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
		<Layout title="_calling">
			<Container>
				<MotionSection delay={0.2}>
					<div className="flex justify-center text-center" ref={glitch.ref}>
						<Rabbit size={64} weight="fill" className="text-white mb-2" />
					</div>

					<h1
						id="scripture"
						className="text-white mb-2 text-lg font-normal text-left transition-opacity duration-1000"
						style={{ minHeight: '1.5em' }}>
						Whte_rbt.obj:&nbsp;
					</h1>

					{/* Sentences with Fading Narratives */}
					{sentences.map((sentence, index) => (
						<div key={index}>
							<p
								id="scripture"
								className={`text-white border-l-2 border-gray-500 pl-2 mb-3 text-md font-normal text-left transition-opacity duration-1000 ${
									startSentence[index] ? 'opacity-100' : 'opacity-0'
								}`}
								style={{ minHeight: '1.5em', wordWrap: 'break-word' }}>
								{startSentence[index] && (
									<Typewriter
										options={{
											strings: sentence.bionicText,
											autoStart: true,
											cursor: index === sentences.length - 1 ? '_' : '',
											delay: typingSpeed,
										}}
									/>
								)}
							</p>

							{/* Fading Narrative Text */}
							{sentence.narrative && (
								<p
									className={`text-white break-words mb-2 text-md font-normal text-left italic transition-opacity duration-1000 ${
										showNarrative[index] ? 'opacity-100' : 'opacity-0'
									}`}
									style={{ minHeight: '1.5em' }}
									dangerouslySetInnerHTML={{
										__html: sentence.bionicNarrative,
									}}></p>
							)}
						</div>
					))}

					<footer className="flex justify-center space-x-4 mt-6">
						<button
							style={{ opacity: showProceedButton ? 1 : 0 }}
							onClick={() => navigate('/novella/descent')}
							aria-label="Descend into the unknown"
							className="button-89">
							Follow
						</button>
						<button
							style={{ opacity: showProceedButton ? 1 : 0 }}
							onClick={() => navigate('/')}
							aria-label="Navigate to Home"
							className="button-89">
							Retreat
						</button>
					</footer>
				</MotionSection>
			</Container>
		</Layout>
	);
};
