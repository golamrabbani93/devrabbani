import {IProjects} from '@/types/projects.interface';
import MotionFollower from '../MotionFollow/MotionFollow';
import {motion} from 'framer-motion';
import './Project.scss';
interface ProjectProps {
	id: string;
	project: IProjects;
}
const Project = ({project, id}: ProjectProps) => {
	return (
		<motion.div
			id="ProjectCard"
			className="project-card flex w-full flex-row"
			initial={{opacity: 0, scale: 0.8}}
			whileInView={{opacity: 1, scale: 1}}
			transition={{duration: 1}}
			exit={{opacity: 0, scale: 0.8}}
		>
			<div className="flex flex-col lg:mx-10 lg:w-full">
				<a
					target="_blank"
					draggable="false"
					className="pointer-events-none relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:pointer-events-auto lg:h-[500px] lg:rounded-3xl lg:p-2"
					href={project?.liveLink}
				>
					<div
						className="absolute inset-x-0 top-0 h-px"
						style={{
							background:
								'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)',
						}}
					></div>
					<div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-b from-black to-transparent transition-all duration-300 z-20">
						<div
							className="item w-full lg:w-[30rem] xl:w-[45rem] h-[300px] lg:h-full bg-cover bg-center bg-no-repeat"
							style={{
								backgroundImage: `url(${project?.fullPhoto})`,
							}}
						></div>
					</div>
				</a>
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
					<div className="flex w-full gap-4">
						<a
							href={project?.githubClientLink}
							target="_blank"
							rel="noopener noreferrer"
							className="relative flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]"
						>
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
								className="lucide lucide-github size-4"
							>
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
							Code
						</a>
						<a
							href={project?.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="relative flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] after:inset-0 after:bg-black/50"
						>
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
								className="lucide lucide-external-link size-4"
							>
								<path d="M15 3h6v6"></path>
								<path d="M10 14 21 3"></path>
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
							</svg>
							Website
						</a>
					</div>
				</div>
			</div>
			<MotionFollower id={id} />
		</motion.div>
	);
};

export default Project;
