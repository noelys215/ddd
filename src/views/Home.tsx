import React from 'react';
import BioCard from '../components/BioCard';
import Layout from '../components/Layout';
import whomImage from '../assets/whom.jpeg';
import Card from '../components/Card';

export const Home: React.FC = () => {
	return (
		<Layout>
			<BioCard
				imageUrl={whomImage}
				name="Henry Betancourth"
				subtitle="Software Engineer"
				githubUrl="https://github.com/noelys215"
				linkedinUrl="https://www.linkedin.com/in/henry-betancourth/"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			/>
			<Card
				title="Card Title"
				content="Hendrerit congue dui praesent erat volutpat. Egestas proin lacinia vitae vehicula; nunc tempus dui. Aptent eget purus integer orci integer turpis sollicitudin vulputate. Laoreet eleifend mi laoreet sagittis platea mattis. Facilisi aptent massa blandit mauris euismod est aptent natoque. Semper nec sollicitudin eros dapibus pulvinar quam curae. Curae risus purus sem dapibus integer, non a. Tincidunt viverra eleifend feugiat; nascetur curae class magnis. Per penatibus metus convallis erat ex eleifend ridiculus. Suspendisse nam nullam penatibus laoreet hendrerit."
			/>
		</Layout>
	);
};
