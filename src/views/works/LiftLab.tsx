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
				<div
					className="border border-white rounded-md max-w-4xl w-full p-4 md:p-8 lg:p-12 bg-black shadow-md mx-auto opacity-95 overflow-hidden"
					style={{ backgroundColor: '#101010' }}>
					{/* Title Section */}
					<Title title="Works">
						liftLab <Badge>2024</Badge>
					</Title>

					{/* List Section */}
					<ul className="my-4 space-y-1 text-white">
						<li>
							<Meta>Status</Meta>
							<span className="text-yellow-50 text-xs uppercase font-semibold px-1.5 py-0.5 rounded-sm bg-yellow-600">
								On Hold
							</span>
						</li>
						<li>
							<Meta>Stack</Meta>
							<span>React Native | Expo | UI Kitten | AsyncStorage | TypeScript</span>
						</li>

						<li>
							<Meta>Github</Meta>
							<a
								href="https://github.com/noelys215/liftlab"
								target="_blank"
								rel="noopener noreferrer"
								className="text-pink-500 hover:underline">
								GitHub - Atalanta A.C. | Frontend
							</a>
						</li>
					</ul>

					{/* Section Overview */}
					<MotionSection delay={0.1}>
						<h4 className="text-white text-lg font-bold text-center my-5">
							Project Overview
						</h4>
						<p className="text-white text-sm md:text-base leading-relaxed">
							LiftLab is a React Native app designed as a companion for the Stronger
							by Science powerlifting program. It helps users track their strength
							progression in the main lifts: Squat, Bench Press, and Deadlift. The app
							calculates and tracks 1-rep max (1RM) values, dynamically adjusts
							weights based on performance, and provides progressive tracking for
							weeks of workouts. All workout data is stored locally using AsyncStorage
							for easy access and persistence.
						</p>
					</MotionSection>

					{/* Key Features */}
					<MotionSection delay={0.1}>
						<h4 className="text-white text-lg font-bold text-center my-5">
							Key Features
						</h4>
						<p className="text-white text-sm md:text-base leading-relaxed">
							<br />- One Rep Max Setup: Input and adjust Squat, Bench Press, and
							Deadlift 1RM values, with rounding options for weight calculations.
							<br />- Workout Progression: Target weights auto-adjust based on
							performance (miss or exceed reps).
							<br />- Progressive Weekly Tracking: Navigate between weeks to view and
							track workouts over time.
							<br />- Mark Workouts as Complete: Mark workouts as complete and store
							performance details for future weeks.
							<br />- Persistent Storage: Uses AsyncStorage to store workout data on
							the device.
						</p>
					</MotionSection>

					{/* Tech Used */}
					<MotionSection delay={0.1}>
						<h4 className="text-white text-lg font-bold text-center my-5">
							Key Features
						</h4>
						<p className="text-white text-sm md:text-base leading-relaxed">
							<br />- React Native: For cross-platform mobile development.
							<br />- Expo: Used for rapid development on both Android and iOS.
							<br />- UI Kitten: Provides customizable UI components.
							<br />- AsyncStorage: Enables persistent local data storage.
							<br />- TypeScript: Used to ensure code quality and strong typing.
						</p>
					</MotionSection>
					{/* Acknowledgements */}
					<MotionSection delay={0.1}>
						<h4 className="text-white text-lg font-bold text-center my-5">
							Acknowledgements
						</h4>
						<p className="text-white text-sm md:text-base leading-relaxed">
							Special thanks to Stronger by Science for developing the program this
							app supports, and to UI Kitten and the React Native Community for their
							open-source tools.
						</p>
					</MotionSection>

					{/* Image Section */}
					{/* Screenshots */}
					<MotionSection delay={0.1}>
						<h4 className="text-white text-lg font-bold text-center my-6">
							Screenshots
						</h4>
						<Slider array={imageArr} />
					</MotionSection>
				</div>
			</MotionSection>
		</Layout>
	);
};
