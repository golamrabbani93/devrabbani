import {IProject} from '@/types/projects.interface';
import Challenge from './Challenge';
import Features from './Features';
import Footer from './Footer';
import Overview from './Overview';
import TechStack from './TechStack';
import Outcome from './Outcome';

/* eslint-disable @next/next/no-img-element */
const Details = ({project}: {project: IProject}) => {
	return (
		<div className="prose">
			<div>
				<div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:p-2">
					<span aria-owns="rmiz-modal-f6d8cb589b2c" data-rmiz="">
						<span data-rmiz-content="found" style={{visibility: 'visible'}}>
							<img
								alt="Next Venture screenshot"
								loading="lazy"
								width="1203"
								height="753"
								decoding="async"
								className="!my-0 rounded-[8px] lg:my-0"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
								src="/images/project-breadcrumb.png"
								style={{color: 'transparent'}}
							/>
						</span>
					</span>
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
			<Footer />
		</div>
	);
};

export default Details;
