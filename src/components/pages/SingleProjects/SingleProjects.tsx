import Article from './components/Article/Article';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

const SingleProjects = () => {
	return (
		<main className="relative mx-auto w-full">
			{/* Breadcrumb component here */}
			<Breadcrumb />
			<div className="pt-60"></div>
			<Article />
		</main>
	);
};

export default SingleProjects;
