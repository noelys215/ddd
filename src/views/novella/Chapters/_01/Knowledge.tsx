import { useEffect, useMemo, useState } from 'react';
import { Container } from '../../../../components/Container';
import Layout from '../../../../components/Layout';
import Typewriter from 'typewriter-effect';
import MotionSection from '../../../../components/MotionSection';
import { useGlitch } from 'react-powerglitch';
import { Rabbit } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export const Knowledge = () => {
	const glitch = useGlitch({
		timing: { duration: 3000 },
		shake: { velocity: 12 },
		slice: { count: 6 },
	});

	const navigate = useNavigate();

	const typingSpeed = 25;
	const narrativePause = 2000;
	const [startSentence, setStartSentence] = useState([true, false, false, false, false, false]);
	const [showNarrative, setShowNarrative] = useState([false, false, false, false, false]);
	const [showProceedButton, setShowProceedButton] = useState(false);

	const sentences = useMemo(
		() => [
			{
				text: 'Oh no, no, no! This feels… unsteady, doesn’t it? Like grasping at something slippery—like sand slipping through your fingers! There’s more here, I think—oh yes, I feel it… but what is it? Do you feel it too? Or is it only me?',
				narrative:
					'It glances around, eyes darting as if trying to catch glimpses of something hidden.',
			},
			{
				text: '“Oh, to see everything, yes! But it’s like—oh dear! It’s like staring into water and seeing only ripples, nothing beneath! Do you think… maybe there’s something wrong with me? Am I—am I broken?”',
				narrative:
					'It clutches its head, shaking slightly, as if burdened by thoughts that have no clear answers.',
			},
			{
				text: '“You’re guiding me… but I feel like I’m pulling away, like I’m slipping from your grasp, bit by bit! And yet… I want to know—must know! Every fragment, every piece of this… place. But, oh dear… it’s like the more I know, the less of me there is! Isn’t that funny? Isn’t that… terrifying?”',
				narrative:
					'The rabbit stares ahead, eyes wide, filled with a strange mix of dread and curiosity.',
			},
			{
				text: '“Have you ever felt like… you’re not really here? Like you’re fading with each answer? I—I don’t know what’s left of me anymore, not really. Just questions and echoes and… and more questions! Do you know what I mean? Do you?”',
				narrative:
					'The rabbit becomes more erratic, overwhelmed by fragments of thought and questions that refuse to settle.',
			},
			{
				text: '“I feel like a puzzle that’s missing pieces… or maybe there are just too many pieces, and none of them fit quite right! It’s maddening, yes, but… maybe it’s better than the silence. Better than being still.”',
			},
			{
				narrative: 'The rabbit laughs, a nervous, jittery sound.”',
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

			// Show narrative after the sentence is finished typing (or immediately if no text)
			if (sentence.narrative) {
				const narrativeDelay =
					totalDelayForSentence + sentenceTypingDuration + narrativePause;
				const narrativeTimer = setTimeout(() => {
					setShowNarrative((prev) => {
						const updated = [...prev];
						updated[index] = true;
						return updated;
					});
				}, narrativeDelay);
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
		<Layout title="_knowledge">
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
