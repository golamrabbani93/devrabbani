import {motion, useMotionValue, useSpring} from 'framer-motion';
import {useEffect, useState} from 'react';

const MotionFollower = ({id}: {id: string}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const [isVisible, setIsVisible] = useState(false);
	// Smooth animation
	const smoothX = useSpring(mouseX, {stiffness: 100, damping: 15});
	const smoothY = useSpring(mouseY, {stiffness: 100, damping: 15});

	useEffect(() => {
		const element = document.getElementById(id);
		if (!element) return;
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX - 50);
			mouseY.set(e.clientY - 50);
			setIsVisible(true);
		};
		const handleMouseLeave = () => {
			setIsVisible(false);
		};
		element.addEventListener('mousemove', handleMouseMove);
		element.addEventListener('mouseenter', handleMouseMove);
		element.addEventListener('mouseover', handleMouseMove);
		element.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			element.removeEventListener('mouseover', handleMouseMove);
			element.removeEventListener('mouseenter', handleMouseMove);
			element.removeEventListener('mousemove', handleMouseMove);
			element.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [mouseX, mouseY, id]);

	return (
		<motion.div
			className="custom-cursor pointer-events-none top-0 left-0 fixed z-50 flex items-center justify-center rounded-full border border-white/[0.25] backdrop-blur-sm"
			style={{
				left: smoothX,
				top: smoothY,
				opacity: isVisible ? 1 : 0,
				scale: isVisible ? 1 : 0.5,
				height: '100px',
				width: '100px',
				backgroundColor: 'rgba(255,255,255,0.05)',
			}}
			animate={{
				opacity: isVisible ? 1 : 0,
				scale: isVisible ? 1 : 0.5,
			}}
			transition={{type: 'tween', duration: 0.15}}
		>
			<span className="pointer-events-none m-auto flex-auto text-center text-nowrap text-sm text-white">
				See Website
			</span>
		</motion.div>
	);
};

export default MotionFollower;
