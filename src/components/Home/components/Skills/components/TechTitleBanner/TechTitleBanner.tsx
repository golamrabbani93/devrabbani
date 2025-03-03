'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';

const TechTitleBanner = () => {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY) {
				setRotation((prev) => prev + 3); // Rotate clockwise on scroll down
			} else if (currentScrollY < lastScrollY) {
				setRotation((prev) => prev - 3); // Rotate counterclockwise on scroll up
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="relative mx-auto size-fit overflow-hidden">
			<motion.div
				className="relative inset-x-0 -bottom-12 mx-auto size-[300px] md:-bottom-20 md:size-[380px]"
				style={{rotate: rotation}}
				transition={{type: 'spring', stiffness: 300, damping: 100}}
			>
				<Image
					draggable={false}
					alt="Skills cover rotating image"
					className="z-10 w-full select-none opacity-65"
					src="/images/gpt.webp"
					width={380}
					height={380}
					priority
				/>
			</motion.div>
			<h2
				className="text-4xl md:text-5xl text-center z-30 pb-5 mb-0 absolute w-full bottom-0"
				style={{
					textShadow:
						'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
				}}
			>
				<p className="mb-4 text-xs uppercase tracking-widest text-white/70 md:text-sm">
					I constantly try to improve
				</p>
				<span>My Tech Stack</span>
				<span className="text-colorfull font-nyght tracking-wide"></span>
			</h2>
			<div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 to-black"></div>
		</div>
	);
};

export default TechTitleBanner;
