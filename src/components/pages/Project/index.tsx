import Projects from '@/components/Projects/Projects';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import {projectsData} from '@/data/projects';
import Contact from '@/components/Contact/Contact';

const index = () => {
	const data = projectsData.filter((project) => project.filter === 'dynamic');
	return (
		<>
			<BreadCrumb />
			<section className="relative mx-auto w-full max-w-7xl mt-0 px-4 pt-36">
				<Projects projects={data} more={false} />
				<Contact />
			</section>
		</>
	);
};

export default index;
