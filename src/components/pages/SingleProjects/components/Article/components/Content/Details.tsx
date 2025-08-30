import {IProject} from '@/types/projects.interface';
import Challenge from './Challenge';
import Features from './Features';
import Overview from './Overview';
import TechStack from './TechStack';
import Outcome from './Outcome';
import './Content.scss';
const Details = ({project}: {project: IProject}) => {
	return (
		<div className="prose">
			<div>
				<div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:p-2">
					{/* Image Section */}
					<div className="pointer-events-none relative cursor-pointer overflow-hidden rounded-2xl  shadow-2xl md:pointer-events-auto lg:h-[500px]">
						<div
							className="absolute inset-x-0 top-0 h-px"
							style={{
								background:
									'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)',
							}}
						></div>
						<div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-b from-black to-transparent transition-all duration-100 z-20">
							<div
								className="item w-full  h-[300px] lg:h-full bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url(${project?.fullPhoto})`,
								}}
							></div>
						</div>
					</div>
				</div>
			</div>

			{/* --- Sections with h2, hr, etc. --- */}
			<Overview overview={project?.descriptions?.overview} />
			<hr className="mt-5" />
			<Features features={project?.keyFeatures} />
			<hr className="mt-5" />
			<TechStack techStack={project?.technologies} />
			<hr className="mt-5" />
			<Challenge challenge={project?.Challenges} />
			<hr className="mt-5" />
			<Outcome Outcome={project?.descriptions?.outcome} />
		</div>
	);
};

export default Details;
