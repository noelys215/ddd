import { motion, useReducedMotion } from 'framer-motion';

interface MotionSectionProps {
	children: React.ReactNode;
	delay?: number;
}

const MotionSection: React.FC<MotionSectionProps> = ({ children, delay = 0 }) => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			initial={{ y: shouldReduceMotion ? 0 : 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: shouldReduceMotion ? 0.2 : 0.8,
				delay: shouldReduceMotion ? 0 : delay,
			}}
			// style={{ marginBottom: '1.5rem' }}
		>
			{children}
		</motion.div>
	);
};

export default MotionSection;
