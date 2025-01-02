import React from 'react';
import BioCard from '../components/BioCard';
import Layout from '../components/Layout';
import whomImage from '../assets/whom.jpeg';
import MotionSection from '../components/MotionSection';

export const Home: React.FC = () => {
	return (
		<Layout title="home">
			<MotionSection delay={0.2}>
				<BioCard
					imageUrl={whomImage}
					name="Henry Betancourth"
					subtitle="Software Engineer"
					githubUrl="https://github.com/noelys215"
					linkedinUrl="https://www.linkedin.com/in/henry-betancourth/"
					text="Hey, hey! 
					
					I’m a full-stack software engineer from Southern NJ, always cooking up clean, simple, and functional designs that look cool and work even cooler. 
					JavaScript is my bread and butter (React and Next.js, oh yeah!), but I’m language-flexible—give me any tech, and I’ll make it sing. I’ve got backend chops too, with Spring Boot and AWS in my toolkit, thanks to some fun college projects. 
					Obsessed with learning new things and pushing boundaries, I keep my skills sharp and my creativity sharper. So go ahead, click around, and explore—there’s a lot of nifty stuff here to geek out on!
					[ hidden areas of this website is still under construction, explore at you discretion ] 
				"
				/>
			</MotionSection>
		</Layout>
	);
};
