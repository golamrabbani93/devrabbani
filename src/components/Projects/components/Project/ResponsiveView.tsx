import {IProject} from '@/types/projects.interface';
import Link from 'next/link';

const ResponsiveView = ({project}: {project: IProject}) => {
	return (
		<div className="mt-6 mb-24 flex flex-col px-2 lg:hidden">
			<div className="flex items-center">
				<h2 className="my-auto line-clamp-1 text-lg font-bold">{project?.name}</h2>
				<div aria-hidden="true" className="ml-3 h-1 min-w-6 rounded-full bg-pink-600"></div>
			</div>
			<p className="text-muted-foreground mt-2 text-sm">{project?.description}</p>
			<div className="my-4 flex max-w-fit flex-wrap items-center gap-1">
				{project?.highLightTech?.map((tech, index) => (
					<div
						key={index}
						className="inline rounded-sm border-white/[0.34] px-1.5 py-[3px] text-xs fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black"
					>
						{tech.name}
					</div>
				))}
			</div>
			<Link
				href={`/projects/${project?.name.toLowerCase()}`}
				className="group relative flex w-fit items-center justify-between rounded-full bg-neutral-900 text-white opacity-90 border dark:border-white hover:bg-white hover:text-black transition-colors duration-200 size-9"
			>
				<span className="pl-4 text-base font-light">View Project Details</span>
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
					className="lucide lucide-arrow-up-right mr-1"
					aria-hidden="true"
				>
					<path d="M7 7h10v10"></path>
					<path d="M7 17 17 7"></path>
				</svg>
			</Link>
		</div>
	);
};

export default ResponsiveView;
