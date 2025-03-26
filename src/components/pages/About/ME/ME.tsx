/* eslint-disable react/no-unescaped-entities */
const ME = () => {
	return (
		<div className="relative z-5 grid max-w-full flex-col place-content-center px-4 text-left lg:max-w-xl lg:px-2">
			<h2
				className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl mb-8 md:mb-8 text-left"
				style={{
					textShadow:
						'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',

					transform: 'translateY(20px)',
				}}
			>
				<p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
					More About Me
				</p>
				<span className="">
					<span className="">Hi there! I&apos;m </span>{' '}
					<span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
						Rabbani
					</span>
				</span>
			</h2>
			<p className="mx-auto max-w-xl text-base font-light tracking-wider text-[#f2f2f2cc] lg:mx-0 lg:text-base">
				I'm Golam Rabbani, a proactive frontend developer passionate about creating dynamic web
				experiences. From frontend to backend, I thrive on solving complex problems with clean,
				efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to
				learn more.
			</p>
			<p className="mx-auto my-6 max-w-xl text-base font-light tracking-wider text-[#f2f2f2cc] lg:mx-0 lg:text-base">
				When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and
				I love embracing every part of it.
			</p>
			<p className="mx-auto max-w-xl text-base font-light tracking-wider text-[#f2f2f2cc] lg:mx-0 lg:text-base">
				I believe in waking up each day eager to make a difference!
			</p>
		</div>
	);
};

export default ME;
