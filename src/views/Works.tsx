import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MotionSection from '../components/MotionSection';
import { WorkGridItem } from '../components/WorkGridItem';
import { CaretRight } from '@phosphor-icons/react';

// Images
import gloriaThumb from '../assets/works/gloria/gloria4.png';
import atalantaThumb from '../assets/works/atalanta/atalanta1.png';
import liftLabThumb from '../assets/works/liftlab/liftLabThumb.png';
import roshamboThumb from '../assets/works/roshambo/roshambo.png';
import calcThumb from '../assets/works/calcper/CalcPer.png';

export const Works: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Layout title="works">
			<MotionSection delay={0.1}>
				<div className="border border-white rounded-md max-w-5xl w-full p-6 bg-black shadow-md mx-auto opacity-95">
					<div className="mb-5">
						<a
							onClick={() => navigate('/')}
							className="text-pink-500 hover:underline cursor-pointer">
							Home
						</a>
						<CaretRight
							size={14}
							weight="bold"
							className="mx-1 text-pink-500 inline-flex"
						/>
						<h3 className="inline-block text-white text-2xl font-medium">Works</h3>
					</div>

					{/* Grid Layout - 2 columns */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{/* Work Items */}
						<WorkGridItem
							title="Atalanta A.C."
							description="A semi-modern athletic clothing e-commerce store."
							imageUrl={atalantaThumb}
							link="/works/atalanta"
						/>

						<WorkGridItem
							title="LiftLab"
							description="A companion app for the Stronger by Science weightlifting program."
							imageUrl={liftLabThumb}
							link="#"
						/>

						<WorkGridItem
							title="Gloria Fútbol"
							description="Simple soccer/futbol app with live scores, charts and tables."
							imageUrl={gloriaThumb}
							link="#"
						/>

						<WorkGridItem
							title="Ro-Sham-Bo"
							description="A fun little rock-paper-scissor-spock game."
							imageUrl={roshamboThumb}
							link="https://spock-game.vercel.app/"
						/>

						<WorkGridItem
							title="Percentage Calculator"
							description="Coupon Percentage Calculator."
							imageUrl={calcThumb}
							link="https://coupon-henna.vercel.app/"
						/>
					</div>
				</div>
			</MotionSection>
		</Layout>
	);
};
