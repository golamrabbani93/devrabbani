'use client';
import {IProject} from '@/types/projects.interface';
import Link from 'next/link';

const Header = ({project}: {project: IProject}) => {
	return (
		<header className="flex flex-col gap-y-4">
			<button
				onClick={() => history.back()}
				className="group relative flex w-fit items-center justify-between rounded-full bg-neutral-900 text-white opacity-90 border dark:border-white hover:bg-white hover:text-black transition-colors duration-200 p-2"
			>
				<span className="pl-4 text-base font-bold">Back</span>
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
					className="lucide lucide-corner-down-left-icon lucide-corner-down-left mx-2"
				>
					<path d="M20 4v7a4 4 0 0 1-4 4H4" />
					<path d="m9 10-5 5 5 5" />
				</svg>
			</button>
			<div className="flex flex-col justify-between gap-y-4 md:flex-row">
				<h1 className="text-3xl font-bold md:text-4xl">{project?.name}</h1>
				<div className="md:flex w-fit gap-x-2 max-sm:flex-row-reverse md:text-sm">
					<div className="flex gap-2 mb-2 md:mb-0 justify-center">
						<Link
							href={project?.githubClientLink || '#'}
							referrerPolicy="no-referrer"
							target="_blank"
							className="group relative flex w-fit items-center justify-between rounded-full bg-neutral-900 text-white opacity-90 border dark:border-white hover:bg-white hover:text-black transition-colors duration-200 "
						>
							<span className="pl-4 text-base font-light">Front-End</span>
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								strokeLinecap="round"
								strokeLinejoin="round"
								height="20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
								className="mx-2"
							>
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
						</Link>
						{project?.githubServerLink && (
							<Link
								href={project?.githubServerLink || '#'}
								referrerPolicy="no-referrer"
								target="_blank"
								className="group relative flex w-fit items-center justify-between rounded-full bg-neutral-900 text-white opacity-90 border dark:border-white hover:bg-white hover:text-black transition-colors duration-200 "
							>
								<span className="pl-4 text-base font-light">Back-End</span>
								<svg
									stroke="currentColor"
									fill="none"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="20"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									className="mx-2"
								>
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
									<path d="M9 18c-4.51 2-5-2-7-2"></path>
								</svg>
							</Link>
						)}
					</div>

					{/* Live Link */}
					<Link
						href={project?.liveLink || '#'}
						referrerPolicy="no-referrer"
						target="_blank"
						className="group relative flex w-fit items-center justify-between rounded-full bg-neutral-900 text-white opacity-90 dark:bg-white dark:text-black "
					>
						<span className="pl-4 text-base font-light">Check it out</span>
						<div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
							<div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
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
									className="lucide lucide-arrow-up-right size-5"
									aria-hidden="true"
								>
									<path d="M7 7h10v10"></path>
									<path d="M7 17 17 7"></path>
								</svg>
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
									className="lucide lucide-arrow-up-right mb-1 size-5 -translate-x-4"
									aria-hidden="true"
								>
									<path d="M7 7h10v10"></path>
									<path d="M7 17 17 7"></path>
								</svg>
							</div>
						</div>
					</Link>
				</div>
			</div>

			{/* Description */}
			<p className="text-sm text-neutral-600 md:text-base dark:text-neutral-400">
				{project?.descriptions?.head}
			</p>

			{/* Badges */}
			<div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
				{project?.highLightTech?.map((tech) => (
					<span
						key={tech.name}
						data-slot="badge"
						className="inline-flex items-center justify-center border w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90 rounded-sm px-1.5 py-0.5 text-xs"
					>
						{tech.name}
					</span>
				))}
			</div>

			{/* Founder */}
			<div className="flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm bg-[#191919] shadow-md">
				<div role="none" className="w-0.5 bg-blue-500 rounded-sm"></div>
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
					className="lucide size-5 -me-0.5  bg-blue-500 rounded-xl text-fd-card"
				>
					<circle cx="12" cy="12" r="10" className="text-blue-500"></circle>
					<path d="M12 16v-4"></path>
					<path d="M12 8h.01"></path>
				</svg>
				<div className="flex flex-col gap-2  min-w-0 flex-1">
					<p className="font-medium !my-0">🚀 Fueling Founders</p>
					<div className="text-fd-muted-foreground prose-no-margin empty:hidden">
						<p></p>
						<p dangerouslySetInnerHTML={{__html: project?.descriptions?.founders}}></p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
