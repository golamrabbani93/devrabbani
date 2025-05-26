import {contactDrawer} from '@/utils/drawer';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
	const bannerBG = {backgroundImage: `url(/images/banner/bgBluredHero.avif)`};

	return (
		<section
			className="relative min-h-screen w-full overflow-hidden bg-cover bg-right pb-10 lg:bg-center"
			style={bannerBG}
		>
			<div className="animate-fadeInUp relative z-20 mx-auto mt-32 mb-2 flex max-w-full flex-col items-center justify-center px-3 delay-200 md:mt-36 md:max-w-4xl lg:max-w-5xl">
				<Link
					href="https://drive.google.com/file/d/1I2R7nnqgCk0HBGVPAexzEVUi1zgGYdLG/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className="group flex cursor-pointer items-center rounded-full border border-black/5 bg-neutral-200 text-sm text-white backdrop-blur-xs transition-all ease-in lg:text-base dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
				>
					<span className="mx-1 rounded-full bg-blue-700 px-1.5 text-xs leading-relaxed">New</span>
					<div
						className="shiny-text px-1 py-0.5 hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-400 animate-shine"
						style={{animationDuration: '4s'}}
					>
						My Resume is live!
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
						className="lucide lucide-chevron-right mr-1 size-4 text-neutral-100/70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hover:duration-300"
					>
						<path d="m9 18 6-6-6-6"></path>
					</svg>
				</Link>

				<h2 className="animate-fadeInUp my-2 w-full py-px text-center text-4xl leading-snug font-semibold text-balance text-zinc-700 opacity-90 delay-400 md:text-5xl lg:text-6xl dark:text-zinc-100">
					<span className="md:text-nowrap md:leading-tight">I help founders turn ideas</span>
					<br className="hidden md:block" />
					into seamless
					<span className="font-nyght bg-gradient-to-bl from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide text-transparent ml-4 ">
						digital experiences
					</span>
				</h2>

				<h1 className="grad-white animate-fadeInUp relative z-10 mt-4 mb-7 flex flex-col items-center justify-center text-center text-xl delay-600 sm:flex-row md:text-xl lg:mt-7 lg:text-2xl">
					<span className="grad-white flex items-center justify-center">
						Hello, I&apos;m Golam Rabbani
						<div className="group relative z-300">
							<Image
								draggable="false"
								alt="Golam Rabbani"
								loading="lazy"
								width="854"
								height="421"
								decoding="async"
								className="mx-2 w-16 cursor-pointer rounded-3xl transition-all duration-300 hover:scale-[4] md:w-20 lg:mx-3"
								src="/images/myphoto.png"
							/>
						</div>
					</span>
					<span className="grad-white leading-relaxed">a Front-End Developer</span>
				</h1>

				<div className="animate-fadeInUp z-100 mt-4 flex flex-col items-center justify-center gap-6 delay-800 md:mt-8 md:flex-row md:gap-10">
					<div
						onClick={contactDrawer}
						className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1"
					>
						<span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
							Let&apos;s Connect
						</span>
						<span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
						<span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
							>
								<path d="M5 12h14"></path>
								<path d="m12 5 7 7-7 7"></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
							>
								<path d="M5 12h14"></path>
								<path d="m12 5 7 7-7 7"></path>
							</svg>
						</span>
					</div>

					<button className="flex items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-copy"
						>
							<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
							<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2 2h10c1.1 0 2 .9 2 2"></path>
						</svg>
						devrabbani9@gmail.com
					</button>
				</div>
			</div>

			<div className="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-32 h-96 w-screen max-w-[--breakpoint-2xl] overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_80%)] before:opacity-60">
				<div className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e]"></div>
			</div>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-gradient-to-t from-white opacity-100 dark:from-black"
			></div>
		</section>
	);
};

export default Banner;
