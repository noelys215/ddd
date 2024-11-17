import { useEffect, useMemo, useState } from 'react';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import { Rabbit } from '@phosphor-icons/react';
import MotionSection from '../../../../components/MotionSection';
import { useGlitch } from 'react-powerglitch';
import { useNavigate } from 'react-router-dom';

export const Obedience = () => {
	const glitch = useGlitch({
		timing: { duration: 3000 },
		shake: { velocity: 8 },
		slice: { count: 4 },
	});
	const navigate = useNavigate();

	const typingSpeed = 25; // The speed of each character typing
	const narrativePause = 2000; // Pause after each sentence to show narrative
	const [startSentence, setStartSentence] = useState([true, false, false, false, false, false]);
	const [showNarrative, setShowNarrative] = useState([false, false, false, false, false]);
	const [showProceedButton, setShowProceedButton] = useState(false); // For showing the "Proceed" button

	const sentences = useMemo(
		() => [
			{
				text: '“Oh dear, oh dear… it feels quieter, doesn’t it? Calmer, perhaps. Not sure I like it—it’s as if the shadows are sleeping now, yes? But… but isn’t that what we wanted? Oh, so very strange…”',
				narrative:
					'The rabbit pauses, glancing around, as though searching for something familiar yet just out of reach.',
			},
			{
				text: '“You—you there, guiding me through all this! Do you… do you think it’s better this way? Like drifting, ever so gently, isn’t it, or slipping into water that’s neither cold nor warm. Hm, not frightening exactly, but… still a little peculiar, don’t you think?”',
				narrative:
					'It glances back, its eyes bright but less anxious, as if reassured by the sense of stability that obedience has granted them both.',
			},
			{
				text: '“It’s funny, isn’t it? Following a path already laid, even if it’s hidden in shadows. There’s comfort, yes—comfort in letting things remain as they are, in knowing something out there is holding the strings.”',
				narrative:
					'The rabbit ponders this, ears twitching as if listening for something only it can hear.',
			},
			{
				text: '“Oh, but listen to me ramble! It’s just that—well, something in me feels whole-er than before, almost… secure.”',
				narrative:
					'It fidgets slightly, then lets out a soft sigh, sounding almost comforted by the realization.',
			},
			{
				text: 'I wonder… perhaps I’m not so lost after all! Not if there’s a hand guiding me, a voice telling me which way to turn. But then, does that mean I am just… oh dear, I shudder to think it! Just a shadow, a reflection! Only what you make of me.',
			},
			{
				text: '“But oh, maybe that’s alright. To be a shadow is still to be something, yes? A purpose of sorts. And if I follow… then I am not alone in this. No, no—not alone at all.”',
			},
		],
		[]
	);

	useEffect(() => {
		const timers: ReturnType<typeof setTimeout>[] = [];
		let cumulativeDelay = 0;

		sentences.forEach((sentence, index) => {
			const sentenceTypingDuration = sentence.text.length * typingSpeed;
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
		<Layout title="_obedience">
			<Container opacity={90} color="#000000">
				<MotionSection delay={0.2}>
					<div className="flex justify-center text-center" ref={glitch.ref}>
						<Rabbit
							size={64}
							weight="fill"
							className="text-white mb-2"
							onClick={() => navigate('/')} //remove after testing
						/>
					</div>

					{/* Sentences with Fading Narratives */}
					{sentences.map((sentence, index) => (
						<div key={index}>
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

					<footer className="flex justify-center space-x-4 mt-0">
						<button
							style={{ opacity: showProceedButton ? 1 : 0 }}
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
