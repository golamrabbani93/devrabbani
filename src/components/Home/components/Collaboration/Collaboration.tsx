'use client';

import Link from 'next/link';

import dynamic from 'next/dynamic';
import GlobeAnimation from './GlobeAnimation/GlobeAnimation';
const Collaboration = () => {
	return (
		<div className="mx-auto grid w-full max-w-sm auto-rows-[21rem] grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] my-20">
			{/* video start*/}
			<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-4">
				<div className="size-full">
					<div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
						<div
							aria-hidden="true"
							className="flex absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[45%]"
						>
							<div className="group w-32 overflow-hidden rounded-xl border-2 border-white/30 shadow-2xl shadow-black transition-all lg:w-40 transform-gpu hover:rotate-0 hover:scale-110 rotate-12 -translate-x-[0px]">
								<video muted loop playsInline preload="metadata" className="scale-105">
									<source src="/video/d.webm" type="video/webm" />
								</video>
							</div>
							<div className="group w-32 overflow-hidden rounded-xl border-2 border-white/30 shadow-2xl shadow-black transition-all lg:w-40 transform-gpu hover:rotate-0 hover:scale-110 -rotate-12 -translate-x-[30px]">
								<video muted loop playsInline preload="metadata" className="scale-105">
									<source src="/video/c.webm" type="video/webm" />
								</video>
							</div>
							<div className="group w-32 overflow-hidden rounded-xl border-2 border-white/30 shadow-2xl shadow-black transition-all lg:w-40 transform-gpu hover:rotate-0 hover:scale-110 rotate-12 -translate-x-[60px]">
								<video muted loop playsInline preload="metadata" className="scale-105">
									<source src="/video/a.webm" type="video/webm" />
								</video>
							</div>
							<div className="group w-32 overflow-hidden rounded-xl border-2 border-white/30 shadow-2xl shadow-black transition-all lg:w-40 transform-gpu hover:rotate-0 hover:scale-110 -rotate-12 -translate-x-[90px]">
								<video muted loop playsInline preload="metadata" className="scale-105">
									<source src="/video/b.webm" type="video/webm" />
								</video>
							</div>
						</div>
					</div>
				</div>
				<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
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
						className="lucide lucide-heart-handshake size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
					>
						<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
						<path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
						<path d="m18 15-2-2"></path>
						<path d="m15 18-2-2"></path>
					</svg>
					<h3 className="max-w-lg text-neutral-400">Collaboration</h3>
					<p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
						I prioritize client collaboration, fostering open communication
					</p>
				</div>
				<div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
					<Link
						href="/cal"
						data-slot="button"
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 has-[>svg]:px-2.5 pointer-events-auto"
					>
						Book a call
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
							className="lucide lucide-arrow-right ml-2 size-4"
						>
							<path d="M5 12h14"></path>
							<path d="m12 5 7 7-7 7"></path>
						</svg>
					</Link>
				</div>
				<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
			</div>
			{/* video End*/}
			{/* Globe Start */}
			<GlobeAnimation />
			{/* Globe Ends */}
			{/* Technology Canvas Start */}
			<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2">
				<div className="size-full">
					<div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]">
						<div className="absolute -top-52 left-0 -z-1 min-w-full scale-[1.3] md:-top-20 md:z-15 lg:-top-12">
							<div>
								<div
									id="canvas-container-ea4b651b-61e6-0a6c-5f55-f8e118cd45f0"
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										paddingTop: '40px',
									}}
								>
									<canvas
										id="canvas-ea4b651b-61e6-0a6c-5f55-f8e118cd45f0"
										width="1000"
										height="1000"
										style={{width: '100%', maxWidth: '70vh'}}
										title=""
									>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 1"
												src="https://cdn.simpleicons.org/typescript"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 2"
												src="https://cdn.simpleicons.org/javascript"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 3"
												src="https://cdn.simpleicons.org/react"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 4"
												src="https://cdn.simpleicons.org/nextdotjs/white"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 5"
												src="https://cdn.simpleicons.org/nodedotjs"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 6"
												src="https://cdn.simpleicons.org/zod"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 7"
												src="https://cdn.simpleicons.org/android"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 8"
												src="https://cdn.simpleicons.org/html5"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 9"
												src="https://cdn.simpleicons.org/css3"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 10"
												src="https://cdn.simpleicons.org/express/white"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 11"
												src="https://cdn.simpleicons.org/prisma"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 12"
												src="https://cdn.simpleicons.org/mongodb"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 13"
												src="https://cdn.simpleicons.org/amazonwebservices"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 14"
												src="https://cdn.simpleicons.org/postgresql"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 15"
												src="https://cdn.simpleicons.org/nginx"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 16"
												src="https://cdn.simpleicons.org/vercel/white"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 17"
												src="https://cdn.simpleicons.org/jest"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 18"
												src="https://cdn.simpleicons.org/docker"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 19"
												src="https://cdn.simpleicons.org/git"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 20"
												src="https://cdn.simpleicons.org/github/white"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 21"
												src="https://cdn.simpleicons.org/pnpm"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 22"
												src="https://cdn.simpleicons.org/npm"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 23"
												src="https://cdn.simpleicons.org/shadcnui"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 24"
												src="https://cdn.simpleicons.org/tailwindcss"
											/>
										</Link>
										<Link href="#">
											<img
												height="38"
												width="38"
												alt="Tech icon 25"
												src="https://cdn.simpleicons.org/framer"
											/>
										</Link>
									</canvas>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
					<h3 className="max-w-lg text-neutral-400">Tech Enthusiast</h3>
					<p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
						Passionate about cutting-edge development technologies
					</p>
				</div>

				<div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
					<Link
						href="/#skills"
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 pointer-events-auto"
					>
						Know more
					</Link>
				</div>

				<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
			</div>

			{/* Technology Canvas End */}
		</div>
	);
};

export default dynamic(() => Promise.resolve(Collaboration), {
	ssr: false,
});
