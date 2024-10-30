import { Badge } from '../../components/Badge';
import Layout from '../../components/Layout';
import { Meta } from '../../components/Meta';
import MotionSection from '../../components/MotionSection';
import { Slider } from '../../components/Silder';
import { Title } from '../../components/Title';

const imageArr = [
	{ src: '/works/gloria/gloria1.png', alt: 'gloria' },
	{ src: '/works/gloria/gloria2.png', alt: 'gloria' },
	{ src: '/works/gloria/gloria3.png', alt: 'gloria' },
	{ src: '/works/gloria/gloria4.png', alt: 'gloria' },
];

export const Gloria = () => {
	return (
		<Layout title="liftLab">
			<MotionSection delay={0.1}>
				<article
					className="border border-white rounded-md max-w-4xl w-full p-4 md:p-8 lg:p-12 bg-black shadow-md mx-auto opacity-95 overflow-hidden"
					style={{ backgroundColor: '#101010' }}
					aria-labelledby="gloria-title">
					{/* Title Section */}

					<Title title="Works">
						Gloria Fútbol <Badge>2022</Badge>
					</Title>

					{/* List Section */}
					<section aria-labelledby="gloria-details" className="my-4 text-white">
						<h2 id="gloria-details" className="sr-only">
							Project Details
						</h2>
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
									React | JavaScript | RTK Query | SportsAPI | Material UI
								</span>
							</li>
							<li>
								<Meta>Visit</Meta>
								<a
									href="https://gloriafutbol.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:underline">
									Gloria Fútbol
								</a>
							</li>
							<li>
								<Meta>Code</Meta>
								<a
									href="https://github.com/noelys215/Gloria-Futbol"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:underline">
									GitHub - Gloria Fútbol | Frontend
								</a>
							</li>
						</ul>
					</section>

					{/* Section Overview */}
					<section aria-labelledby="overview-heading">
						<MotionSection delay={0.1}>
							<h2
								id="overview-heading"
								className="text-white text-lg font-bold text-center my-5">
								Project Overview
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								Gloria Fútbol is a simple soccer live score app that tracks the top
								scores, stats, and records for some of the worlds most prestigious
								leagues.
								<br />
								<br />
								This app was made using ReactJS with React Router for the framework,
								Material UI for styling and Framer Motion for basic animations. With
								conditional rending and tinkering with the API I was able to style
								the app depending on the competition, league position and live
								stats.
								<br />
								<br />
								Features light/dark themes which is saved to localhost, and ability
								to check past scores for every league via calender.
								<br />
								<br />
								With this app, i experimented with RTK Query and its ability to
								fetch and cache data using simple, out of the box react hooks,
								making writing and handling data much easier than the traditional
								way, such as the fetch API.
							</p>
						</MotionSection>
					</section>

					{/* Key Features */}
					<section aria-labelledby="improvements-heading">
						<MotionSection delay={0.1}>
							<h2
								id="improvements-heading"
								className="text-white text-lg font-bold text-center my-5">
								Room for Improvement
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								Gloria Fútbol was designed to fetch live score as it happens,
								however due to limited resources I was unable to make the
								application render/refresh scores automatically. In future updates
								this will be implemented, along with the ability to favorite
								teams,matches and competitions.
							</p>
						</MotionSection>
					</section>

					{/* Screenshots */}
					<section aria-labelledby="screenshots-heading">
						<MotionSection delay={0.1}>
							<h2
								id="screenshots-heading"
								className="text-white text-lg font-bold text-center my-6">
								Screenshots
							</h2>
							<Slider array={imageArr} />
						</MotionSection>
					</section>
				</article>
			</MotionSection>
		</Layout>
	);
};
