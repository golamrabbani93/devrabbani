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
		// <motion.div
		// 	className="custom-cursor pointer-events-none top-0 left-0 fixed z-50 md:flex items-center justify-center rounded-full border border-white/[0.25] backdrop-blur-sm hidden"
		// 	style={{
		// 		left: smoothX,
		// 		top: smoothY,
		// 		opacity: isVisible ? 1 : 0,
		// 		scale: isVisible ? 1 : 0.5,
		// 		height: '100px',
		// 		width: '100px',
		// 		backgroundColor: 'rgba(255,255,255,0.05)',
		// 	}}
		// 	animate={{
		// 		opacity: isVisible ? 1 : 0,
		// 		scale: isVisible ? 1 : 0.5,
		// 	}}
		// 	transition={{type: 'tween', duration: 0.15}}
		// >
		// 	{/* <span className="pointer-events-none m-auto flex-auto text-center text-nowrap text-sm text-white">
		// 		See Website
		// 	</span> */}
		// </motion.div>
		<motion.div
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
			className="hidden custom-cursor pointer-events-none fixed top-[150px] left-[266px] z-50 md:flex items-center justify-center rounded-full border border-white/25 backdrop-blur-sm w-[100px] h-[100px] transform -translate-x-12 -translate-y-[58px] bg-white/10"
		>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
				<div className="relative rounded-full p-1.5 leading-none font-medium animate-rotate">
					<div className="relative rounded-full p-2 bg-transparent w-[100px] h-[100px]">
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 h-20">
							<svg
								className="w-full h-full absolute inset-0 transform origin-center"
								viewBox="0 0 100 100"
								overflow="visible"
								fill="black"
							>
								<path
									id="curve-wnxkz4"
									d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
									strokeWidth="none"
									fill="transparent"
								/>
								<text>
									<textPath
										href="#curve-wnxkz4"
										startOffset="0"
										dominantBaseline="hanging"
										className="text-[15px] font-semibold tracking-[2.1px]"
										style={{wordSpacing: '5px', fill: 'rgba(242, 242, 242, 0.9)'}}
									>
										VIEW DETAILS · VIEW DETAILS ·
									</textPath>
								</text>
							</svg>
						</div>
					</div>
					<span className="sr-only">VIEW DETAILS · VIEW DETAILS ·</span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 text-white p-3"
					aria-hidden="true"
				>
					<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
					<circle cx="12" cy="12" r="3" />
				</svg>
			</div>
		</motion.div>
	);
};

export default MotionFollower;
