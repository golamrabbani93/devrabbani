import Projects from '@/components/Projects/Projects';
import {projectsData} from '@/data/projects';

const Project = () => {
	const topShowingProjects = projectsData?.slice(0, 3);
	return (
		<>
			<Projects projects={topShowingProjects} />
		</>
	);
};

export default Project;
