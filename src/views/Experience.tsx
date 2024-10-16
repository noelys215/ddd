import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	return (
		<Layout>
			<MotionSection delay={0.2}>
				<Card
					title="Experience"
					content="During my Software Engineer Internship at TechnologyAdvice, I quickly adapted to the company's tech stack, delivering high-impact feature enhancements within the first two weeks. I was responsible for developing scalable full-stack web applications using PHP/Laravel for the backend and Vue.js for the frontend, leading to a 20% increase in user engagement. 
        
        I worked closely with product managers, UX/UI designers, and QA teams in bi-weekly Agile sprints to align with business goals and ensure efficient project progress.
        
        I actively contributed to troubleshooting and testing, enhancing product reliability, while documenting technical workflows and API endpoints for future reference. This experience solidified my ability to deliver high-quality solutions in collaborative environments and tackle blockers effectively in daily standups."
					skills={skillsArray}
					buttonAction={() => navigate('/')}
					buttonText="Return Home"
				/>
			</MotionSection>
		</Layout>
	);
};
