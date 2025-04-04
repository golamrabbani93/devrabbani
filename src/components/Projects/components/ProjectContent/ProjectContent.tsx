/* eslint-disable @next/next/no-img-element */

import {IProjects} from '@/types/projects.interface';

interface ProjectContentProps {
	project: IProjects;
}

const ProjectContent = ({project}: ProjectContentProps) => {
	return (
		<div className="flex">
			<div aria-hidden="true" className="my-4 mr-4 h-1 min-w-6 rounded-full bg-pink-600"></div>
			<div className="flex flex-col items-start lg:h-[500px]">
				<div className="flex items-center gap-3">
					<h3 className="text-foreground text-2xl font-bold">{project?.name}</h3>
					<a
						href={project?.githubClientLink}
						target="_blank"
						rel="noopener noreferrer"
						className="relative flex h-fit w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-github size-4"
						>
							<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
							<path d="M9 18c-4.51 2-5-2-7-2"></path>
						</svg>
						Frontend
					</a>
					{project?.githubServerLink && (
						<a
							href={project?.githubServerLink}
							target="_blank"
							rel="noopener noreferrer"
							className="relative flex h-fit w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-github size-4"
							>
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
							Backend
						</a>
					)}
				</div>
				<p className="text-muted-foreground my-2 text-base font-light">{project?.description}</p>
				<ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">
					{project?.features?.slice(0, 3).map((feature, index) => (
						<li className="flex items-center text-sm" key={index}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className={`mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black `}
							>
								<path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
							</svg>
							{feature}
						</li>
					))}

					{/* Repeat for other list items */}
				</ul>
				<div className="mt-10 flex flex-wrap gap-3 text-sm">
					{project?.highLightTech?.map((tool, index) => (
						<div
							key={index}
							className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
							style={{opacity: 1, transform: 'none'}}
						>
							<img height="16" width="16" alt={tool.name} src={tool.image} />
							{tool.name}
						</div>
					))}

					{/* Repeat for other tech stack items */}
				</div>
			</div>
		</div>
	);
};

export default ProjectContent;
