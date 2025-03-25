import Projects from '@/components/Projects/Projects';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import {projectsData} from '@/data/projects';

const index = () => {
	return (
		<>
			<BreadCrumb />
			<section className="relative mx-auto w-full max-w-7xl mt-0 px-4 py-36">
				<Projects projects={projectsData} more={false} />
			</section>
		</>
	);
};

export default index;
