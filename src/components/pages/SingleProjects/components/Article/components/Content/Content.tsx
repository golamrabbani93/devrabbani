import Header from './Header';
import Details from './Details';
import {projects} from '@/data/newProjects';

const Content = () => {
	const project = projects[0];
	console.log('🚀🚀 ~ Details ~ project:', project);
	return (
		<article className="flex min-w-0 w-full flex-col gap-4 px-4 pt-8 md:px-6 md:mx-auto xl:pt-12 xl:px-12 prose-lg prose-a:underline-offset-4 prose-a:decoration-blue-500">
			{/* HEADER */}
			<Header project={project} />
			<Details project={project} />
		</article>
	);
};

export default Content;
