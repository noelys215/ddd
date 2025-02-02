import Layout from '../../components/Layout';
import MotionSection from '../../components/MotionSection';
import { Title } from '../../components/Title';
import { Badge } from '../../components/Badge';
import { Meta } from '../../components/Meta';
import { Slider } from '../../components/Silder';

const imageArr = [
	{ src: '/works/atalanta/running.gif', alt: 'atalanta' },
	{ src: '/works/atalanta/createAccount.png', alt: 'atalanta' },
	{ src: '/works/atalanta/confirmEmail.png', alt: 'atalanta' },
	{ src: '/works/atalanta/emailVerified.png', alt: 'atalanta' },
	{ src: '/works/atalanta/login.png', alt: 'atalanta' },
	{ src: '/works/atalanta/shopping.png', alt: 'atalanta' },
	{ src: '/works/atalanta/addCart.png', alt: 'atalanta' },
	{ src: '/works/atalanta/payment.png', alt: 'atalanta' },
	{ src: '/works/atalanta/orderPaid.png', alt: 'atalanta' },
	{ src: '/works/atalanta/orderConfirm.png', alt: 'atalanta' },
];

const Atalanta = () => {
	return (
		<Layout title="atalanta">
			<MotionSection delay={0.1}>
				<article
					className="border border-white rounded-md max-w-4xl w-full p-4 md:p-8 lg:p-12 bg-black shadow-md mx-auto opacity-95 overflow-hidden"
					aria-labelledby="atalanta-title"
					style={{ backgroundColor: '#101010' }}>
					{/* Title Section */}
					<Title title="Works">
						Atalanta A.C. <Badge>2024</Badge>
					</Title>

					{/* List Section */}
					<section aria-labelledby="atalanta-details" className="my-4 text-white">
						<ul className="space-y-1 ">
							<li>
								<Meta>Status</Meta>
								<span className="text-green-50 text-xs uppercase font-semibold px-1.5 py-0.5 rounded-sm bg-green-700">
									Online
								</span>
							</li>
							<li>
								<Meta>Stack</Meta>
								<span>
									React | TypeScript | Vite | Material UI | Redux Toolkit | AWS |
									Stripe | Docker | Laravel
								</span>
							</li>
							<li>
								<Meta>Visit</Meta>
								<a
									href="https://www.atalanta.world"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:underline">
									Atalanta A.C.
								</a>
							</li>
							<li>
								<Meta>Frontend Code</Meta>
								<a
									href="https://github.com/noelys215/atalanta_frontend_ii/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:underline">
									GitHub - Atalanta A.C. | Frontend
								</a>
							</li>
							<li>
								<Meta>Backend Code</Meta>
								<a
									href="https://github.com/noelys215/atalanta_laravel"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:underline">
									GitHub - Atalanta A.C. | Backend
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
								Atalanta A.C. is a sportswear platform offering cutting-edge
								products and a sleek, seamless shopping experience. It allows users
								to browse and purchase items, create accounts to track orders, or
								opt for guest checkout with order tracking via email. Built with
								React and Laravel, the application provides secure payments via
								Stripe and real-time order management.
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
								- Account Creation & Order Tracking: Users can create accounts or
								track orders via guest checkout using email.
								<br />
								- Secure Payments via Stripe: Ensures secure and seamless payment
								processing.
								<br />
								- Responsive Design: Fully responsive UI across all devices.
								<br />
								- Order Confirmation Emails: Automated emails provide users with
								order details.
								<br />- Cloud Hosting: Hosted on AWS, with assets managed through S3
								and data stored in MySQL RDS.
							</p>
						</MotionSection>
					</section>

					{/* Architecture */}
					<section aria-labelledby="architecture-heading">
						<MotionSection delay={0.1}>
							<h2 className="text-white text-lg font-bold text-center my-6">
								Architecture
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								The application’s frontend is built with React and TypeScript,
								powered by Vite for fast builds. The backend, built with Laravel,
								manages API endpoints and stores data in MySQL RDS, with assets
								handled by AWS S3. Deployed using Docker and AWS App Runner, the
								CI/CD pipeline ensures seamless updates via AWS ECR.
							</p>
						</MotionSection>
					</section>

					{/* Screenshots */}
					<section aria-labelledby="screenshots-heading">
						<MotionSection delay={0.1}>
							<h4 className="text-white text-lg font-bold text-center my-6">
								Screenshots
							</h4>
							<Slider array={imageArr} />
						</MotionSection>
					</section>

					{/* Future Enhancements */}
					<section aria-labelledby="improvements-heading">
						<MotionSection delay={0.1}>
							<h2 className="text-white text-lg font-bold text-center my-6">
								Future Enhancements
							</h2>
							<p className="text-white text-sm md:text-base leading-relaxed">
								Planned improvements include address auto-completion, enhanced
								CAPTCHA for security, analytics integration, SMS verification, and a
								redesign of product pages for a more luxurious aesthetic. I also
								plan to implement PayWright testing throughout the application for
								better reliability.
							</p>
						</MotionSection>
					</section>
				</article>
			</MotionSection>
		</Layout>
	);
};

export default Atalanta;
