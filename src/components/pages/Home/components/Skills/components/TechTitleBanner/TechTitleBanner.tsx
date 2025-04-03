'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {useEffect, useRef} from 'react';
import TextAnimation from '@/components/Animation/TextAnimation/TextAnimation';

const TechTitleBanner = () => {
	const rotationRef = useRef(0); // Use ref to store rotation without triggering re-renders
	const imageRef = useRef<HTMLDivElement>(null); // Reference for the rotating image
	let ticking = false; // Prevents redundant scroll event calls

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const currentScrollY = window.scrollY;
					const rotationDelta = currentScrollY > lastScrollY ? 1 : -1;
					rotationRef.current += rotationDelta; // Update rotationRef instead of state

					// Apply rotation directly to the image
					if (imageRef.current) {
						imageRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
					}

					lastScrollY = currentScrollY;
					ticking = false;
				});
				// eslint-disable-next-line react-hooks/exhaustive-deps
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="relative mx-auto size-fit overflow-hidden">
			{/* Rotating Image */}
			<div
				ref={imageRef} // Apply rotation directly to this div
				className="relative inset-x-0 -bottom-12 mx-auto size-[300px] md:-bottom-20 md:size-[380px]"
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
			</div>

			{/* Animated Heading */}
			<motion.h2
				className="text-4xl md:text-6xl text-center z-30 pb-5 mb-0 absolute w-full bottom-0"
				style={{
					textShadow:
						'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
				}}
				initial={{opacity: 0, y: 20}}
				whileInView={{opacity: 1, y: 0}}
				exit={{opacity: 0, y: 20}}
				transition={{duration: 0.5}}
			>
				<TextAnimation>I constantly try to improve</TextAnimation>
				<span>My Tech </span>
				<motion.span
					initial={{scale: 0.8}}
					whileInView={{scale: 1}}
					exit={{scale: 0.9}}
					className="text-colorfull animate-gradient-x font-nyght tracking-wide"
				>
					Stack
				</motion.span>
			</motion.h2>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-[#09090b]/5 to-[#09090b]"></div>
		</div>
	);
};

export default TechTitleBanner;
