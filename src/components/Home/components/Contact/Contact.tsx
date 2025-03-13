import Rotate from './components/Rotate/Rotate';
import TopImage from './components/TopImage/TopImage';

const Contact = () => {
	return (
		<div className="relative z-0 mt-40 flex w-full justify-center overflow-x-hidden bg-[url('/images/cta.avif')]  bg-cover bg-center px-4 py-20 ">
			<div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-2 py-10 text-center lg:mx-0">
				<div
					draggable="false"
					className="absolute top-1/2 left-1/2 z-50 -translate-y-1/2 translate-x-[130px] cursor-grab overflow-hidden rounded-full md:-translate-y-[230px] lg:-translate-y-[70px] lg:translate-x-[280px]"
					style={{
						WebkitTouchCallout: 'none',
						WebkitUserSelect: 'none',
						userSelect: 'none',
						touchAction: 'none',
					}}
				>
					<div className="overflow-hidden rounded-full">
						<Rotate />
					</div>
				</div>

				<div className="relative">
					<TopImage />
				</div>
				<span className="mt-4 text-2xl font-light tracking-wide text-white sm:text-4xl lg:text-5xl">
					<h3 className="text-nowrap" style={{opacity: 1, transform: 'none'}}>
						FROM CONCEPT TO <span className="font-extrabold">CREATION</span>
					</h3>
					<h3 className="mt-3 text-nowrap" style={{opacity: 1, transform: 'none'}}>
						LET&apos;s MAKE IT <span className="font-extrabold">HAPPEN!</span>
					</h3>
				</span>
				<div className="group" style={{transform: 'none'}}>
					<div className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1 my-10 group-hover:scale-125">
						<span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
							Get In Touch
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
				</div>
				<p className="tracking-wid text-base font-semibold lg:text-2xl">
					I&apos;m available for full-time roles & freelance projects.
				</p>
				<p className="my-2 text-sm font-extralight tracking-wide text-balance opacity-75 lg:text-xl">
					I thrive on crafting dynamic web applications, and
					<br />
					delivering seamless user experiences.
				</p>
			</div>
			<div aria-hidden="true" className="absolute inset-0 z-0 bg-black opacity-90"></div>
		</div>
	);
};

export default Contact;
