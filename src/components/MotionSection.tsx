import React from 'react';
import { motion } from 'framer-motion';

interface MotionSectionProps {
	children: React.ReactNode;
	delay?: number;
}

const MotionSection: React.FC<MotionSectionProps> = ({ children, delay = 0 }) => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay }}
			style={{ marginBottom: '1.5rem' }} // You can adjust the spacing if needed
		>
			{children}
		</motion.div>
	);
};

export default MotionSection;
