import Card from '../components/Card';
import Layout from '../components/Layout';
import MotionSection from '../components/MotionSection';

const skillsArray = [
	'Java/Spring Boot',
	'Node.js/Express.js',
	'Docker',
	'Agile/Scrum',
	'PHP/Laravel',
	'AWS Cloud Suite',
	'React/Next.js',
	'Redux/Toolkit',
	'HTML/CSS',
	'CI/CD',
	'Typescript/Javascript',
	'NoSQL/MySQL',
	'Git',
	'Jira',
];

export const Experience = () => {
	return (
		<Layout title="experience">
			<MotionSection delay={0.2}>
				<Card
					title="Experience"
					subtitle="TechnologyAdvice"
					job="Software Engineer Intern"
					year="May 2024 - Aug 2024"
					content="During my Software Engineer Internship at TechnologyAdvice, I hit the ground running, quickly adapting to the tech stack and delivering impactful feature updates within two weeks. I built scalable full-stack web applications using PHP/Laravel and Vue.js, boosting user engagement by 20%. 
					
					Collaborating with product managers, designers, and QA in Agile sprints, I ensured smooth project progress while documenting workflows and API endpoints. 
					
					I also tackled testing and troubleshooting head-on, enhancing reliability and refining my problem-solving skills during daily standups. 
					
					This hands-on experience sharpened my ability to deliver quality solutions in a dynamic, team-driven environment."
					skills={skillsArray}
				/>
			</MotionSection>
		</Layout>
	);
};
