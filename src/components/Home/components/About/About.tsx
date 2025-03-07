/* eslint-disable react/no-unescaped-entities */
import {motion} from 'framer-motion';
import Image from 'next/image';
import PenFollower from './components/PenFollower/PenFollower';
import {useState} from 'react';

const About = () => {
	const [visible, setVisible] = useState(false);
	return (
		<section id="about" className="relative py-10 lg:max-h-[1300px]">
			<div className="relative mx-auto mb-10 flex max-w-[1000px] flex-col items-center justify-center gap-8 lg:size-full lg:flex-row lg:justify-between">
				{/* Wrap PenFollower in motion.div to trigger hover */}

				<PenFollower />

				<div
					onMouseEnter={() => setVisible(false)}
					className="z-5 relative grid max-w-full flex-col place-content-center px-4 text-center lg:max-w-xl lg:px-2 lg:text-left"
				>
					<h2
						className="z-2 relative md:text-5xl text-center lg:text-left mt-28 mb-12 text-3xl"
						style={{
							textShadow:
								'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
						}}
					>
						<p className="mb-4 text-xs uppercase tracking-widest text-white/70 md:text-sm">
							MORE ABOUT ME
						</p>
						<span>MERN-Stack Developer and a little bit of </span>
						<span className="text-colorfull font-nyght tracking-wide">everything</span>
					</h2>
					<p className="mx-auto max-w-xl text-base font-light tracking-wider text-[#f2f2f2cc] lg:mx-0 lg:text-base text-justify">
						I'm Golam Rabbani, a proactive MERN-stack developer passionate about creating dynamic
						web experiences. From frontend to backend, I thrive on solving complex problems with
						clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always
						eager to learn more.
					</p>
					<p className="mx-auto my-6 max-w-xl text-base font-light tracking-wider text-[#f2f2f2cc] lg:mx-0 lg:text-base text-justify">
						When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance,
						and I love embracing every part of it.
					</p>
					<p className="mx-auto max-w-xl text-base font-light tracking-wider text-[#f2f2f2cc] lg:mx-0 lg:text-base">
						I believe in waking up each day eager to make a difference!
					</p>
				</div>

				{/* Image Section */}
				<motion.div
					id="tiles"
					className="tile relative grid aspect-square w-56 place-content-center overflow-hidden rounded-full lg:mt-20 lg:w-80"
					onMouseEnter={() => setVisible(true)}
				>
					{/* First image (logo) */}
					<Image
						alt="AB Logo"
						src="/images/logo.png"
						layout="fill"
						className={`${
							!visible && 'border-[3px] border-white'
						} text-[15vmin] text-white/60 lg:opacity-100  p-4`}
					/>

					{/* Second image (hidden initially) */}
					<motion.div
						className="absolute inset-0"
						initial={{opacity: 0, filter: 'blur(10px)'}}
						animate={{opacity: visible ? 1 : 0, filter: visible ? 'blur(0px)' : 'blur(10px)'}}
						transition={{duration: 0.4}}
					>
						<Image
							alt="Golam Rabbani"
							src="/images/gradient-photo.png"
							layout="fill"
							className="absolute inset-0 object-cover"
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
