import Projects from '@/components/Projects/Projects';
import {allProjects} from '@/data/AllProjects';

const Project = () => {
	const topShowingProjects = allProjects?.slice(0, 3);
	return (
		<>
			<Projects projects={topShowingProjects} />
		</>
	);
};

export default Project;
