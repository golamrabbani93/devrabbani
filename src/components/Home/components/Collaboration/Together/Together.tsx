import Image from 'next/image';

const Together = () => {
	return (
		<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 ">
			<div className="size-full">
				<div className="Obg-[url('/small-bg.webp')] flex size-full flex-col items-center justify-center bg-cover bg-center">
					<div className="relative mt-2">
						<Image
							aria-hidden="true"
							draggable="false"
							alt="wings"
							className="select-none"
							src="/images/wings.svg"
							width={338}
							height={110}
						/>
						<Image
							alt="GR"
							draggable="false"
							loading="lazy"
							width="70"
							height="70"
							decoding="async"
							data-nimg="1"
							className="absolute top-1/2 left-1/2 z-100 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full select-none md:size-10"
							src="/images/logo.png"
							style={{color: 'transparent'}}
						/>
					</div>
					<div
						className="shiny-text w-full -translate-y-4 text-center text-3xl font-bold text-balance"
						style={{animationDuration: '2s'}}
					>
						Let&apos;s work together on your next project
					</div>
					<div className="relative mx-4 mb-6 flex w-full max-w-[75%] items-center justify-center rounded-xl bg-white/15 p-0 md:mx-10 md:max-w-[70%]">
						<button className="items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90 flex w-full justify-center rounded-xl px-10 shadow-[inset_0_3px_10px_#ffffff3f]">
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
								<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
								<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
							</svg>
							devrabbani9@gmail.com
						</button>
					</div>
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
		</div>
	);
};

export default Together;
