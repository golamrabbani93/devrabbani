import Image from 'next/image';
import Internship from './components/Internship/Internship';
import Github from './components/Github/Github';

export default function Experiences() {
	return (
		<section id="experience" className="relative pt-24 pb-12 md:pt-32 md:pb-20">
			<div className="w-full md:px-10">
				<h2 className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-4 md:mb-0 max-w-lg mx-auto text-balance">
					<p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
						The Experience
					</p>
					<span className="">
						<span className="">Experience That Brings </span>
						<span
							className="text-colorfull animate-gradient-x font-nyght tracking-wide"
							style={{transform: 'scale(0.9)'}}
						>
							Ideas to Life
						</span>
					</span>
				</h2>

				<div className="relative mx-auto max-w-7xl pb-20">
					{/* First Experience */}
					<div className="flex justify-start pt-10 md:gap-10 md:pt-40">
						<div className="sticky top-40 z-40 flex max-w-xs flex-col items-start self-start md:w-full lg:max-w-sm">
							<div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
								<div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800"></div>
							</div>
							<div className="hidden md:block md:pl-20">
								<Internship />
							</div>
						</div>

						<div className="relative w-full pr-4 pl-20 md:pl-4">
							<div className="mb-4 block text-left text-2xl md:hidden">
								<Internship />
							</div>

							<div className="flex flex-col gap-y-4 text-xs leading-relaxed text-neutral-400 md:text-sm">
								<p>
									<b>Qwik IT Services</b> is a cutting-edge design agency specializing in building
									innovative web applications with a focus on user experience and performance.
								</p>

								<div className="space-y-3">
									<ul className="flex list-disc flex-col gap-y-2.5 text-neutral-400">
										<li>
											Integrated Sanity CMS with React to optimize content management across 3+
											enterprise-level websites, streamlining workflows and enhancing update
											efficiency by 30%.
										</li>
										<li>
											Engineered high-performance, accessible, and responsive user interfaces using
											Next.js and Tailwind CSS,leading to a 25% increase in user engagement and a
											20% improvement in page load times.
										</li>
										<li>
											Implemented Redux for state management in React applications, enhancing data
											flow efficiency and improving performance across multiple enterprise-level
											projects.
										</li>
										<li>
											Collaborated with a multidisciplinary team to deliver 5+ enterprise-level web
											solutions while consistently working 30+ hours per week, meeting tight
											deadlines and exceeding client expectations with high-impact, scalable
											implementations.
										</li>
										<li>
											Developed type-safe, scalable, and maintainable code using TypeScript,
											reducing bug reports by 15% and ensuring consistent performance across
											large-scale applications.
										</li>
										<li>
											Maintained high-quality code standards through regular code reviews, fostering
											continuous improvement across the team. Enhanced project workflows by
											introducing video meetings for better collaboration and efficiency.
										</li>
									</ul>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<Image
										alt="Open Source Contributor project"
										loading="lazy"
										width="500"
										height="240"
										decoding="async"
										data-nimg="1"
										className="h-20 w-full rounded-lg object-cover md:h-40 lg:h-48"
										src="/images/experience.jpg"
										style={{color: 'transparent'}}
									/>
									<Image
										alt="Open Source Contributor project"
										loading="lazy"
										width="500"
										height="240"
										decoding="async"
										data-nimg="1"
										className="h-20 w-full rounded-lg object-cover md:h-40 lg:h-48"
										src="/images/experience.jpg"
										style={{color: 'transparent'}}
									/>
								</div>

								<div className="flex flex-wrap gap-2">
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										React
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Next.js
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										TypeScript
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Redux
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Tailwind CSS
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Figma
									</span>

									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Vercel
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Second Experience */}
					<div className="flex justify-start pt-10 md:gap-10 md:pt-40">
						<div className="sticky top-40 z-40 flex max-w-xs flex-col items-start self-start md:w-full lg:max-w-sm">
							<div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
								<div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800"></div>
							</div>
							<div className="hidden md:block md:pl-20">
								<Github />
							</div>
						</div>

						<div className="relative w-full pr-4 pl-20 md:pl-4">
							<div className="mb-4 block text-left text-2xl md:hidden">
								<Github />
							</div>

							<div className="flex flex-col gap-y-4 text-xs leading-relaxed text-neutral-400 md:text-sm">
								<p>
									Github is a platform for developers to collaborate and contribute to open source
									projects.
								</p>

								<div className="space-y-3">
									<ul className="flex list-disc flex-col gap-y-2.5 text-neutral-400">
										<li>
											Contributed to open-source projects with 15,000+ Github stars, improving code
											quality, feature implementations, and documentation.
										</li>
										<li>
											Engaged with developer communities, collaborating on innovative solutions and
											best practices.
										</li>
									</ul>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<Image
										alt="Open Source Contributor project"
										loading="lazy"
										width="500"
										height="240"
										decoding="async"
										data-nimg="1"
										className="h-20 w-full rounded-lg object-cover md:h-40 lg:h-48"
										src="/images/experience.jpg"
										style={{color: 'transparent'}}
									/>
									<Image
										alt="Open Source Contributor project"
										loading="lazy"
										width="500"
										height="240"
										decoding="async"
										data-nimg="1"
										className="h-20 w-full rounded-lg object-cover md:h-40 lg:h-48"
										src="/images/experience.jpg"
										style={{color: 'transparent'}}
									/>
								</div>

								<div className="flex flex-wrap gap-2">
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Next.js
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										TypeScript
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Tailwind CSS
									</span>
									<span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
										Vercel
									</span>
								</div>
							</div>
						</div>
					</div>

					<div
						className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
						style={{height: '1488.47px'}}
					>
						<div
							className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-pink-500 from-[0%] via-blue-500 via-[10%] to-transparent"
							style={{height: '300px', opacity: 1}}
						></div>
					</div>
				</div>
			</div>
		</section>
	);
}
