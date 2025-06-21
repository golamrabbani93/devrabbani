import Project from '@/components/pages/Project';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Works || DevRabbani',
	description:
		'Explore the projects and works of DevRabbani, showcasing web development skills and innovative solutions.',
};
const page = () => {
	return (
		<div>
			<Project />
		</div>
	);
};

export default page;
