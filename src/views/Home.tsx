import React from 'react';
import BioCard from '../components/BioCard';
import Layout from '../components/Layout';
import whomImage from '../assets/whom.jpeg';

export const Home: React.FC = () => {
	return (
		<Layout>
			<BioCard
				imageUrl={whomImage}
				name="Henry Betancourth"
				subtitle="Software Engineer"
				githubUrl="https://github.com/noelys215"
				linkedinUrl="https://www.linkedin.com/in/henry-betancourth/"
				text="Hi there! I’m a self-motivated full-stack software engineer based in Southern New Jersey. card        
        I take great pleasure in designing websites that are not only visually appealing but also easy to use. I’m all about simplicity – in both design and code.
        While JavaScript is my go-to language, with a strong grasp of React and Next.js, I consider myself language-agnostic and am comfortable working with any programming language. I’m always on the lookout for new technologies to master, and staying current while expanding my skill set is something I’m passionate about.
        During college, I had the opportunity to learn and work with AWS and Java/Spring Boot, further broadening my expertise in backend development and cloud services.
        I invite you to click around and explore my website to see the projects and work that I’m most proud of. I hope you’ll find the creativity and precision in my work as exciting as I do."
			/>
		</Layout>
	);
};
