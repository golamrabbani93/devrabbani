import {IProject} from '@/types/projects.interface';
import MotionFollower from '../MotionFollow/MotionFollow';
import {motion} from 'framer-motion';
import './Project.scss';
import Link from 'next/link';
import ResponsiveView from './ResponsiveView';
interface ProjectProps {
	id: string;
	project: IProject;
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
				<Link
					className="pointer-events-none relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:pointer-events-auto lg:h-[500px] lg:rounded-3xl lg:p-2"
					href={`/projects/${project?.name.toLowerCase()}`}
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
				</Link>
				<ResponsiveView project={project} />
			</div>
			<MotionFollower id={id} />
		</motion.div>
	);
};

export default Project;
