import {allProjects} from '@/data/AllProjects';
import Article from './components/Article/Article';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const SingleProjects = ({slug}: {slug: string}) => {
	const project = allProjects.find((proj) => proj.name.toLowerCase() === slug);

	// return to not found page
	if (!project) {
		return <NotFoundPage />;
	}

	return (
		<main className="relative mx-auto w-full">
			{/* Breadcrumb component here */}
			<Breadcrumb />
			<div className="pt-60"></div>
			<Article project={project} />
		</main>
	);
};

export default SingleProjects;
