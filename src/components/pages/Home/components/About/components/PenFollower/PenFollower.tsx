import {motion, useMotionValue, useSpring} from 'framer-motion';
import {useEffect} from 'react';

const PenFollower = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	// Smooth animation
	const smoothX = useSpring(mouseX, {stiffness: 100, damping: 15});
	const smoothY = useSpring(mouseY, {stiffness: 100, damping: 15});

	useEffect(() => {
		const element = document.getElementById('about');
		if (!element) return;
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX - 120);
			mouseY.set(e.clientY - 120);
		};

		element.addEventListener('mousemove', handleMouseMove);
		element.addEventListener('mouseenter', handleMouseMove);

		return () => {
			element.removeEventListener('mouseover', handleMouseMove);
			element.removeEventListener('mouseenter', handleMouseMove);
		};
	}, [mouseX, mouseY]);
	return (
		<motion.div
			id="wand"
			style={{
				left: smoothX,
				top: smoothY,
			}}
			transition={{type: 'tween', duration: 0.15}}
		>
			<div className="cap"></div>
		</motion.div>
	);
};

export default PenFollower;
