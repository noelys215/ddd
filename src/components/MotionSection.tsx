import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface MotionSectionProps {
	children: React.ReactNode;
	delay?: number;
}

const MotionSection: React.FC<MotionSectionProps> = ({ children, delay = 0 }) => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			initial={shouldReduceMotion ? false : { y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: shouldReduceMotion ? 0 : 0.45,
				delay: shouldReduceMotion ? 0 : delay,
			}}
			// style={{ marginBottom: '1.5rem' }}
		>
			{children}
		</motion.div>
	);
};

export default MotionSection;
