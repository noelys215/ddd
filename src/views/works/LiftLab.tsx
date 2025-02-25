import { Badge } from '../../components/Badge';
import Layout from '../../components/Layout';
import { Meta } from '../../components/Meta';
import MotionSection from '../../components/MotionSection';
import { Slider } from '../../components/Silder';
import { Title } from '../../components/Title';

const imageArr = [
	{ src: '/works/liftlab/setup.png', alt: 'liftLab' },
	{ src: '/works/liftlab/details.png', alt: 'liftLab' },
];

export const LiftLab = () => {
	return (
		<Layout title="liftLab">
			<MotionSection delay={0.1}>
				<article
					className="border border-white rounded-md max-w-4xl w-full p-4 md:p-8 lg:p-12 bg-black shadow-md mx-auto opacity-95 overflow-hidden"
					aria-labelledby="liftlab-title"
					style={{ backgroundColor: '#101010' }}>
					{/* Title Section */}
					<Title title="Works">
						liftLab <Badge>2024</Badge>
					</Title>

					{/* List Section */}
					<section aria-labelledby="gloria-details" className="my-4 text-white">
						<ul className="space-y-1">
							<li>
								<Meta>Status</Meta>
								<span className="text-green-50 text-xs uppercase font-semibold px-1.5 py-0.5 rounded-sm bg-green-700">
									Online
								</span>
							</li>
							<li>
								<Meta>Stack</Meta>
								<span>
									React Native | Expo | UI Kitten | AsyncStorage | TypeScript
								</span>
							</li>
							<li>
								<Meta>Visit</Meta>
								<a
									href="https://apps.apple.com/us/app/liftlab-sbs/id6740149381"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:underline">
									LifeLab ( iOS )
								</a>
							</li>
							<li>
								<Meta>Github</Meta>
								<a
									href="https://github.com/noelys215/liftlab"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:underline">
									GitHub - liftLab
								</a>
							</li>
						</ul>
					</section>

					{/* Section Overview */}
					<section aria-labelledby="overview-heading">
						<MotionSection delay={0.1}>
							<h2 className="text-white text-lg font-bold text-center my-5">
								Project Overview
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								LiftLab is a React Native app designed as a companion for the&nbsp;
								<u>Stronger by Science SBS Hypertrophy program</u>. It helps users
								track their strength progression in the main lifts: Squat, Bench
								Press, and Deadlift. The app calculates and tracks 1-rep max (1RM)
								values, dynamically adjusts weights based on performance, and
								provides progressive tracking for weeks of workouts. All workout
								data is stored locally using AsyncStorage for easy access and
								persistence.
							</p>
						</MotionSection>
					</section>

					{/* Key Features */}
					<section aria-labelledby="features-heading">
						<MotionSection delay={0.1}>
							<h2 className="text-white text-lg font-bold text-center my-5">
								Key Features
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								<br />- One Rep Max Setup: Input and adjust Squat, Bench Press, and
								Deadlift 1RM values, with rounding options for weight calculations.
								<br />- Workout Progression: Target weights auto-adjust based on
								performance (miss or exceed reps).
								<br />- Progressive Weekly Tracking: Navigate between weeks to view
								and track workouts over time.
								<br />- Mark Workouts as Complete: Mark workouts as complete and
								store performance details for future weeks.
								<br />- Persistent Storage: Uses AsyncStorage to store workout data
								on the device.
							</p>
						</MotionSection>
					</section>

					{/* Tech Used */}
					<section aria-labelledby="tech-heading">
						<MotionSection delay={0.1}>
							<h2 className="text-white text-lg font-bold text-center my-5">
								Technologies Used
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								<br />- React Native: For cross-platform mobile development.
								<br />- Expo: Used for rapid development on both Android and iOS.
								<br />- UI Kitten: Provides customizable UI components.
								<br />- AsyncStorage: Enables persistent local data storage.
								<br />- TypeScript: Used to ensure code quality and strong typing.
							</p>
						</MotionSection>
					</section>

					{/* Future Enhancements */}
					<section aria-labelledby="improvements-heading">
						<MotionSection delay={0.1}>
							<h2 className="text-white text-lg font-bold text-center my-6">
								Future Enhancements
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								I plan to potentially move away from React Native and instead use
								SwiftUI to create a native iOS app. This would allow for more
								customization and better performance on iOS devices. Additionally, I
								would like to add testing to the app to ensure stability and
								reliability.
							</p>
						</MotionSection>
					</section>

					{/* Acknowledgements */}
					<section aria-labelledby="acknowledgements-heading">
						<MotionSection delay={0.1}>
							<h4 className="text-white text-lg font-bold text-center my-5">
								Acknowledgements
							</h4>
							<p className="text-white text-sm md:text-base leading-relaxed">
								Special thanks to Stronger by Science for developing the program
								this app supports, and to UI Kitten and the React Native Community
								for their open-source tools.
							</p>

							<a
								href="https://www.strongerbyscience.com/program-bundle/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-pink-500 hover:underline">
								Source: Stronger by Science Program Bundle
							</a>
						</MotionSection>
					</section>

					{/* Screenshots */}
					<section aria-labelledby="screenshots-heading">
						<MotionSection delay={0.1}>
							<h4 className="text-white text-lg font-bold text-center my-6">
								Screenshots
							</h4>
							<Slider array={imageArr} width={'65%'} />
						</MotionSection>
					</section>
				</article>
			</MotionSection>
		</Layout>
	);
};
