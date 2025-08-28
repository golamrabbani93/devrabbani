import Projects from '@/components/Projects/Projects';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import Contact from '@/components/Contact/Contact';
import {allProjects} from '@/data/AllProjects';

const index = () => {
	const data = allProjects;
	return (
		<>
			<BreadCrumb />
			<section className="relative mx-auto w-full max-w-7xl mt-0 px-4 pt-36">
				<Projects projects={data} more={false} />
			</section>
			<Contact />
		</>
	);
};

export default index;
